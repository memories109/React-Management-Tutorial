import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import  { Table, TableHead, TableBody,TableRow,TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const styles = theme => ({
  root: {
    width : '100%',
    minWidth: 1080
  },
  paper:{
    marginLeft: 18,
    marginRight: 18
  },
  TableHead: {
    fontSize: '1.0rem'
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin : theme.spacing(2) 
  },
  menu: {
    marginTop: 15,
    marginBotoom: 15,
    display: 'flex',
    justifyContent:'center'
  }
})

class App extends Component{ 
  constructor(props){
    super(props);
    this.state = {
      customers: '',
      completed:0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers:'',
      completed:0
    });
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);

    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 1})
  }

  render() {
    const {classes } = this.props;
    const cellList = ["번호", "프로필 이미지","이름","생년월일","성별","직업","설정"]
    return (
      <div className ={classes.root}>
         <Box sx={{ flexGrow: 1 }}>
           <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  고객 관리 시스템
                </Typography>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Toolbar>
            </AppBar>
            </Box>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {cellList.map(c => {
                  return <TableCell className={classes.TableHead} key={c}>{c}</TableCell>
                })}
              </TableRow>
              </TableHead>
            <TableBody>
            {
            this.state.customers ? this.state.customers.map(c => {
              return (
                <Customer
                stateRefresh={this.stateRefresh}
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
              )
            })
          : <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
              </TableCell>
            </TableRow>
            }
            </TableBody>
          </Table>
          </Paper>
          <div className={classes.menu}>
          <CustomerAdd stateRefresh={this.stateRefresh}/>
          </div>
        </div>
    );
  }
}

export default withStyles(styles)(App);

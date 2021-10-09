import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import  { Table, TableHead, TableBody,TableRow,TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:'auto'
  },
  table: {
    minWidth: 1080
  }

})

const customer = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '소소소',
  'birthday': '222',
  'gender':'sdfsdfsd'

  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '수수수',
  'birthday': '233332',
  'gender':'sdfsdfㄴㅇㄹㄴㅇㄹㄴsd'

  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '솨솨솨',
  'birthday': '24444',
  'gender':'ㅎㅎㅎㅎ'

  }
]
class App extends Component{ 
  render() {
    const {classes } = this.props;
    return (
      <Paper className ={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
            </TableHead>
          <TableBody>
          {
          customer.map(c => {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              />
            )
          })
        }

          </TableBody>

          
        </Table>
      
        </Paper>
      
    );
  }
}

export default withStyles(styles)(App);

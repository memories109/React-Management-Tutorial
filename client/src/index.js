import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme ({
  typography: {
    fontFamily: '"Noto Sans KR", serif',
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}><App /></ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';

const theme={
  titleBgColor: '#d6e6f7',
  titleBorderColor: '#95b2ce',
  titleColor: '#526271;',
  eventsBoardBg: '#e2e5ea',
  eventsBoardBorder: '#b8babe',
  eventBg: '#fbe5d7',
  eventBorder: '#ccbaa7',
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
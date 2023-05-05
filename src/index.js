import React from 'react';
import ReactDOM from 'react-dom/client';
import JobListing from './jobListing';
import { createGlobalStyle } from 'styled-components'
import Header from './header'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Spartan', sans-serif;
    margin: 0;
    background-color: hsl(180, 52%, 96%);
    font-size: 15px
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap" rel="stylesheet"/>
    <GlobalStyle/>
    <Header/>
    <JobListing/>
  </React.StrictMode>
);


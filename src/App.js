import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes/index'
import GlobalStyles from "./styles/global"
import Header from "./components/Header"

function App() {
  return (
    <> 
      <BrowserRouter>
        <GlobalStyles/>
        <Header/>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;

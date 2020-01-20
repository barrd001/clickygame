import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';
// import { Component } from 'materialize-css';
// import './App.css';

class App extends Component {
  
  render(){
  return (
   
    
    <BrowserRouter>
    <div className="App">
      <Navbar />
     <Header />
     <Main />
     <Footer />
    </div>
    </BrowserRouter>
  );
}
}

export default App;

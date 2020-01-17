import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';
// import { Component } from 'materialize-css';
// import './App.css';

class App extends Component {
  state = {
    cards: [
      {name: 'lsu', image: '', wasClicked: true, id: 1 },
      {name: 'clemson', image: '', wasClicked: false, id: 2 },
      {name: 'ohioState', image: '', wasClicked: false, id: 3 },
      {name: 'georgia', image: '', wasClicked: false, id: 4 },
      {name: 'oregon', image: '', wasClicked: false, id: 5 },
      {name: 'florida', image: '', wasClicked: false, id: 6 },
      {name: 'oklahoma', image: '', wasClicked: false, id: 7 },
      {name: 'alabama', image: '', wasClicked: false, id: 8 },
      {name: 'pennState', image: '', wasClicked: false, id: 9 },
      {name: 'minnesota', image: '', wasClicked: false, id: 10 },
      {name: 'wisconsin', image: '', wasClicked: false, id: 11 },
      {name: 'notreDame', image: '', wasClicked: false, id: 12 },
      {name: 'baylor', image: '', wasClicked: false, id: 13 },
      {name: 'auburn', image: '', wasClicked: false, id: 14 },
      {name: 'iowa', image: '', wasClicked: false, id: 15 },
      {name: 'utah', image: '', wasClicked: false, id: 16 }
    ]
  }
  render(){

    console.log(this.state.cards)
  return (
   
    
    <BrowserRouter>
    <div className="App">
    <div>
       {this.state.cards.map((card, index) => (
      <p key={card.id} > Hello, {card.name} Clicked? {card.wasClicked} </p>
       )
      )} </div>
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

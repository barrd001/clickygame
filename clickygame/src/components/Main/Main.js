import React, { Component } from 'react';
import './Main.css'
import lsu from '../../Images/lsu.jfif';
import clemson from '../../Images/clemson.png';
import ohioState from '../../Images/ohioState.png';
import georgia from '../../Images/georgia.png';
import oregon from '../../Images/oregon.png';
import florida from '../../Images/florida.png';
import oklahoma from '../../Images/oklahoma.png';
import alabama from '../../Images/alabama.jfif';
import pennState from '../../Images/pennState.png';
import minnesota from '../../Images/minnesota.png';
import wisconsin from '../../Images/wisconsin.png';
import notreDame from '../../Images/notreDame.png';
import baylor from '../../Images/baylor.png';
import auburn from '../../Images/auburn.jfif';
import iowa from '../../Images/iowa.png';
import utah from '../../Images/utah.png';



class Main extends Component {

  

 state = {
  cards: [
    {name: 'lsu', image: lsu, wasClicked: true, id: 1 },
    {name: 'clemson', image: clemson, wasClicked: false, id: 2 },
    {name: 'ohioState', image: ohioState, wasClicked: false, id: 3 },
    {name: 'georgia', image: georgia, wasClicked: false, id: 4 },
    {name: 'oregon', image: oregon, wasClicked: false, id: 5 },
    {name: 'florida', image: florida, wasClicked: false, id: 6 },
    {name: 'oklahoma', image: oklahoma, wasClicked: false, id: 7 },
    {name: 'alabama', image: alabama, wasClicked: false, id: 8 },
    {name: 'minnesota', image: minnesota, wasClicked: false, id: 10 },
    {name: 'wisconsin', image: wisconsin, wasClicked: false, id: 11 },
    {name: 'notreDame', image: notreDame, wasClicked: false, id: 12 },
    {name: 'baylor', image: baylor, wasClicked: false, id: 13 },
    {name: 'auburn', image: auburn, wasClicked: false, id: 14 },
    {name: 'iowa', image: iowa, wasClicked: false, id: 15 },
    {name: 'utah', image: utah, wasClicked: false, id: 16 },
    {name: 'pennState', image: pennState, wasClicked: false, id: 9 }
  
  ]
 }

render(){

  let shuffleState = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr)
  }
  
  shuffleState(this.state.cards)
  console.log(this.state)
  return (
  <main>
    <div className="container">
    <div className="row">
      {this.state.cards.map((cards, index) => (
        <div className="col s3 hoverable responsive-img center" key={cards.id}>
          <img src={cards.image} 
          name={cards.name}
          onClick={() => cards.wasClicked === true ? (
          console.log('Game Over!')) : (this.setState(prevState => ({wasClicked: !prevState.wasClicked})), console.log(this.state)) } 
    alt="team logo"/>
        </div>
      ))}
    </div>
    </div>
  </main>
  )
  
}

}

export default Main;
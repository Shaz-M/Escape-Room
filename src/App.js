import './App.css';
import { useState } from 'react';
import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { roomWalls } from './helpers/walls.js'
import  Prompt from './components/prompt.js'

var mod = function (n, m) {
  var remain = n % m;
  return Math.floor(remain >= 0 ? remain : remain + m);
};


function App() {
  const [index,setIndex] = useState(0);

  function moveRight(e){
    setIndex(index+1)
  }

  function moveLeft(e){
    setIndex(index-1)
  }
  return (
    <div className="imgbox">
      <div className="allContent">
        <div className="topContent">
          <button className="moveButtons" onClick={moveLeft}><FaArrowLeft className="arrow" size={30}/></button>
          <img src={roomWalls[mod(index,roomWalls.length)].image} className="center-fit" />
          <button className="moveButtons" onClick={moveRight}><FaArrowRight className="arrow" size={30}/></button>
        </div>
        <div className="bottomContent">
          <Prompt/>
          <div className="rightDiv">
            <div className="hintsDiv">
              <div className="buttons">
                <button>Hint 1</button>
                <button>Hint 2</button>
                <button>Hint 3</button>
                <button>Answer</button>
              </div>
              <div className="hintText">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labo</div>
            </div>
            <div className="inputDiv">
              <form className="form">
                <label for="answer">Enter Answer</label><br/>
                <input type="text" id="answer" name="answer"></input><br/>
                <input type="submit" value="Submit"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

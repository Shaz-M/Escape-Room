import '../App.css';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { roomWalls } from '../helpers/walls.js'
import  Prompt from './prompt.js'
import {story1} from '../helpers/wall1_story';
import {story2} from '../helpers/wall2_story';
import {story3} from '../helpers/wall3_story';
import Hints from './hints';
import Answer from './answer';
import triangle from '../assets/triangle.png'

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

var mod = function (n, m) {
    var remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
};

var storymap = {0:story1,1:story2,2:story3};
let story1_items =  {home:0,bookcase:1,painting:3,chest:5}
let story2_items =  {home:0,clock:1,move:2,investigate:3,safe:5}
let story3_items = {home:0,table:1,phone:3,mirror:5,door:7}

var stack = [];
var item_map = {0:story1_items,1:story2_items,2:story3_items}

function Game(props){
    const [index,setIndex] = useState(0);
    const [storyIndex,setStoryIndex] = useState(0);
    const [remainingHints,setRemainingHints] = useState(3);
    const [finalWall1,setFinalWall1] = useState(false);
    const [timeWall2,setTimeWall2] = useState(false);
    const [maxIndex,setMaxIndex] = useState(0);

    useEffect (() =>{
      if(storymap[index].length-1 == storyIndex){
        setMaxIndex(index+1)
      }
    },[storyIndex])


    useEffect(() =>{
      setTimeWall2(index == 1 && storyIndex == 3);

    },[index,storyIndex])
    
    useEffect(() => {
        setFinalWall1(index == 0 && storyIndex == 5)
    },[index,storyIndex]);

    function moveRight(e){
      stack = [];
      setIndex(index+1);
      setStoryIndex(0);
    }
  
    function moveLeft(e){
      stack = [];
      setIndex(index-1);
      setStoryIndex(0);
    }

    function onBackButton(){
        if(stack.length > 0){
          var i = stack.pop()
          setStoryIndex(i);
        }
    }
    const handleSubmitTimeWall = async (event) =>{
      event.preventDefault();
      let hourInput = event.target.hour.value;
      let minuteInput = event.target.minute.value;
      let items = item_map[index];
      if(hourInput == "6" && minuteInput == "11"){
          items[getKeyByValue(items,storyIndex)]+=1;
          setStoryIndex(storyIndex+1);
      }
      event.target.reset();
  };
    

    const handleSubmitFinalWall1 = async (event) =>{
        event.preventDefault();
        let wordInput = event.target.word.value;
        wordInput = wordInput.toLowerCase();
        let numberInput = event.target.number.value;
        let items = item_map[index];
        if(wordInput == "open" && numberInput == "24"){
            items[getKeyByValue(items,storyIndex)]+=1;
            setStoryIndex(storyIndex+1);
        }
        event.target.reset();
    };


    const handleSubmit = async (event) =>{
        event.preventDefault();
        let input = event.target.answer.value;
        input = input.toLowerCase()
        let story = storymap[index];
        let items = item_map[index];
        if (story[storyIndex].answer == null){
            // case of moving to another item
            if (items.hasOwnProperty(input)){
                stack.push(storyIndex)
                setStoryIndex(items[input])
            }
            else{
                //handle error
            }
        }
        else{
            // check if input is correct
            if(story[storyIndex].answer == input){
                items[getKeyByValue(items,storyIndex)]+=1
                stack.push(storyIndex)
                setStoryIndex(storyIndex+1)
            }
            else{
                // wrong answer error handle
            }
        }
        event.target.reset();
      };
      useEffect(() => {
        if (props.reset) {
          setIndex(0);
          setStoryIndex(0);
          props.setReset(false);
        }
      }, [props.reset]);
      useEffect(() => {
        if (index === 2 && storyIndex === storymap[index].length - 1) {
          props.onEscape();
        }
      }, [index, storyIndex, props]);
      const minutes = Math.floor(props.timer / 60);
      const seconds = props.timer % 60; 
    return (
      <div className='game-container'>
        <div className="imgbox">
          <div className="allContent">
            <div className="topContent">
              <button disabled={index == 0} className="moveButtons" onClick={moveLeft}><FaArrowLeft className="arrow" size={30}/></button>
            
                {index == 0 && storyIndex==3 || index == 1 && storyIndex==2 ? (<div className="trianglediv"><img src={storymap[index][storyIndex].image} /></div>):(<img src={storymap[index][storyIndex].image} className="center-fit" />)}
      
              <button disabled={index == 2 || index == maxIndex} className="moveButtons" onClick={moveRight}><FaArrowRight className="arrow" size={30}/></button>
            </div>
            <div className="bottomContent">
              <Prompt currPrompt={storymap[index][storyIndex]} finalWall1={finalWall1} onBackButton={onBackButton}/>
              <div className="rightDiv">
                  <Hints currPrompt={storymap[index][storyIndex]} remainingHints={remainingHints} setRemainingHints={setRemainingHints}/>
                  <Answer handleSubmit={handleSubmit} finalWall1={finalWall1} timeWall2={timeWall2} handleSubmitTimeWall={handleSubmitTimeWall} handleSubmitFinalWall1={handleSubmitFinalWall1}/>
              </div>
            </div>
          </div>
          
        </div>
        <div className="timer">Time: {minutes}m {seconds}s</div>
      </div>
    );

}

export default Game;

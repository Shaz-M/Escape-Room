import '../App.css';
import { useState,useEffect } from 'react';


function Hints({currPrompt,remainingHints,setRemainingHints}){
    const [showHint,setShowHint] = useState(false)
    useEffect(() => {
        setShowHint(false)
    },[currPrompt])
    function handleClick(){
        if(showHint == false){
            setRemainingHints(remainingHints-1);
            setShowHint(true);
        }
        
    };

    return (
        <div className="hintsDiv">
            <div className="buttons">
            <button disabled={currPrompt.hint == null || remainingHints<=0} onClick={handleClick}>Get Hint</button>
            </div>
            {showHint &&  <div className="hintText">{currPrompt.hint}</div> }
            <div>Remaining Hints: {remainingHints}</div>
        </div>
    )
}

export default Hints;
import '../App.css';




function Answer({handleSubmit,finalWall1,handleSubmitFinalWall1,timeWall2,handleSubmitTimeWall,invalidInput}){
    return (
        <div className="inputDiv">
            {!finalWall1 && !timeWall2 && 
                <form className="form" onSubmit={handleSubmit}>
                <label for="answer">Enter Answer</label><br/>
                <input className="inputfield" style={invalidInput ? {animation: 'shake 0.2s ease-in-out 0s 2', 'box-shadow': '0 0 0.6rem #ff0000'}: {animation: 'none','box-shadow': 'none'}} type="text" id="answer" name="answer"></input><br/>
                <input type="submit" value="Submit"/>
                </form>            
            }
            {finalWall1 &&
                <form className="form" onSubmit={handleSubmitFinalWall1}>
                <label for="word">Word</label><br/>
                <input className="inputfield" style={invalidInput ? {animation: 'shake 0.2s ease-in-out 0s 2', 'box-shadow': '0 0 0.6rem #ff0000'}: {animation: 'none','box-shadow': 'none'}} type="text" id="word" name="word"></input><br/>
                <label for="number">Number</label><br/>
                <input className="inputfield" style={invalidInput ? {animation: 'shake 0.2s ease-in-out 0s 2', 'box-shadow': '0 0 0.6rem #ff0000'}: {animation: 'none','box-shadow': 'none'}} type="text" id="number" name="number"></input><br/>
                <input type="submit" value="Submit"/>
                </form>    
            }
            {timeWall2 &&
                <form className="form" onSubmit={handleSubmitTimeWall}>
                <label for="hour">Hour</label><br/>
                <input className="inputfield" style={invalidInput ? {animation: 'shake 0.2s ease-in-out 0s 2', 'box-shadow': '0 0 0.6rem #ff0000'}: {animation: 'none','box-shadow': 'none'}} type="text" id="hour" name="hour"></input><br/>
                <label for="minute">Minute</label><br/>
                <input className="inputfield" style={invalidInput ? {animation: 'shake 0.2s ease-in-out 0s 2', 'box-shadow': '0 0 0.6rem #ff0000'}: {animation: 'none','box-shadow': 'none'}} type="text" id="minute" name="minute"></input><br/>
                <input type="submit" value="Submit"/>
                </form>   
            }

        </div>
    )
}

export default Answer;
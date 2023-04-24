import '../App.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


function Prompt({currPrompt,finalWall1,onBackButton}){
    return (
        <div className="promptDiv" >
            <button className="backbtn" onClick={onBackButton}><FaArrowLeft/></button>
            <span className="promptTitle">Prompt</span>
            <div className="prompt" style={{whiteSpace:"pre-line"}}>
            <p>{currPrompt.prompt}</p>
            </div>
            <div className="question">
                {currPrompt.question}
            </div>            
        </div>
    )
}

export default Prompt;
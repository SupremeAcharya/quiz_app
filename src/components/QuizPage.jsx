import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";

const QuizPage = ({ subject, handleRestart }) => {
  const[data, setData] = useState([]);

  const[progress, setProgress] = useState(0);

  const[currenQuestion, setCurrentQuestion] = useState(0);

  // const[questions, setQuestions] = useState();

  const[score,setScore] = useState(0);

  const[answer, setAnswer] = useState('');

  const[error, setError] = useState(false);

  // const[questionno, setQuestinno] = useState(0);
  
  const[chosen, setChosen] = useState('');

  const[wrong, setWrong] = useState('');

  // setQuestionnumber(questionnumber + 1)


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://my-json-server.typicode.com/SupremeAcharya/quiz_app/${subject}`);
      setData(response.data);
    };

    fetchData();
  }, []);

  if (!data.length){
    return <div className="loading-page">Loading Data...</div>
  }

  // const handleAnswer = (option) => {
  //     setChosen(option);
  // }
  

  const ChangeQuestion = () =>{
    if(!chosen){
      setError(true);
    }
    if(chosen){
      const ans = data[currenQuestion]?.correctOption;
      setAnswer(ans);
      if(chosen == ans){
        setScore(score+1);
        setWrong(null);
      }else{
        setWrong(chosen);
      }
        setChosen(null);
        setTimeout(() => {
          setCurrentQuestion((previous) => previous +1);
          setProgress((currenQuestion + 1)*10);
        },1500)
          setError(false);
    }
  }

  const handleClick = () => {
    handleRestart();
  }
  if(currenQuestion == 10) {
    return <div className="welcome-text-area score">
      <p>YOU SCORED : {score} OUT OF 10</p>
      <button className="restart" onClick={handleClick}>Play Again</button>
      </div>
  }

  console.log(score);

  // const showQuestions = data[questionnumber].question;

  // if(!data) return null;

  // console.log(JSON.stringify(data))


  const question = data?.at(currenQuestion);

  return (
    <>
      <div className="welcome-text-area">
        <h3 className="topic">Question {currenQuestion + 1} of 10</h3>
        <p className="text quest">{question.question ?? ""}</p>
        <div className='progress-bar-container'>
          <div className="progress-bar">
            <div className='progress' style={{width:`${progress}%`}}></div>
          </div>
       </div>
        {/* <p>{questions}</p> */}
      </div>
      <div className="subject" >
        {question?.options?.map((option, index) => (
          <div 
            className={`each-Subject 
              ${chosen === option ? "option-chosen": ""} 
              ${answer === option ? "correct-option": ""} 
              ${wrong === option ? "wrong-option": ""}`
            }
             onClick={() => {setChosen(option) , setError(false)}}
             key={index} 
          >
            ({String.fromCharCode(65 + index)}) {option}
            </div>
            
        ))}
        <button className='each-subject button' onClick={ChangeQuestion}>Submit</button>
        {error && <div className="error">Please choose an option</div>}

      </div>
    </>
  );
};

export default QuizPage;

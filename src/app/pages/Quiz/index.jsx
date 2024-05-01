import React, { useState } from 'react';
import {quizData} from '../Quiz/data'
import Button from '../../components/Button/index';

import style from './style.module.css'

function Quiz() {
  // Quiz data in JSON format
  

  // State variables to track quiz progress and question background color
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questionBackgroundColor, setQuestionBackgroundColor] = useState('#ffffff'); // Default color
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to check answer
  const checkAnswer = (selectedValue) => {
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedValue === correctAnswer) {
      setScore(score + 1);
      setQuestionBackgroundColor('#b9f6ca'); // Change background color to green for correct answer
    } else {
      setQuestionBackgroundColor('#ffcccc'); // Change background color to red for incorrect answer
    }

    // setCurrentQuestion(currentQuestion + 1);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      checkAnswer(selectedOption);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Clear selected option for the next question
      setQuestionBackgroundColor('#ffffff'); // Reset background color
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  return (
    <div style={{ backgroundColor: questionBackgroundColor, padding: '20px' }}className={style.container} >
      {currentQuestion < quizData.length ? (
        <div>
          <h2 className={style.header}>Quiz Questions</h2>
          <div id="question" className={style.question}>{quizData[currentQuestion].question}</div>
          <br />
        <form id="options" className={style.options}>
            {quizData[currentQuestion].options.map((option, index) => (
              <div key={index} className={style.checkall}>
                <input
                  type="radio"
                  name="option"
                  id={"option" + index}
                  value={option}
                  onChange={(e) => checkAnswer(e.target.value)}
                />
                <label htmlFor={"option" + index}>{option}</label>
              </div>
            ))}
          </form>
          <br />
         <div className={style.resultbtn}>
         <Button  id="nextButton" className={style.btn} onClick={() => setCurrentQuestion(currentQuestion + 1)} >Next</Button>
          <p id="result" className={style.result}> {score} of {quizData.length}</p>
         </div>
        </div>
      ) : (
        <div>
          <p className={style.score}>You scored {score} out of {quizData.length}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;

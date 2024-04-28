import React, { useState } from 'react';

function Test() {
  // Quiz data in JSON format
  const quizData = [
    {
      question: "What are examples of cyber threats?",
      options: ["Malware", "Password Peeling", "Mouse stealing", "Mouse Jacking", "Social Gatherings"],
      answer: "Malware"
    },
    {
      question: "What are examples of risk mitigation?",
      options: ["Easy Password", "Regularly updating software", "Risk Celebration", "Risk avoidance", "Risk indulgence"],
      answer: "Regularly updating software"
    },
    {
      question: "What does cybersecurity protect?",
      options: ["Computers", "Networks", "Data", "Systems", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "How does cybersecurity contribute to safeguarding our digital lives?",
      options: ["Protecting against threats", "Ensuring integrity", "Maintaining confidentiality", "Preserving availability", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What are the consequences of not prioritizing cybersecurity?",
      options: ["Financial loss", "Identity theft", "Privacy breaches", "Disruption of services", "All of the above"],
      answer: "All of the above"
    }
  ];

  // State variables to track quiz progress and question color
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questionColor, setQuestionColor] = useState('black'); // Default color

  // Function to check answer
  const checkAnswer = (selectedValue) => {
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedValue === correctAnswer) {
      setScore(score + 1);
      setQuestionColor('green'); // Change color to green for correct answer
    } else {
      setQuestionColor('red'); // Change color to red for incorrect answer
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < quizData.length ? (
        <div>
          <h2>Quiz Questions</h2>
          <div id="question" style={{ color: questionColor }}>{quizData[currentQuestion].question}</div>
          <form id="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <div key={index}>
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
          <button id="nextButton" onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>
          <p id="result"></p>
        </div>
      ) : (
        <div>
          <p>You scored {score} out of {quizData.length}</p>
        </div>
      )}
    </div>
  );
}

export default Test;

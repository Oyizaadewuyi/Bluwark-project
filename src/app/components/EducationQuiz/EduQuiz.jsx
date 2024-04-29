import React from 'react'
import style from './style.module.css'
import {Link} from 'react-router-dom'

export const EduQuiz = () => {
  return (
   <main className={style.eduQuiz}>
    <h4>Take a security Quiz on Bulwark</h4>
    <Link to="/quiz"> 
    <button type='Submit' className={style.eduquizBtn}>Start the Quiz</button>
    </Link>

   </main>
  )
}



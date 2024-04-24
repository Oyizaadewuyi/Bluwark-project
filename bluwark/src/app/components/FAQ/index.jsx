// import React, { useState } from "react";
// import style from "./style.module.css"
// import Accordian from "../Accordian/accordian";

// import {questions} from '../Accordian/api'


// export const Faq = () => {
//     const [data] =useState(questions)
//     return(
// <div className={style.faq_div}>
//     <div className={style.faq_title}>
// <h2>FAQ Section</h2>
// <p>Click on the question tabs to know te answer</p>
//     </div>
//     <div className={style.faq_accordian_part}>
//         {data.map((item)=>{
//             return  <Accordian key={item.id} question={item.question} answer={item.answer}/>
//         })}
       
//     </div>

// </div>
//     )
// }
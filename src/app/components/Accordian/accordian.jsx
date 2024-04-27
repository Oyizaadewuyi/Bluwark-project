import React, { useState } from "react";
import style from "./style.module.css"
import {  FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
//Accordian for the FAQ section//
const Accordian =(props) => {
    const [show, setShow] = useState(false);
    return(
        <div className={style.accordion_box}>
            <div className={style.ques_icon_div}>
                <div className={style.icon_div}>
                    <p onClick={()=> setShow(show)}>
                        {
                            show ? ( <FaPlus style={{marginRight: '1rem'}}/>)
                            : (<IoMdClose style={{marginRight: '1rem'}}/>)
                        }

                    </p>
                </div>
                <div className={style.ques_ans_div}>
                    <h3>{props.question}</h3>
                    {show && <p>{props.answer}</p> }
                    
                </div>

            </div>
        </div>
    )
}

export default Accordian;
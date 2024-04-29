import React from 'react'

import style from "./style.module.css";
import HeaderPage from "../../components/BulwarkHomePage/HeaderPage";
import { Education } from '../../components/Education/data';
import { Resources } from '../../components/EducationResources/Resources';
import { EduQuiz } from '../../components/EducationQuiz/EduQuiz';
import {CustomFooter} from '../../components/Footer/Footer'


export const BulwarkEducation = () => {
  return (
    <main className={style.container}>
    <HeaderPage className={style.headerPage} />
    <Education/>
    <Resources/>
    <EduQuiz/>
    <CustomFooter/>

    


    </main>
  )
}



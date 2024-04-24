import React from 'react'
import style from "./style.module.css";
import HeaderPage from "../../components/BulwarkHomePage/HeaderPage";
import { AboutUs } from '../../components/AboutUs/data';
import {List} from '../../components/AboutUsLists/List'
import { GetInTouch } from '../../components/AboutUsContact/GetInTouch';
import {Footer} from '../../components/Footer/Footer'
 


export const BulwarkAboutUs = () => {
  return (
    <main className={style.container}>
    <HeaderPage className={style.headerPage} />
    
    <AboutUs/>
    <List />
    <GetInTouch/>
    <Footer/>
      
  </main>
  )
  
}
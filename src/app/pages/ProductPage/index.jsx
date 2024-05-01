import React from 'react'
import style from './style.module.css'
import HeaderPage from '../../components/BulwarkHomePage/HeaderPage'
import { BulwarkProductPage } from '../../components/BulwarkProductPage/Product'
import { Demo } from '../../components/ProductPageDemo/Demo'
import EliminateFraud from '../../components/EliminateFraud'

export const ProductPage = () => {
  return (
    <main className={style.ProductContainer}>
        <HeaderPage/>
        <BulwarkProductPage/>
        <Demo/>
        <EliminateFraud/>
        

    </main>
    
  )
}




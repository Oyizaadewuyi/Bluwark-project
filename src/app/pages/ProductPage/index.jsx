import React from 'react'
import style from './style.module.css'
import HeaderPage from '../../components/BulwarkHomePage/HeaderPage'
import { BulwarkProductPage } from '../../components/BulwarkProductPage/Product'
import { Demo } from '../../components/ProductPageDemo/Demo'
import EliminateFraud from '../../components/EliminateFraud'
import { ProductScan } from '../../components/ProductPageScan/ProductScan'
import { Malware } from '../../components/ProductMalware/Malware'
import { CustomFooter } from '../../components/Footer/Footer'

export const ProductPage = () => {
  return (
    <main className={style.ProductContainer}>
        <HeaderPage/>
        <BulwarkProductPage/>
        <Demo/>
        <EliminateFraud/>
        <ProductScan/>
        <Malware/>
        <CustomFooter/>
        

    </main>
    
  )
}




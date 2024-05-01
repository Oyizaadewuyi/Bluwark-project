import React from 'react'
import product from '../../components/Assets/images/antivirusImg.png'
import style from './style.module.css'

export const BulwarkProductPage = () => {
  return (
    <main className={style.productHero}>
        <div className={style.productpageHead}>
        <h1>DETECT SCAM</h1>
          <p>Accross all digital platform in real time</p>
         
        <button type='Submit'>Activate</button>
        </div>
        <div className={style.productImg}>
        <img src={product} alt="product"  />
        </div>
    </main>
    )
}


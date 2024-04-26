import React from 'react'
import fraud from "../../components/Assets/images/eliminate-fraud.png"
import style from "../../components/EliminateFraud/style.module.css"
import Button from '../Button'

const EliminateFraud = () => {
  return (
		<div className={style.container}>
			<div >
				<div className={style.fraudtextcontainer}>
					<h2 className={style.header}>
						Eliminate Fraud
					</h2>
					<p className={style.passage}>
						Protect your business and customers from all online Scam risks
						with real-time fraud prevention and client-side digital
						identity protection.
					</p>
					
					<Button className={style.btn}>Learn more</Button>
                    
				</div>
			</div>
			<div className={style.fraudimagecontainer}>
				<img src={fraud} alt='fraud' className={style.fraudimage} />
			</div>
		</div>
  );
}

export default EliminateFraud

import React from 'react'
import fraud from "../../components/Assets/images/eliminate-fraud.png"

const EliminateFraud = () => {
  return (
		<div className="flex flex-col justify-between relative py-24">
			<div className=" bg-white max-w-[40rem] border border-blue-800 shadow-lg rounded-xl self-end text-left py-12 px-20 pb-16">
				<div className="flex flex-col gap-3 p-4 text-left">
					<h2 className="text-5xl font-bold text-gray-800 mb-2 text-left ">
						Eliminate Fraud
					</h2>
					<p className="text-lg text-gray-600 text-left">
						Protect your business and customers from all online Scam risks
						with real-time fraud prevention and client-side digital
						identity protection.
					</p>
                    <button className='mt-3 self-end border rounded-2xl p-3 text-blue-800 border-blue-800'>Learn more</button>
				</div>
			</div>
			<div className="absolute top-[60%]">
				<img src={fraud} className='w-[80%]' />
			</div>
		</div>
  );
}

export default EliminateFraud

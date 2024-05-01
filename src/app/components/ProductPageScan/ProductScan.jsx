// import React from 'react'
import style from './style.module.css'
import React, { useState } from 'react';



export const ProductScan = () => {
        const [link, setLink] = useState('');
        const [activated, setActivated] = useState(false);
      
        const handleActivate = () => {
          // Add your logic here to activate the link
          setActivated(true);
        };
      
  return (
    <main className={style.ProductScan}>
        <h1 className={style.ScanHead}>Eliminate Digital Scam</h1>
        <p className={style.ScanDesc}>Our Bulwark AI feature helps to identify and eliminate digital scams just by pasting links to website on the field below</p>
        <form action="" className={style.ScanForm}>
            <input
        type="text"
        value={link}
        placeholder="input Link"
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={handleActivate} className={style.ScanBtn}>Generate</button>
      {activated && <p>Link Activated: {link}</p>}

      </form>

    

      </main>
    )
}


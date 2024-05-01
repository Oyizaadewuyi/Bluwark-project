// import React from 'react'
import style from './style.module.css'
import React, { useState } from 'react';



export const ProductScan = () => {
  const [link, setLink] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
      setLoading(true);
      try {
          const response = await fetch('https://bluwark-project-b8ax.onrender.com/bluwark/v1/check-url', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ link }),
          });
          const data = await response.json();
          setResult(data);
      } catch (error) {
          console.error('Error:', error);
          setResult({ error: 'Error occurred while processing the link.' });
      }
      setLoading(false);
      setLink('');
  };
      
  return (
    <main className={style.ProductScan}>
    <h1 className={style.ScanHead}>Eliminate Digital Scam</h1>
    <p className={style.ScanDesc}>Our Bulwark AI feature helps to identify and eliminate digital scams just by pasting links to website on the field below</p>
    <form className={style.ScanForm}>
        <input
            type="text"
            value={link}
            placeholder="Input Link"
            onChange={(e) => setLink(e.target.value)}
        />
        <button onClick={handleScan} className={style.ScanBtn} disabled={loading}>
            {loading ? 'Scanning...' : 'Scan'}
        </button>
    </form>
    {result && (
        <div>
            {result.error ? (
                <p>Error: {result.error}</p>
            ) : (
                <>
                    <p>Safe: {result.safe ? 'Yes' : 'No'}</p>
                    <p>Threat Type: {result.threatType}</p>
                    {result.message && <p>Message: {result.message}</p>}
                </>
            )}
        </div>
    )}
</main>
);
};



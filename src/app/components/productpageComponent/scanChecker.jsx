import React, { useState } from 'react';
import { Scan } from './linkscan'; 
import styles from './style.module.css';

const ScamChecker = () => {
  const [result, setResult] = useState(null);

  const checkUrl = async (url) => {
    try {
      const apiKey = 'YOUR_GOOGLE_SAFE_BROWSING_API_KEY';
      const apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ threatInfo: { threatTypes: ['SOCIAL_ENGINEERING'], platformTypes: ['ANY_PLATFORM'], threatEntryTypes: ['URL'], threatEntries: [{ url }] } }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (data.matches && data.matches.length > 0) {
        setResult('Potentially a scam!');
      } else {
        setResult('Safe');
      }
    } catch (error) {
      console.error('Error checking URL:', error);
    }
  };

  return (
    <div>
      <h2 className={styles.heading}>Scam Link Checker</h2>
      {/* Replace input field and button with Scan component */}
      <Scan
        title="Eliminate Digital Scam"
        description="Our Bulwark AI feature helps to identify and eliminate digital scams just by pasting links to website on the field below."
        buttonText="Generate"
        onSubmit={(url) => checkUrl(url)}
      />
      {result && <p>{result}</p>}
    </div>
  );
};

export default ScamChecker;

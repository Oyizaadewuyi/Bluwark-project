import React, { useState } from 'react';
import styles from './style.module.css'


export const Scan = ({ title, description, buttonText, onSubmit }) => {
  const [link, setLink] = useState('');

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Link submitted:', link);
    // Reset form after submission
    setLink('');
  };

  return (
    <section className={styles.scan}>
        <div className={styles.scancontent}>
      <h5>Find out instantly if your identity has been exposed</h5>
      <p>Paste a link to check security.</p>

      <br/>
      <form onSubmit={handleSubmit} className={styles.linkForm}>
        <input
          type="link"
          placeholder="Enter link"
          value={link}
          onChange={handleChange}
          required
/>
<button type="submit" className={styles.scanBtn}>Scan Now</button>
        
      </form>
    </div>
    </section>
  );
}






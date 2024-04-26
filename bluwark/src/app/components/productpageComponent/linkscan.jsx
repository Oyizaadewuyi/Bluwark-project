
import React, { useState } from 'react';
import styles from './style.module.css'


export const Scan = ({ title, description, buttonText, onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Email submitted:', email);
    // Reset form after submission
    setEmail('');
  };

  return (
    <section className={styles.scan}>
        <div className={styles.scancontent}>
      <h5>Eliminate Digital Scam</h5>
      <p>Our Bulwark AI feature helps to identify and eliminate digital scams just by pasting links to website on the field below.</p>
      <br />
      <form onSubmit={handleSubmit} className={styles.emailform}>
        <input
          type="email"
          placeholder="Link"
          value={email}
          onChange={handleChange}
          required
/>
<button type="submit" className={styles.scanbtn}>Generate</button>
        
      </form>
    </div>
    </section>
  );
}


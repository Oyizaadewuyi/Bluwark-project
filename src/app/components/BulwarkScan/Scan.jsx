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
      <h5>Find out instantly if your identity has been exposed</h5>
      <p>We’ll scan to see if your email has been compromised in a data breach.</p>
      <form onSubmit={handleSubmit} className={styles.emailform}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
          required
/>
<button type="submit" className={styles.scanbtn}>Scan Now</button>
        
      </form>
    </div>
    </section>
  );
}






// import React from 'react'
import styles from './style.module.css'
import React, { useState } from 'react';


export const FrequentlyAskedQuestion = () => {
  const headings = [

    { title: "How do i update Bulwark My Account Email Address?", steps: [
      "Log in to your McAfee account",
      "At the top of your My Account page, select Account, and then click My Profile",
      "At the top of the Account Information section, click Update",
      "Enter your new email address, and then click Save"
    ]},
    { title: "How do I change my Bulwark Account password?", steps: [] }, // Add more titles and steps as needed
    { title: "My account is locked how do i get it back?", steps: [] },
    { title: "How do i know my email account is attacked?", steps: [] },
    { title: "My subscription has expired how do i renew it?", steps: [] },
    { title: "Does Bulwark have free packages?", steps: [] },
    { title: "Can I access Bulwark on my mobile device, and does it offer remote access?", steps: [] }
  ];

  
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSteps = () => {
    setIsExpanded(!isExpanded);
  };

  const collapseSteps = () => {
    setIsExpanded(false);
  };

  return (
    <div className={styles.FaqContainer}>
      <h2 className={styles.faqHead}>FAQ</h2>
    <div className={styles.heading} onClick={collapseSteps}>
      {headings.map((heading, index) => (
        <div key={index} className="section" onClick={(e) => e.stopPropagation()}>
          <div className="heading-container" onClick={toggleSteps}>
            <h3 style={{ color: heading.color }}>{heading.title} <span>{isExpanded ? '' : '+'}</span>
          </h3>
           </div>
          {isExpanded && (
            <ol>
              {heading.steps.map((step, stepIndex) => (
                <li key={stepIndex}>
                <div className={`${styles.step} stepitem`} style={{ backgroundColor: 'white' }}>

                    {step}
                  </div>
                </li>
              ))}
            </ol>
          )}
          {index < headings.length - 1 && <hr className={styles.separator} />} {/* Add a horizontal line if it's not the last heading */}
        </div>
        
      ))}
    </div>
    </div>
    
  );
}


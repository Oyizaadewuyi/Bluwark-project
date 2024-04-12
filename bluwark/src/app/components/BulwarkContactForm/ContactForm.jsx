import React from 'react'
import styles from './style.module.css'
import contactimg from '../Assets/images/contact-image.png'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_lp0brfk', 'template_6j24ge3', form.current, {
            publicKey: 'y3O7NZHTYgKPz0Uki',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
    
    
    return (
    <section className={styles.container}>
            <div className={styles.title}>
                <h4>Contact Us</h4>
                

                <div className={styles.forms}>
                
          
          <form ref={form}onSubmit={sendEmail}>

          <label htmlFor="" required>
              Full Name
              <br />
              <input 
                type="text"
                placeholder=""
                required
                
              />


              </label>

          
          
          <label htmlFor="" required>
              Email
              <br />
              <input 
                type="Email"
                placeholder=""
                required
                
              />
              </label>
              <label htmlFor="" required> 
              How can we Help            
               <textarea name="Message" id="" cols="30" rows="10"></textarea>
               </label>

              <button type='Submit' className={styles.btn}>Send Message </button>
              <br/>
              <br/>
              
              
          
              </form>
              </div>
              <div className={styles.image}>
                    <img src={contactimg} alt="" />
                </div>
              
              
              </div>
               
           
        
</section>        
   )
}

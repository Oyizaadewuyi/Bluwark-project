
import styles from './style.module.css'
import contactimg from '../Assets/images/contactimg.png'

import React, { useState } from 'react';


export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <br/>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <br/>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <br/>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.contactbtn}type="submit">Submit</button>
        </form>
      </div>
       <div className={styles.contactimg}> 
        <img className={styles.picture} src={contactimg} alt="Contact" />
      </div>
     </div>
  );
}


//     const form =useRef()

//     const sendEmail = (e) => {
//         e.preventDefault();
    
//         emailjs
//           .sendForm('service_lp0brfk', 'template_6j24ge3', form.current, {
//             publicKey: 'y3O7NZHTYgKPz0Uki',
//           })
//           .then(
//             () => {
//               console.log('SUCCESS!');
//             },
//             (error) => {
//               console.log('FAILED...', error.text);
//             },
//           );
//           e.target.reset()
//       };
    
    
//     return (
//     <section className={styles.container}>
//             <div className={styles.title}>
//                 <h4>Contact Us</h4>
                

//                 <div className={styles.forms}>
                
          
//           <form ref={form}onSubmit={sendEmail}>

//           <label htmlFor="" required>
//               Full Name
//               <br />
//               <input 
//                 type="text"
//                 placeholder=""
//                 required
                
//               />


//               </label>

          
          
//           <label htmlFor="" required>
//               Email
//               <br />
//               <input 
//                 type="Email"
//                 placeholder=""
//                 required
                
//               />
//               </label>
//               <label htmlFor="" required> 
//               How can we Help            
//                <textarea name="Message" id="" cols="30" rows="10"></textarea>
//                </label>

//               <button type='Submit' className={styles.btn}>Send Message </button>
//               <br/>
//               <br/>
              
              
          
//               </form>
//               </div>
//                     <img className={styles.picture}src={contactimg} alt="" />
                    
//                 </div>
              
              
              
               
           
        
// </section>        
//    )
// }

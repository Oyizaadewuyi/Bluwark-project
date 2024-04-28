
import { FaMapMarkedAlt } from 'react-icons/fa'
import style from './style.module.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'
import React,  {useState}  from 'react';



export const GetInTouch = () => {

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
    <section className={style.getintouch_container}>
        <div className={style.Getin_touch}>
             <div className={style.firstContainer}>
                <div className={style.Icons}>      
                 <FaMapMarkedAlt/>  Plot 5A, Saint Anthony Layout, High<br/> Fashion Industrial Estate 
       <br/>
       <br/>
       
        <FaPhone/>1000 913745298, +000 123456789 <br/>
        <br/>
        
        <FaEnvelope/> Bulwark@bwk.com,<br/> info@Bulwark.com
        </div>
        </div>


         <div className={style.secondContiner}>
            <p className={style.getintouchdesc}>
            Get in touch and leave a message for us
            </p>


            <form onSubmit={handleSubmit}className={style.abtContact}>
           
          <div className={style.formGroup}>
            
            <input
              type="email"
              // value={formData.email}
              onChange={handleChange}
              required
              placeholder='Your Email Address'
            />
          </div>
          <br/>
          <div className={style.formGroup}>
            
            <textarea
              // value={formData.message}
              onChange={handleChange}
              required
              placeholder='Your Message'
            />
          </div>
          <button className={style.getbtn}type="submit">Send Message</button>
        </form>
        </div> 
        </div>
       
    </section>
)
}

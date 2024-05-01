import Quote from '../Assets/images/block-quote.svg'
import styles from './style.module.css'
import Lora from '../Assets/images/Lora.png'
import  Olivia from '../Assets/images/Olivia.png'
import  Ann from '../Assets/images/Ann.png'



export const Testimonials = () => {
    return (
        <section className={styles.container}>
            
                <div className={styles.testimonial}>
                
            <img src={Quote} alt="" className={styles.Quote}/>
                
            <p>I have used Bulwark for a few<br/>years. The protection is the<br/> best for the money. I also cover<br/>my phones with Bulwark and I<br/>haven’t had any problems yet.</p>
            <img src={Lora} alt="lora" className={styles.lora}/>

           
             </div>
            
            
            <div className={styles.testimonial}>
                <img src={Quote} alt="" className={styles.Quote}/>
                <p>I have used Bulwark for many<br/>years. The reason is very<br/>simple: you offer a great free<br/> version that actually works.<br/>This lets me afford the other<br/>amazing services you offer<br/>when needed, like Bulwark<br/>Cleanup.</p>
                
                <img src={Olivia} alt="olivia"  className={styles.Olivia}/>
            
            </div> 
            

             <div className={styles.testimonial}>
                <img src={Quote} alt="quote" className={styles.Quote}/>
                <p>I've used Avast Free Antivirus<br/>on my computers, tablets, and<br/>smart phones for many years.<br/>It updates frequently and<br/>automatically. It automatically<br/>scans and protects me from<br/>malicious web sites. It does<br/>what I need. What more could<br/>I ask?</p>
                
                <img src={Ann} alt="ann" className={styles.Ann}/>
            
            </div> 
           



           </section> 

        
    );
};


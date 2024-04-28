import styles from './style.module.css'
import Frame15 from '../Assets/images/Frame 15.png'
export const Protection = () => {

    return <section className={styles.Protection}>
   <div className={styles.content}>
   <h3 className={styles.title}>Protect Your Everything with Bulwark+</h3>

                <div className={styles.text}>
                    <h2>Advanced Privacy Protection</h2>
                    <p>Ensure your personal data remains private in public<br/> spaces with a secure VPN, and reclaim control over<br/> your information by removing it from sites that sell it<br/> through Personal Data Cleanup.</p>
                    <h2>Identity and Financial Protection</h2>
                    <p>Receive round-the-clock monitoring and alerts to<br/>safeguard your finances and personal data from<br/> identity theft. Benefit from up to $2 million in<br/>identity theft coverage and recovery assistance.</p>
                    <h2>AI-Powered Antivirus</h2>
                    <p>Bulwark employs cutting-edge AI technology for,<br/>real-time defense against viruses, hackers, and risky<br/>links, ensuring robust protection for your digital<br/> environment.</p>
                    <h2>Family-Centric Protection</h2>
                    <p>Enjoy personalized antivirus defense tailored to the<br/>needs of up to six family members, including two<br/>adults and four children under 18.</p>
                     </div>
                     </div>
                <div className={styles.image}>
                    <img src={Frame15} alt="Frame15" />
                </div>
                
            
        

 </section>
}
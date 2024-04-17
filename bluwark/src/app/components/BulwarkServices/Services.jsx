import React from "react"
import styles from './style.module.css'
import Frame1 from '../Assets/images/Frame1.png'
import Frame2 from '../Assets/images/Frame2.png'
import Frame3 from '../Assets/images/Frame3.png'


import Button from "../Button"
// import Image1 from '../Assets/images/Image1'
// import Frame3 from '../Assets/images/Frame3'


export const Services = () => {
    const Services =[{
       image: Frame1,
       title: "Personal Data Cleanup",
       description: "Alerts you when your personal info is found online and helps you remove it, so you can get your data back from sites that sell it.",
      //  learnMoreLink: "/personal-data-cleanup-details", // Add a learnMoreLink for each service

      },
    {
         image: Frame2,
         title: "Bulwark Scam Protection",
         description: "With advanced AI, Bulwark detects fraudulent texts and blocks risky websites to prevent scam link risks..",
  },

  {
    image: Frame3,
    title: "Identity Monitoring",
    description: "Constant 24/7 surveillance notifies you of any personal data sightings on the dark web, safeguarding against identity theft.",
 },

 {
  image: Frame3,
  title: "Social Privacy Manager",
  description: "Automatically tweak 100+ social media privacy settings, ensuring your info is visible only to chosen contacts..",
},


]
const handleLearnMoreClick = (learnMoreLink) => {
  // Handle the click event, for example:
  window.location.href = learnMoreLink;
};


   
 return <section className={styles.Services}>
   <h3 className={styles.title}>See how Bulwark helps you live your best life online</h3>

   <div className={styles.list}>
   {Services.map((service) => (
       <div className={styles.item}>
        <div className={styles.cardContainer}>

            <img src={service.image} alt="" /> 
            <div>
       <h5 className={styles.title}>{service.title}</h5>
       <p className={styles.description}>{service.description}</p>
       {/* <a href={service.learnMoreLink} className={styles.learnMoreButton}>Learn More</a> */}
       <button onClick={() => handleLearnMoreClick(service.learnMoreLink)} className={styles.learnMoreButton}>Learn More</button>


       {/* <div className={styles.learnMore}>
                <p className={styles.learnMoreText}></p>
                <Button onClick={()=>{}} type="primary" className={styles.learnMoreBtn}>
                    LEARN MORE
                </Button>
            </div> */}
            </div>

       </div>

       </div>

   ))}

        
   </div>
   
 </section>
   
 
}

export default Services
import React from "react";
import HeaderPage from "../components/BulwarkHomePage/HeaderPage";
import {Hero} from "../components/BulwarkHeroPage/Hero";
import Services from "../components/BulwarkServices/Services";
import { Protection } from "../components/BulwarkProtection/Protection";
import { ContactForm } from "../components/BulwarkContactForm/ContactForm";

import { CustomFooter } from "../components/Footer/Footer";

// import { Footer } from "../components/Footer/Footer";
import { Testimonials } from "../components/BulwarkTestimonials/Testimonials";
import { FrequentlyAskedQuestion } from "../components/BulwarkFaq/FrequentlyAskedQuestion";
import { Scan } from "../components/BulwarkScan/Scan";




export function BulwarkLanding() {
    return (
     <div id="top-page">
        <HeaderPage/>
        <Hero/>
        <Services/>
        <Protection/>
       
        <CustomFooter/>

        <Testimonials/>
         <Scan/>
         <FrequentlyAskedQuestion/>
         <ContactForm/>
        <CustomFooter/> 
</div>
    );
  }
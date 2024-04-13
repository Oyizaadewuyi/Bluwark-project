import React from "react";
import HeaderPage from "../components/BulwarkHomePage/HeaderPage";
import Hero from "../components/BulwarkHeroPage/Hero";
import Services from "../components/BulwarkServices/Services";
import { Protection } from "../components/BulwarkProtection/Protection";
import { ContactForm } from "../components/BulwarkContactForm/ContactForm";
import { Footer } from "../components/Footer/Footer";



export function BulwarkLanding() {
    return (
     <div id="top-page">
        <HeaderPage/>
        <Hero/>
        <Services/>
        <Protection/>
        <ContactForm/>
        <Footer/>
</div>
    );
  }
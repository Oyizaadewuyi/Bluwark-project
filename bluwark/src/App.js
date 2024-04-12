import React from 'react'
import HeaderPage from './app/components/BulwarkHomePage/HeaderPage'
import Hero from './app/components/BulwarkHeroPage/Hero'
import Services from './app/components/BulwarkServices/Services'
import { Protection } from './app/components/BulwarkProtection/Protection'
import { Testimonials } from './app/components/BulwarkTestimonials/Testimonials'
import { ContactForm } from './app/components/BulwarkContactForm/ContactForm'

const App = () => {
  return (
    <><HeaderPage />
    <Hero />
    <Services/>
    <Protection/>
    <Testimonials/>
    <ContactForm/>
      </>
   )
}

export default App
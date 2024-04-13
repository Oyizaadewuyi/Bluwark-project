// import React from 'react'
// import HeaderPage from './app/components/BulwarkHomePage/HeaderPage'
// import Hero from './app/components/BulwarkHeroPage/Hero'
// import Services from './app/components/BulwarkServices/Services'
// import { Protection } from './app/components/BulwarkProtection/Protection'
// import { Testimonials } from './app/components/BulwarkTestimonials/Testimonials'
// import { ContactForm } from './app/components/BulwarkContactForm/ContactForm'
// import { Footer }  from './app/components/Footer/Footer'


import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import IsProtectedRoute from './IsProtectedRoute';
import { BulwarkLanding } from './app/pages/BulwarkLanding';

// const App = () => {

// const router = createBrowserRouter([
//   {
//     path: '',
//     element: (<IsProtectedRoute>
//      <BulwarkLanding/>
//          </IsProtectedRoute>),
//   },

// ])


// export function App() {

// }

//   return (
//     <><HeaderPage />
//     <Hero />
//     <Services/>
//     <Protection/>
//     <Testimonials/>
//     <ContactForm/>
//     <Footer/>
//       </>
//    )
// }

//  export default App

 function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BulwarkLanding />} />
        {/* Other routes if needed */}
      </Routes>
    </Router>
  );
}
export default App

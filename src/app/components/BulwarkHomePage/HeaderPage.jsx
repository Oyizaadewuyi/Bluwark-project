import Logo from "../Assets/icons/Bulwarklogo.svg";
import React from "react";
import "./HeaderPage.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


const HeaderPage = () => {

    
    
     return (
        <header className="header">
        <nav>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <ul className="nav-bar">
            <li>
              <Link to="/productpage">Product</Link>
            </li>
            
            <li>
              <Link to="/Education">Education</Link>
            </li>
            <li>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/bulwarkAboutUs">Contact us</Link>
            </li>
          </ul>

       < ul className="links">
       <li className="active">
            <Link to="/SignIn">Log In</Link> {/* Use Link instead of <a> */}
          </li>

                    
                    <li className='Get'>
                      <Link to="/signup" style={{color:"white"}}>Get Started</Link>
                      </li>
                </ul>
            
            </nav>
</header>
            
	);
};

export default HeaderPage;

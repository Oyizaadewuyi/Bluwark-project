import Logo from "../Assets/icons/Bulwarklogo.svg";
import React from "react";
import "./HeaderPage.css";

const HeaderPage = () => {

    
    
     return (
	 <header className="header">
 <nav>
         <div className="logo">
            
            <img src={Logo} alt=""  />
            </div>
          
         <ul className="nav-bar">
              <li><a href="/Product">Product</a></li>
             <li>
                 <a href="/Features">Features</a>
             </li>
             <li>
                 <a href="/Education">Education</a>
             </li>
            
             <li><a href="/Alert">Alert</a></li>

             <li><a href="/Contact us">Contact us</a></li>

            
            

            
        </ul>

       < ul className="links">
                    <li className='active'><a href="/login">Log In</a></li>
                    <li className='Get'><a href="/signup">Get Started</a></li>
                </ul>
            
            </nav>
</header>
            
	);
};

export default HeaderPage;
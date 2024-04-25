import logo from "../Assets/icons/Bulwarklogo.svg";
import React from "react";
import "./HeaderPage.css";

const HeaderPage = () => {

    
    
    return (<header className="header">
<nav>
        <div className="logo">
            
            <img src={logo} alt=""  />
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
            
        /* <li className='active'><a href="/Login">Log in</a></li>
	return (
		<header className="header">
			<nav>
				<div className="logo">
					<img src={logo} alt="" />
				</div>

				<ul className="nav-bar">
					<li>
						<a href="/Product">Product</a>
					</li>
					<li>
						<a href="/Features">Features</a>
					</li>
					<li>
						<a href="/Resources">Resources</a>
					</li>

					<li>
						<a href="/About us">About us</a>
					</li>
				</ul>

				<ul className="links">
					<li className="active">
						<a href="/login">Log In</a>
					</li>
					<li className="Get">
						<a href="/signup">Get Started</a>
					</li>
				</ul>

				{/* <li className="active"><a href="log in">Log In</a></li> */

				/* <button >Get started</button> */
			

			/* <li className='active'><a href="/Login">Log in</a></li>
        <li className='active'><a href="/Get started">Get Started</a></li> */
		</header>
	);
};

export default HeaderPage;

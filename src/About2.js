import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import picture from '../src/images/IMG_8902.jpeg';
// import { render } from '@testing-library/react';

function About() {


    // handleScroll() { 
    //     window.addEventListener("scroll", function() {
    //         //Documentation: "While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion."
    //         let portrait = (document.getElementsByClassName("portrait"));
    //         let value = (window.scrollY);
    //         portrait.style.left = value * 100 + "px";
    //     }
    // }
    // function handleScroll(e) {
    //     e.preventDefault();
    //     console.log("scrolled");
    // }

    // window.addEventListener("scroll", function() {
    //     // Documentation: "While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion."
    //     let portrait = (document.getElementsByClassName("portrait"));
    //     let value = (window.scrollY);
    //     portrait.style.left = value * 100 + "px";
    // }
   

   
   

    
    


    return (
    //revise line 7 id & class?
    <div id="about">   
        <p className="info">
            I am a Full-Stack Web Developer based in Texas. Commited to developing highly usable, responsive, and dynamic programs. Enthusiastic about joining your team and contributing in the development of technology of utility.
            Proven leader with background in Social Work and management.
        </p>
        <img src={picture} className="portrait" alt="portrait" />
    
    </div>
    )
    
     

}


    
   

   

    


export default About;
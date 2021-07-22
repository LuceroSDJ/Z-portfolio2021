import React from 'react';
import picture from '../src/images/homeOffice.jpeg';
import logo from './logo.svg';

function Section() {
    return(
        <section id="backgroundDiv">
            <div className="landingImgContainer">
                <img className="landingImg"
                    src={picture}
                    alt="desk"  
                />
                <div className="title">
                    <h1>Carmen Lucero Sandoval</h1>
                    <h2>Web Developer</h2>
                </div>
                
            </div>
        </section>
       
    )
}

export default Section;
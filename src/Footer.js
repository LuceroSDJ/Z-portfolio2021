import React from 'react';
import ReactDOM from 'react-dom';


function Footer() {
    return(
        <footer>
        <div className="social">
            <ul>
                {/* <!-- we're going to get icons from font awesome--> */}
                <li>
                    <a href="https://github.com/LuceroSDJ" className="gh" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github-alt" title="github"></i>
                    </a>
                    <span className="sr-only">github portfolio (opens in a new tab)</span>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/lucero-sandoval-38161b174" className="gh" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" title="linkedIn"></i>
                    </a>
                    <span className="sr-only">linkedIn portfolio (opens in a new tab)</span>
                </li>

                <p className="endNote">Portfolio. 2021</p>
       
            </ul>
        </div>
        </footer>
    )
}


export default Footer;
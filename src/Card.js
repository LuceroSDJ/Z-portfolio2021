import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';

function Card(props) {
    return(
        <div className="cardFrame" id="projects">
            <h2>{props.tittle}</h2>
            <img src={props.src} className="projectImg" alt="project landing image" />
            <a
                className="App-link"
                href={props.hrefCode}
                target="_blank"
                rel="noopener noreferrer"
            >
                Source Code
            </a>
            <br/>
            <a
                className="App-link"
                href={props.hrefApp}
                target="_blank"
                rel="noopener noreferrer"
            >
                App
            </a>
        </div>
    )
}


export default Card;
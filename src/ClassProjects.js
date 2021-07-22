import React from 'react';
import Card from './Card';
import project1 from './images/crystals.png';
import project2 from './images/giftastic.png';
import project3 from './images/bamazonDisplayData.png';

function Projects() {
    return(
        // <div className='projectsWrapper'>
        <div id='projectsWrapper'>
            <h2 className='projectHeading'>PROJECTS</h2>
            <Card 
                tittle='Crystals Collector'
                src={project1} hrefCode="https://github.com/LuceroSDJ/unit-4-game" 
                hrefApp="https://lucerosdj.github.io/unit-4-game/."

            />
            <Card 
                tittle='Giftastic'
                src={project2} hrefCode="https://github.com/LuceroSDJ/GifTastic-" 
                hrefApp="https://lucerosdj.github.io/GifTastic-/"
            />
            <Card 
                tittle='Bamazon'
                src={project3} hrefCode="https://github.com/LuceroSDJ/bamazon" 
                hrefApp="https://lucerosdj.github.io/bamazon/"  
            />
        </div>
    )
}

export default Projects;
import React from 'react';
import rating from '../assets/rating-component.jpg';
import restaurant from '../assets/little-lemon.png';
import newshomepage from '../assets/news-homepage.jpg';
import interactivePricingComponent from '../assets/interactive-pricing-component.jpg'
import architects from '../assets/architects.png';
import nextRestaurant from '../assets/rasta-pasta.png';
import './projects.css';

const projectsList = [
    {title:'Rasta Pasta Restaurant', description:'A full stack restaurant website made with Nextjs, PostgreSQL, and Docker', img: nextRestaurant, link:'https://github.com/Mari3367/next-restaurant'},
    {title: 'Little Lemon Restaurant', description: 'Meta Front-End Developer Professional Certificate: Capstone Project built with React js. Home page with table booking page.', img: restaurant, link: 'https://github.com/Mari3367/react-booking-app'},
    {title: 'Rating Component', description: 'A small interactive UI component from Frontend Mentor.', img: rating, link: 'https://github.com/Mari3367/rating-component'},
    {title: 'News Website Homepage', description: 'Frontend Mentor challenge to build out a responsive news website homepage. Built using CSS Grid.', img: newshomepage, link: 'https://github.com/Mari3367/news-homepage'},
    {title: 'Interactive Pricing Component', description: 'Frontend Mentor challenge to build out an interactive pricing component.', img: interactivePricingComponent, link: 'https://github.com/Mari3367/interactive-pricing-component'},
    {title: 'Architects Homepage', description: 'Responsive webpage built with CSS Grid.', img: architects, link: 'https://github.com/Mari3367/architects-webpage'},
];

export const Projects = () => {
    return(
        <div className='web-project-container'>
            <h2 className='webprojects-header'>MY PROJECTS</h2>
            <div className='underline'></div>
            <div className='cards-wrapper'>
              {projectsList.map((project) => {
                 return <div className='web-project-card' key={project.title}>
                            <img src={project.img} alt='software sample' className='projectImage'/>
                            <button className='github-button'><a href={project.link} target='_blank' rel='noreferrer'>Github</a></button>
                        </div>
              })}
            </div>
        </div>
    );
}

import calculator from '../assets/react-calculator.png';
import rating from '../assets/rating-component.jpg';
import restaurant from '../assets/little-lemon.png';
import newshomepage from '../assets/news-homepage.jpg';
import interactivePricingComponent from '../assets/interactive-pricing-component.jpg'
import architects from '../assets/architects.png'
import './webproject.css';

const projectsList = [
    {title: 'React Calculator', description: 'A simple calculator app built using React js.', img: calculator, link: 'https://github.com/Mari3367/calculator'},
    {title: 'Rating Component', description: 'A small interactive UI component from Frontend Mentor.', img: rating, link: 'https://github.com/Mari3367/rating-component'},
    {title: 'Little Lemon Restaurant', description: 'Meta Front-End Developer Professional Certificate: Capstone Project built with React js. Home page with table booking page.', img: restaurant, link: 'https://github.com/Mari3367/react-booking-app'},
    {title: 'News Website Homepage', description: 'Frontend Mentor challenge to build out a responsive news website homepage. Built using CSS Grid.', img: newshomepage, link: 'https://github.com/Mari3367/news-homepage'},
    {title: 'Interactive Pricing Component', description: 'Frontend Mentor challenge to build out an interactive pricing component.', img: interactivePricingComponent, link: 'https://github.com/Mari3367/interactive-pricing-component'},
    {title: 'Architects Homepage', description: 'Responsive webpage built with CSS Grid.', img: architects, link: 'https://github.com/Mari3367/architects-webpage'},
];

const WebProject = () => {
    return(
        <div className='web-project-container'>
            <h2 className='webprojects-header'>WEB DEVELOPMENT</h2>
            <div className='cards-wrapper'>
              {projectsList.map((project) => {
                 return <div className='web-project-card' key={project.title}>
                            <h3 className='webprojects-title'>{project.title}</h3>
                            <img src={project.img} alt='software sample' className='projectImage'/>
                            <p className='project-text'>{project.description}</p>
                            <button className='github-button'><a href={project.link} target='_blank' rel='noreferrer'>Github</a></button>
                        </div>
              })}
            </div>
        </div>
    );
};

export default WebProject;
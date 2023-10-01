import './about.css';
import CV from '../assets/cv-mariam-mirzoyan.pdf';

const About = () => {
    return(
        <div className='about-container'>
            <h2 className='about-header'>ABOUT ME</h2>
            <p className='text-about'>My name is Mariam Mirzoyan. I'm an aspiring front-end developer. I like mastering new tools and implementing them into new projects. I also do digital and traditional art as a hobby.</p>
            <h3 className='skills-header'>SKILLS</h3>
            <div className='skills-wrapper'>
                    <div className='skill'>HTML</div>
                    <div className='skill'>CSS</div>
                    <div className='skill'>JavaScript</div>
                    <div className='skill'>React</div>
                    <div className='skill'>Git</div>
            </div>
            <div className='cv-container'>
              <div className='cv-wrapper'>
                <a href={CV} download>Download CV</a>
              </div>
            </div>
        </div>
    );
};

export default About;
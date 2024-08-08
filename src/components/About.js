import './about.css';
import CV from '../assets/cv-mariam-mirzoyan.pdf';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import client from '../assets/client.jpg';
import blueprint from '../assets/blueprint.jpg';
import webDesign from '../assets/project-design.jpg';
import project from '../assets/project.jpg';




const About = () => {
    return(
        <div className='about-container'>
            <h2 className='about-header'>ABOUT ME</h2>
            <div className='underline'></div>
            <p className='text-about'>My name is Mariam Mirzoyan. I am a web developer with over 3 years of experience in developing landing pages and websites. I am always looking for opportunities to learn something new. Technology and art are my passion. I enjoy any area where creativity and freedom prevail. I do digital art as a hobby.</p>
            <h3 className='skills-header'>SKILLS</h3>
            <div className='skills-wrapper'>
                    <ul className='skill-list-1'>
                      <li><FaHtml5 />
                      <span>HTML</span></li>
                      <li><FaCss3 />
                      <span>CSS</span></li>
                      <li><SiJavascript />
                      <span>JavaScript</span></li>
                      <li><FaReact />
                      <span>React</span></li>
                      <li><FaGitAlt />
                      <span>Git</span></li>
                    </ul>
                    <ul className='skill-list-2'>
                      <li><SiTypescript />
                      <span>TypeScript</span></li>
                      <li><TbBrandNextjs />
                      <span>Next.js</span></li>
                      <li><GrMysql />
                      <span>MySQL</span></li>
                      <li><SiPostgresql />
                      <span>PostgreSQL</span></li>
                      <li><SiPrisma />
                      <span>Prisma ORM</span></li>
                    </ul>
            </div>
            <div className='services'>
              <h3>WHAT I DO</h3>
              <p>My working process includes considering your requirements, creating a blueprint, and delivering the final product.</p>
              <div className='services-wrap'>
                <div className='service-card'>
                  <img src={client} alt='service'/>
                  <div className='overlay'></div>
                  <h4>Discuss different ideas and find the best solution.</h4>
                </div>
                <div className='service-card'>
                  <img src={blueprint} alt='service'/>
                  <div className='overlay'></div>
                  <h4>Design a blueprint according to your requirements.</h4>
                </div>
                <div className='service-card'>
                  <img src={webDesign} alt='service'/>
                  <div className='overlay'></div>
                  <h4>Visualize your project with a detailed prototype.</h4>
                </div>
                <div className='service-card'>
                  <img src={project} alt='service'/>
                  <div className='overlay'></div>
                  <h4>Manage post-deployment tasks.</h4>
                </div>
              </div>
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
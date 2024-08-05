import { Link } from 'react-router-dom';
import './home.css'
import littleLemon from '../assets/little-lemon.png';
import { FaArrowRightLong } from "react-icons/fa6";



const Home = () => {
    return(
        <div className='home-container'>
            <div className='home-text-wrapper'>
                <h4 className='home-name-text'> Hi, I'm Mariam.</h4>
                <h2 className='profession-header'>FRONTEND DEVELOPER</h2>
                <p className='home-text'>
                Art and technology are my passion.</p>
            </div>
            <div className='home-about-wrapper'>
                <h3><Link to='/about'>About me</Link></h3>
                <div className='underline'></div>
                <h5>I am a self-driven web developer with over 3 years of experience in developing landing pages and websites.</h5>
                <p>Through years of experience, I have mastered the skills and tools to fulfill client requirements according to the latest trends. I've spent most of these years working across different areas of web development, such as front-end development, landing pages, testing. Having worked on various projects I can help you with the best possible suggestions and ideas that we can proceed with. My goal is to provide quality work that meets the client's expectations.</p>
            </div>
            <div className='home-skills-wrapper'>
                <h3><Link to='/about'>Skills</Link></h3>
                <div className='bar-wrap'>
                    <div className='bar bar-1'><span>JavaScript</span> <span>80%</span></div>
                </div>
                <div className='bar-wrap'>
                    <div className='bar bar-2'><span>HTML</span> <span>90%</span></div>
                </div>
                <div className='bar-wrap'>
                    <div className='bar bar-3'><span>CSS</span> <span>70%</span></div>
                </div>
                <div className='bar-wrap'>
                    <div className='bar bar-4'><span>React</span> <span>60%</span></div>
                </div>
            </div>
            <div className='home-my-projects'>
                <h3><Link to='/projects'>My Projects</Link></h3>
                <div className='home-projects-wrap'>
                    <Link to='/about'>
                        <div className='home-projects-card'>
                            <img src={littleLemon} alt=''/>
                            <div className='home-pr-github-wrap'><span>Github</span><FaArrowRightLong /></div>
                        </div>
                    </Link>
                    <Link to='/about'>
                        <div className='home-projects-card'>
                            <img src={littleLemon} alt=''/>
                            <div className='home-pr-github-wrap'><span>Github</span><FaArrowRightLong /></div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='home-services'>
                <h3><Link to='/projects'>Services</Link></h3>
                <ul>
                    <li>Web Development</li>
                    <li>App Development</li>
                    <li>UX/UI Design</li>
                </ul>
                <button><Link to='/projects'>Learn more</Link></button>
            </div>
        </div>
    );
};

export default Home;
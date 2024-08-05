import {Link} from 'react-router-dom';
import './projects.css';



const Projects = () => {
    return(
        <div className='projects-container'>
            <h2 className='projects-header'>PROJECTS</h2>
            <hr/>
            <div className='p-links-wrap'>
                <p className='projects-par'><Link to='/webproject' className='project-link'>WEB DEVELOPMENT</Link></p>
                <p className='projects-par'><Link to='/illustrations' className='project-link'>ILLUSTRATIONS</Link></p>
            </div>
        </div>
    );
};

export default Projects;
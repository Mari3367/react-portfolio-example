import {Link} from 'react-router-dom';
import {ImDiamonds} from 'react-icons/im';
import './projects.css';

const Projects = () => {
    return(
        <div className='projects-container'>
            <div className='diamondProject diamondProject1'><ImDiamonds /></div>
            <div className='diamondProject diamondProject2'><ImDiamonds /></div>
            <div className='diamondProject diamondProject3'><ImDiamonds /></div>
            <div className='diamondProject diamondProject4'><ImDiamonds /></div>
            <div className='diamondProject diamondProject5'><ImDiamonds /></div>
            <div className='diamondProject diamondProject6'><ImDiamonds /></div>
            <h2 className='projects-header'>PROJECTS</h2>
            <p className='projects-par'><Link to='/webproject' className='project-link'>WEB DEVELOPMENT</Link></p>
            <p className='projects-par'><Link to='/illustrations' className='project-link'>ILLUSTRATIONS</Link></p>
        </div>
    );
};

export default Projects;
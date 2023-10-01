import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaListUl} from 'react-icons/fa';
import {FaRegUser} from 'react-icons/fa';
import {BiSolidMessage} from 'react-icons/bi';
import useLocalStorage from 'use-local-storage';
import { useLocation } from 'react-router-dom';
import './floatnav.css';

const FloatNav = () => {
    const [activeNav, setActiveNav] = useLocalStorage('selected', '');
    const location = useLocation();
    const path = location.pathname;
    window.onload = () => {
      setActiveNav((current) => path === '/' ? 'home' : current)
    }
    return(
      <nav className='float-nav'>
        <div className='float-nav-wrapper'>
          <Link to='/' onClick={()=> setActiveNav('home')} className={activeNav === 'home' ? 'active' : ''}><AiFillHome /></Link>
          <Link to='/projects' onClick={()=> setActiveNav('projects')} className={activeNav === 'projects' ? 'active' : ''}><FaListUl /></Link>
          <Link to='/about' onClick={()=> setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><FaRegUser /></Link>
          <Link to='/contact'  onClick={()=> setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><BiSolidMessage /></Link>
        </div>
    </nav>
    );
}

export default FloatNav;
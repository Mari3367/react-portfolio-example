import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import WebProject from './components/WebProject';
import Illustrations from './components/Illustrations';
import {BsMoon} from 'react-icons/bs';
import {FaRegSun} from 'react-icons/fa';
import profileIcon from './assets/profile-icon.svg';
import FloatNav from './components/FloatNav';
import useLocalStorage from 'use-local-storage';


function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

/*on nav logo click scroll to top*/
const scrollTop = () => {
  window.scrollTo(0,0);
}

  return (
   <div className='app-container' id='top' alt='go up' data-theme={theme}>
    <nav className='main-nav'>
      <div onClick={scrollTop} id='nav-logo' className='main-nav-icon' data-hover='TOP'><img src={profileIcon} alt='profile icon' className='profile-icon'/></div>
      <Link to='/'>HOME</Link>
      <Link to='/projects'>PROJECTS</Link>
      <Link to='/about'>ABOUT ME</Link>
      <Link to='/contact'>CONTACT</Link>
      <div className='mode' onClick={switchTheme}>{theme === 'dark' ? <FaRegSun /> : <BsMoon />}</div>
    </nav>
    <FloatNav />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/webproject' element={<WebProject />}></Route>
      <Route path='/illustrations' element={<Illustrations />}></Route>
    </Routes>
   </div>
  );
}

export default App;


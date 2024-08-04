import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import WebProject from './components/WebProject';
import Illustrations from './components/Illustrations';
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import FloatNav from './components/FloatNav';
import useLocalStorage from 'use-local-storage';
import MediaIcons from './components/MediaIcons';



function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }



  return (
   <div className='app-container' id='top' alt='go up' data-theme={theme}>
    <nav className='main-nav'>
      <Link to='/'>HOME</Link>
      <Link to='/projects'>PROJECTS</Link>
      <Link to='/about'>ABOUT ME</Link>
      <Link to='/contact'>CONTACT</Link>
      <div className='mode' onClick={switchTheme}>{theme === 'dark' ? <MdSunny /> : <FaMoon />}</div>
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
    <footer>
     <MediaIcons />
    </footer>
   </div>
  );
}

export default App;


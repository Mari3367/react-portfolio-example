import profileImage from '../assets/profile-image.svg';
import './home.css'
import MediaIcons from './MediaIcons';
import {ImDiamonds} from 'react-icons/im';


const Home = () => {
    return(
        <div className='home-container'>
            <div className='diamondHome diamondHome1'><ImDiamonds /></div>
            <div className='diamondHome diamondHome2'><ImDiamonds /></div>
            <div className='diamondHome diamondHome3'><ImDiamonds /></div>
            <div className='diamondHome diamondHome4'><ImDiamonds /></div>
            <img src={profileImage} alt='profile' className='profile-image'/>
            <div className='home-text-wrapper'>
                 <h3 className='home-name-text'> Hi, I'm Mariam.</h3>
                <p className='home-text'>I am a front-end developer and illustrator.
                Art and technology are my passion.</p>
            </div>
            <MediaIcons />
        </div>
    );
};

export default Home;
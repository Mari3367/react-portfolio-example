import {FaTelegram} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai'

const MediaIcons = () => {
    return(
        <div className='media-icons-container'>
            <a href='https://t.me/Mari9amM' target='_blank' rel='noreferrer'><FaTelegram /></a>
            <a href='https://www.linkedin.com/in/mariam-mirzoyan-b20a88275/' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
            <a href='https://github.com/Mari3367' target='_blank' rel='noreferrer'><AiFillGithub /></a>
        </div>
    );
};

export default MediaIcons;
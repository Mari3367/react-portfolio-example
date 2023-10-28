import seasons from '../assets/seasons.jpg';
import './illustrations.css';

const illustrationsList = [
{img: seasons, name: 'Illustration-1', id: 'ill1'},
{img: seasons, name: 'Illustration-2', id: 'ill2'},
{img: seasons, name: 'Illustration-3', id: 'ill3'},
{img: seasons, name: 'illustration-4', id: 'ill4'},
{img: seasons, name: 'Illustration-5', id: 'ill5'},
{img: seasons, name: 'Illustration-6', id: 'ill6'},
];

const Illustrations = () => {
    return(
        <div className='illustrations-container'>
            <h2 className='illustrations-header'>ILLUSTRATIONS</h2>
              <div className='ill-wrapper'>
                {illustrationsList.map((illustration)=> {
                  return <div className='ill-box' key={illustration.id}>
                    <img src={illustration.img} alt='illustration' className='illustration'/>
                    <h3 className='ill-title'>{illustration.name}</h3>
                  </div>
                })}
              </div>
        </div>
    );
};

export default Illustrations;
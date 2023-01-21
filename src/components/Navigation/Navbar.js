import { useEffect, useState } from 'react';
import { Navitem } from './Navitem';
import { Me } from '../Content/Me';
import { Projects } from '../Content/Projects';
import { Video } from '../VideoPlayer/Video';

export const Navbar = () => {
    const [selected, setSelected] = useState('');
    const handleClick = ({target}) => {
        if (selected === target.textContent) {
            setSelected('');
            return;
        }
        setSelected(target.textContent);
    }

    useEffect(() => {
        
    }, [selected]);
    
    return (
        <div className='container'>
            <nav>
                <Navitem value='Me' onClick={handleClick} selected={selected}/>
                <Navitem value='Projects' onClick={handleClick} selected={selected} />
                <Navitem value='Karlik' onClick={handleClick} selected={selected} />
            </nav>
            {selected === 'Me' &&  <Me />}
            {selected === 'Projects' &&  <Projects />}
            {selected === 'Karlik' &&  <Video src={'https://www.youtube.com/embed/URktzj-BTw0?autoplay=1'}/>}
        </div>
    );
}
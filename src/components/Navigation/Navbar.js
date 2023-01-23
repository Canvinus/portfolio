import { useEffect, useState } from 'react';
import { Navitem } from './Navitem';
import { Me } from '../Content/Me';
import { Projects } from '../Content/Projects';
import { Video } from '../VideoPlayer/Video';
import { useEventListener } from '../hooks/useEventListener';

const navItems = [
    'Me',
    'Projects',
];

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
    
    const handler = ({ key }) => {
        if (selected !== '') {
            return;
        }
        if (key === 'ArrowDown'){
            
        }
        if (key === 'ArrowUp'){

        }
    }
    useEventListener('keydown', handler);
    
    return (
        <div className='container'>
            <nav>
                {navItems.map((navitem) => 
                    <Navitem key={navitem} value={navitem} onClick={handleClick} selected={selected}/>
                )}
            </nav>
            {selected !== '' && <div className='content'>
                {selected === navItems[0] &&  <Me /> }
                {selected === navItems[1] &&  <Projects />}
            </div>}
        </div>
    );
}
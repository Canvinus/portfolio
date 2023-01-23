import 'react-tooltip/dist/react-tooltip.css';
import myPhoto from '../../images/me.jpg';
import cvLogo from '../../images/82d8fae54628df7af61f5c76da2d9d3f.svg';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { SocialLogo } from '../Socials/SocialLogo';

export const Me = () => {
    
    return (
        <div>
            <h1>Andrey Gruzdev</h1>
            <img className='me-img' style={{ width: '26.5vh', height: '17.7vh' }} src={myPhoto} alt='me'></img>
            <h2>Summary</h2>
            <p>Primarily I am a back-end developer but I’ve also dabbled in front-end. My main strengths are designing robust APIs, building databases and creating real-time updating apps based on SignalR websockets. Although my main passion is software craftsmanship, I also have an experience in trading and I am eager to immerse myself in blockchain development to build traditional financial instruments in the DeFi ecosystem.</p>
            <h2>Work experience</h2>
            <div></div>
            <h2>Education</h2>
            <p>BA of Computer Science - Higher School of Economics</p>
            <h2>Skills</h2>
            <h3>Programming languages</h3>
            <p>C#, C++, Python, SQL, JavaScript, TypeScript, Solidity</p>
            <h3>Back-end stack</h3>
            <p>ASP .NET Core, Entity Framework, SignalR, Flask, node.js</p>
            <h3>Front-end stack</h3>
            <p>React</p>
            <h3>Other</h3>
            <p>nginx, docker, git, DB architectures, swagger, JWT, OAuth, Selenium, Agile, Software design patterns, Documentation</p>
            <div className='me-container'>
                <SocialLogo className='cv-download' tooltip='Download CV' href='' src={cvLogo} alt='Download CV' width={40} height={40} />
                <ReactTooltip anchorId='cv-download' place='bottom' />
            </div>
        </div>
    );
}
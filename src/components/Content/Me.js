import 'react-tooltip/dist/react-tooltip.css';
import myPhoto from '../../files/images/me.jpg';
import cvLogo from '../../files/images/82d8fae54628df7af61f5c76da2d9d3f.svg';
import cv from '../../files/Andrey_Gruzdev_CV.pdf';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { SocialLogo } from '../Socials/SocialLogo';

export const Me = () => {
    
    return (
        <div>
            <div>
                <h1>Andrey Gruzdev</h1>
                <img className='me-img' style={{ width: '26.5vh', height: '17.7vh' }} src={myPhoto} alt='me'></img>
            </div>
            <div>
                <h2>Summary</h2>
                <p>Primarily I am a back-end developer but I’ve also dabbled in front-end. My main strengths are designing robust APIs, building databases and creating real-time updating apps based on SignalR websockets. Although my main passion is software craftsmanship, I also have an experience in trading and I am eager to immerse myself in blockchain development to build traditional financial instruments in the DeFi ecosystem.</p>
            </div>
            <div>
            <h2>Work experience</h2>
                <h3>Amkapital - Moscow, Russia</h3>
                <p>11/2020 – 07/2021</p>
                <h3>Infostrategic - Dubai, UAE</h3>
                <p>04/2022 – 09/2022</p>
            </div>
            <div>
                <h2>Education</h2>
                <p>BA of Computer Science - Higher School of Economics</p>
            </div>
            <div>
                <h2>Skills</h2>
                <h3>Programming languages</h3>
                <p>C#, C++, Python, SQL, JavaScript, TypeScript, Solidity</p>
                <h3>Back-end stack</h3>
                <p>ASP .NET Core, Entity Framework, SignalR, Flask, node.js, RDBMS, redis, MongoDB</p>
                <h3>Front-end stack</h3>
                <p>React</p>
                <h3>Other</h3>
                <p>nginx, docker, kubernetes, git, DB architectures, swagger, JWT, OAuth, OAuth 2.0, Identity Server, Selenium, Agile, Software design patterns, Documentation</p>
            </div>
            <div className='me-container'>
                <SocialLogo className='cv-download' tooltip='Open CV' target='_blank' href={cv} src={cvLogo} alt='Download CV' width={40} height={40} />
                <ReactTooltip anchorId='cv-download' place='bottom' />
            </div>
        </div>
    );
}
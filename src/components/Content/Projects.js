import { SwaggerPage } from '../Swagger/swaggerPage';
import { ButtonLink } from '../Navigation/ButtonLink';

import { SocialLogo } from '../Socials/SocialLogo';
import GithubLogo from '../../files/images/GitHub-Icon-White-Logo.wine.svg';

const myProjects = [
    {
        title: 'Cryptolio',
        description: "Display information about any Externally Owned Account on Ethereum Mainnet. It displays every ERC-20 token on an animated canvas, pie-chart of account's ERC-20 portfolio, also the total ETH balance and ERC-20 tokens balance. Use the Search Bar to lookup for any EOA on the eth network or connect your metamask wallet.",
        stack: 'node.js, React',
        github: 'https://github.com/Canvinus/cryptolio',
        mvp: 'https://agruz.dev/cryptolio'
    },
    {
        title: 'Multi-user chat',
        description: "Chat subsystem that can be integration into the different jitsi-meet project. The subsystem is using contacts and video-calls from the main system. The main functionality is to create private or group chats with moderation and chat in real-time. Also, this subsystem is creating the new chat for each new video meeting in the main system.",
        photo: '',
        swagger: 'muchat-swagger.json',
        stack: 'ASP.NET Core, SignalR, Entity Framework (DB First), Oracle DB, swagger, JWT Auth',
        github: 'https://github.com/Canvinus/muchat',
        mvp: 'https://muchat.infostrategic.com/web'
    },
    {
        title: 'Student attendance monitoring service based on ML',
        description: "Monitoring service created to validate if the real person is presented on the online meeting. The main functionality of the app is to schedule or join the meetings. Moderators have extended functionality which is: user moderation, live-time monitoring or generating report by the end of the meeting",
        photo: '',
        swagger: 'smartconf-swagger.json',
        stack: 'ASP.NET Core, Entity Framework (DB First), flask, selenium web driver, jitsi-meet, Oracle DB, swagger, JWT Auth',
        mvp: 'https://smartconf.infostrategic.com/web'
    }
]

export const Projects = () => {
    return (
        <div>
            {myProjects.map((project) => 
                <div className='project-wrapper' key={project.title}>
                    <h1 style={{ textAlign: 'center' }}>{project.title}</h1>
                    <h2>Description</h2>
                    <p>{project.description}</p>
                    <h2>Used stack</h2>
                    <p>{project.stack}</p>
                    {project.swagger && <div className='documentation-wrapper'>
                        <SwaggerPage path={project.swagger}/>
                    </div>}
                    <div className='mvp-wrapper'>
                        <h3>MVP: </h3>
                        <ButtonLink text='Go' link={project.mvp}/>
                    </div>
                    {project.github && 
                    <div className='github-project'>
                        <h3>Github </h3>
                        <SocialLogo 
                            href={project.github}
                            src={GithubLogo} alt='Github Logo' 
                            width={32} 
                            height={32}
                            target='_blank'
                        />
                    </div>}
                </div>
            )}
        </div>
    );
}
import 'react-tooltip/dist/react-tooltip.css'
import myPhoto from '../../files/images/me.jpg'
import cvLogo from '../../files/images/82d8fae54628df7af61f5c76da2d9d3f.svg'
import cv from '../../files/Andrey_Gruzdev_CV.pdf'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { SocialLogo } from '../Socials/SocialLogo'

export const Me = () => {
  return (
    <div>
      <div>
        <h1>Andrey Gruzdev</h1>
        <img
          className="me-img"
          style={{ width: '26.5vh', height: '17.7vh' }}
          src={myPhoto}
          alt="me"
        ></img>
      </div>
      <div>
        <h2>Summary</h2>
        <p>
          With my extensive experience as a full-stack developer and expertise
          in DevOps, I possess a wealth of knowledge in various software design
          patterns. I excel in back-end technologies, specifically ASP .NET
          Core, Nest.js, Express.js, and TypeScript, which enable me to create
          high-performing and efficient applications. My love for
          containerization fuels my passion for development, as I believe it
          helps to improve development speed and efficiency. Furthermore, my
          in-depth understanding of RDBSM, as well as my experience with NoSQL
          DBs, adds to my versatility as a developer.
        </p>
        <p>
          On the front-end side, I am skilled in React and Next.js, both of
          which are essential for building responsive and engaging user
          interfaces. My extensive experience working with different web3
          frameworks has provided me with a deep understanding of blockchain
          technology and its applications.
        </p>

        <p>
          As a team player, I excel in Agile methodologies and am adept at
          adapting to changing circumstances. My main passion is in blockchain
          development, and I am committed to immersing myself in the web3 space
          to make it a better place for the end-user. By working on projects
          that create a more decentralized and equitable internet, I strive to
          contribute to a better world. With my skills, experience, and drive to
          make a difference, I am confident that I can make a valuable
          contribution to any team or project.
        </p>
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
        <p>C#, C++, JavaScript, TypeScript, Solidity, Python, SQL</p>
        <h3>Back-end stack</h3>
        <p>
          node.js (express, nest.js), ASP .NET Core, Entity Framework, SignalR,
          Flask, RDBMS, redis, MongoDB
        </p>
        <h3>Front-end stack</h3>
        <p>React, Next.js</p>
        <h3>Other</h3>
        <p>
          nginx, docker, kubernetes, git, DB architectures, swagger, JWT, OAuth,
          OAuth 2.0, Identity Server, Selenium, Agile, Software design patterns,
          Documentation
        </p>
      </div>
      <div className="me-container">
        <SocialLogo
          className="cv-download"
          tooltip="Open CV"
          target="_blank"
          href={cv}
          src={cvLogo}
          alt="Download CV"
          width={40}
          height={40}
        />
        <ReactTooltip anchorId="cv-download" place="bottom" />
      </div>
    </div>
  )
}

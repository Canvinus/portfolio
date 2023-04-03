import { SwaggerPage } from '../Swagger/swaggerPage'
import { ButtonLink } from '../Navigation/ButtonLink'

import { SocialLogo } from '../Socials/SocialLogo'
import GithubLogo from '../../files/images/GitHub-Icon-White-Logo.wine.svg'
import EthLogo from '../../files/images/eth_logo.png'

const myProjects = [
  {
    title: 'Warp Drive (EasyA x HBC 2023)',
    description:
      'Embark on a thrilling, cross-chain odyssey that pushes the boundaries of blockchain gaming and showcases the might of the Axelar Network! Prepare to wage war across four distinct blockchains, engaging in relentless combat for power and control in a game that is equal parts immersive, secure, and exhilarating. In this epochal struggle, only one chain shall reign supreme.',
    photo: '',
    swagger: '',
    stack:
      'axelar, moralis, node.js (express), React, Next.js, rainbowkit, wagmi, ethers.js, docker, nginx, hardhar, foundry',
    hack: 'https://twitter.com/easya_app/status/1642623297052618752?s=46&t=wWGh6aBdBOA2phlNMj_ZFQ',
    prize: '1st place by Axelar',
    github: 'https://github.com/Canvinus/warp-drive',
    mvp: 'https://wdrive.io',
  },
  {
    title: 'TimePact (Scaling Ethereum 2023)',
    description:
      'TimePact allows users to create secure time capsules containing specific data, with an expiration date, that can be unlocked using special NFTs. These NFTs can be easily transferred between accounts and bridged to other blockchains.',
    photo: '',
    swagger: '',
    stack:
      'node.js (express), React, Next.js, rainbowkit, wagmi, ethers.js, FEVM, IPFS, docker, nginx, hardhat, foundry',
    hack: 'https://ethglobal.com/showcase/timepact-1mof1',
    prize: 'Best Primitives or Infra by FVM',
    github: 'https://github.com/Canvinus/TimePact',
    mvp: 'https://timepact.xyz',
  },
  {
    title: 'Cryptolio',
    description:
      "Display information about any Externally Owned Account on Ethereum Mainnet. It displays every ERC-20 token on an animated canvas, pie-chart of account's ERC-20 portfolio, also the total ETH balance and ERC-20 tokens balance. Use the Search Bar to lookup for any EOA on the eth network or connect your metamask wallet.",
    stack: 'node.js (express), React',
    github: 'https://github.com/Canvinus/cryptolio',
    mvp: 'https://agruz.dev/cryptolio',
  },
  {
    title: 'Multi-user chat',
    description:
      'Introducing a versatile chat subsystem designed to seamlessly integrate with various Jitsi-Meet projects. This powerful tool enhances the collaborative experience by enabling smooth communication and instant messaging capabilities within the Jitsi-Meet ecosystem. With its user-friendly interface and robust functionality, the chat subsystem is the perfect addition to any Jitsi-Meet implementation. Join the conversation today and see how the chat subsystem can elevate your collaboration game!',
    photo: '',
    swagger: 'muchat-swagger.json',
    stack:
      'ASP.NET Core, SignalR, Entity Framework, Oracle DB, swagger, OAuth 2.0',
    github: 'https://github.com/Canvinus/muchat',
    mvp: 'https://muchat.infostrategic.com/web',
  },
  {
    title: 'Student attendance monitoring service based on ML',
    description:
      'Introducing a cutting-edge monitoring service that utilizes powerful machine learning algorithms to ensure that only authentic individuals are present in your online meetings. With our app, you can effortlessly schedule or join meetings with ease. Our app also comes equipped with advanced moderator features that allow for seamless user moderation, real-time monitoring, and comprehensive report generation at the end of each meeting. You can trust our service to provide you with a secure and reliable online meeting experience.',
    photo: '',
    swagger: 'smartconf-swagger.json',
    stack:
      'ASP.NET Core, Entity Framework, flask, selenium web driver, jitsi-meet, Oracle DB, swagger, JWT Auth',
    github: 'https://github.com/Canvinus/smartconf',
    mvp: 'https://smartconf.infostrategic.com/web',
  },
]

export const Projects = () => {
  return (
    <div>
      {myProjects.map((project) => (
        <div className="project-wrapper" key={project.title}>
          <h1 style={{ textAlign: 'center' }}>{project.title}</h1>
          <h2>Description</h2>
          <p className="project-description">{project.description}</p>
          <h2>Used stack</h2>
          <p>{project.stack}</p>
          {project.swagger && (
            <div className="documentation-wrapper">
              <SwaggerPage path={project.swagger} />
            </div>
          )}
          {project.hack && (
            <div className="hackathon-project">
              <h3 style={{ marginRight: 10 }}>Project Page: </h3>
              <SocialLogo
                href={project.hack}
                src={EthLogo}
                alt="Hack logo"
                width={19}
                height={32}
                target="_blank"
              />
            </div>
          )}
          <div className="mvp-wrapper">
            <h3>MVP: </h3>
            <ButtonLink text="Go" link={project.mvp} />
          </div>
          {project.github && (
            <div className="github-project">
              <h3>Github </h3>
              <SocialLogo
                href={project.github}
                src={GithubLogo}
                alt="Github Logo"
                width={32}
                height={32}
                target="_blank"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

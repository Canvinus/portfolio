import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { SocialLogo } from './SocialLogo';
import { Mail } from './Mail';
import GithubLogo from '../../images/GitHub-Icon-White-Logo.wine.svg';
import LinkedInLogo from '../../images/linkedin-svgrepo-com.svg';
import TelegramLogo from '../../images/telegram-black-icon.svg';
import MailLogo from '../../images/mail-213.svg';

export const Socials = () => {
    return (
        <div className='socials'>
            <SocialLogo 
            className='github-logo' 
            href='https://github.com/canvinus' 
            src={GithubLogo} alt='Github Logo' 
            width={32} 
            height={32}
            tooltip='canvinus' 
            target='_blank'/>
            <ReactTooltip anchorId='github-logo' place='bottom' />
            <SocialLogo 
            className='telegram-logo' 
            href='https://t.me/canvi' 
            src={TelegramLogo} alt='Telegram Logo' 
            width={22} 
            height={22}
            tooltip='@canvi'
            target='_blank' />
            <ReactTooltip anchorId='telegram-logo' place='bottom' />
            <Mail 
            className='mail-logo' 
            src={MailLogo} alt='Mail Logo' 
            width={23} 
            height={23}
            mail='agruzdev1@gmail.com' />
            <ReactTooltip anchorId='mail-logo' place='bottom' />
            <SocialLogo 
            className='linked-in-logo' 
            href='https://www.linkedin.com/in/andrey-gruzdev-4643a9236/' 
            src={LinkedInLogo} alt='LinkedIn Logo' 
            width={16}
            height={16}
            tooltip='Andrey Gruzdev'
            target='_blank' />
            <ReactTooltip anchorId='linked-in-logo' place='bottom' />
        </div>
    );
}
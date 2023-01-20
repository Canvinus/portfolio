import { useState } from 'react';

export const Mail = ({ className, mail, src, alt, width, height }) => {
    const [tooltip, setTooltip] = useState(mail);
    const handleClick = () => {
        navigator.clipboard.writeText(mail);
        setTooltip('Copied to clipboard');
    }
    const handleMouseEnter = () => {
        setTooltip(mail);
    }
    return (
        <div 
        className={className} 
        id={className} 
        data-tooltip-content={tooltip} 
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}>
            <img src={src} alt={alt} width={width} height={height} />
        </div>
    );
}
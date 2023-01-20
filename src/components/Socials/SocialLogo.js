export const SocialLogo = ({ className, tooltip, target, href, src, alt, width, height }) => {
    return (
        <a 
        className={className} 
        id={className} 
        href={href} 
        target={target}
        rel='noreferrer' 
        data-tooltip-content={tooltip} >
            <img src={src} alt={alt} width={width} height={height} />
        </a>
    );
}
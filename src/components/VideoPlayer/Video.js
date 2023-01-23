import React from 'react';

export const Video = ({ src, width, height }) => {
    return (
        <div>
          <iframe style={{ display: 'flex', margin: 'auto', marginLeft: '15vw', marginTop: '15vh' }}
            width={width}
            height={height}
            src={src}
            frameBorder='0'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
        </div>
      );
}
import React from 'react';

export const Video = ({ src }) => {
    return (
        <div className='content'>
          <iframe style={{ display: 'flex', margin: 'auto', marginLeft: '15vw', marginTop: '15vh' }} width="560" height="315" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      );
}
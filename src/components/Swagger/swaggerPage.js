import { useState, useEffect } from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export const SwaggerPage = ({path}) => { 
    const [isVisible, setVisibility] = useState(false);

    useEffect(() => {

    }, [isVisible]);
    

    return (
    <>
        <div className='swagger-button-wrapper'>
            <h3>Swagger API Documentation: </h3>
            <button onClick={() => {setVisibility((prev) => !prev)}}>{isVisible ? 'Hide' : 'Show'}</button>
        </div>
        <div className='swagger-wrapper'>
            {isVisible && <SwaggerUI url={`/swagger/${path}`}/>}
        </div>
    </>);
}
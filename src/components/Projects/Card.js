import React from 'react';
import './Card.css';

const Card = ({name, img, url}) => {
    return (
        <div className='Card ma2 dib '>
            {/* <img className='try' alt='project' src={img} 
            width='150px' height='150px'></img>
            <h3 className='pa0'>{name}</h3> */}
            <div className='overlay'>
                <a href={url}>
                    <img className='try' alt='project' src={img} 
                        width='150px' height='150px'>
                    </img>
                </a>
                <h3 className='pa0'>{name}</h3>
            </div>
        </div>
    )
}

export default Card;
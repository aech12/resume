import React from 'react';
import './Me.css';
import Icons from './Icons';

const Me = () => {
    return (
        <div 
        id='me'
        className='Me'
        style={{}}
        >
            <h1>I'm Alejandro Howez. Call me Alex!</h1>

            <ul>
                <li>CS student from Argentina.</li>
                <li>Currently I'm learning Javascript and creating projects with React.</li>
                <li>Check them out below!</li>
                <li>Contact me at aech-12@hotmail.com</li>
            </ul>

            <h3>This resume page was built with React and Semantic ui.
            And this is what I work with:</h3>

            <Icons/>

        </div>
    )
}

export default Me;
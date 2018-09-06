import React from 'react';
import Card from './Card';
import './Projects.css';
import img1 from './imgs/img1.png';
import img2 from './imgs/img2.png';
import img3 from './imgs/img3.png';

const Projects = () => {
    return (
        <div 
        id='projects'
        className='Projects bg-light-blue'
        style={{}}>
        
            <h4>PROJECTS</h4>

            <Card name='Play Tictactoe' img={img1}
                url='https://aech12.github.io/tictactoe/'
            />
            <Card name='Robofriends' img={img2}
                url='https://aech12.github.io/Robofriends-reference/'
            />
            <Card name='Smart Brain' img={img3}
                url='https://aech12.github.io/smart-brain/'
            />
        </div>
    )
}

export default Projects;
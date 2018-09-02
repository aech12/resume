import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => {
    return (
    <div className='Footer flex justify-center pa3'>
      <a href='https://github.com/aech12' target='_blank'
      rel="noopener noreferrer">
        <Icon bordered size='large' inverted name='github' />
      </a>
      <a href='https://www.linkedin.com/in/aech12/' target='_blank'
      rel="noopener noreferrer">
        <Icon bordered size='large' inverted name='linkedin' />
      </a>
    </div>
    )
}

export default Footer;
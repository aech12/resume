import React from 'react';
import { Icon } from 'semantic-ui-react';

const Icons = () => (
  <div className='flex flex-wrap justify-center pa3'>
    <Icon className='grow-large mt1'
    size='huge' bordered inverted color='grey' name='react' />
    <Icon className='grow-large mt1'
    size='huge' bordered inverted color='grey' name='node' />
    <Icon className='grow-large mt1'
    size='huge' bordered inverted color='grey' name='js' />
    <Icon className='grow-large mt1'
    size='huge' bordered inverted color='grey' name='sass' />
  </div>
)

export default Icons

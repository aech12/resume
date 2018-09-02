import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

// const colorsA = 'blue';

export default class Topbar extends Component {
  state = {
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  goToSection = (input) => {
    switch(input) {
      case 'me':
        window.location.href='#me';
        break;
      case 'projects':
        window.location.href='#projects';
        break;
      case 'bio':
        window.location.href='#bio';
        break;
      default:
        console.log('Error on placing >_>')
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      // <Menu inverted stackable fluid color= {colorsA}>
      <Menu fixed inverted stackable fluid 
      style={{background: '#006E66'}} 
      >
      
        <Menu.Item
          name='Me'
          active={activeItem === 'Me'}
          // onClick={this.handleItemClick}
          // onClick={()=> this.goToSection('me')}
          onClick={
            ()=> {
              this.handleItemClick;
              this.goToSection('me');
            }
          }
        >
          Me
        </Menu.Item>

        <Menu.Item 
          name='Projects'
          active={activeItem === 'Projects'} 
          onClick={
            ()=> {
              this.handleItemClick;
              this.goToSection('projects');
            }
          }
        >
          Projects
        </Menu.Item>

        <Menu.Item
          name='Bio'
          active={activeItem === 'Bio'}
          onClick={
            ()=> {
              this.handleItemClick;
              this.goToSection('bio');
            }
          }
        >
          Bio
        </Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item 
        name='signup' 
        active={activeItem === 'signup'} 
        onClick={this.handleItemClick}>
          {/* What's your name? */}
          Resume Page
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}


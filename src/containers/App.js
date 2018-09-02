import React, { Component } from 'react';
import Me from '../components/Me';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Topbar/>
        {/* grid div below */}
        <div>

          <div className='content'>
            {/* <div id='me'><Me className='pa3'/></div>
            <div id='projects'><Projects/></div>
            <div id='bio'><Bio/></div> */}
            <Me/>
            <Projects/>
            <Bio/>
          </div>

          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
import React from 'react';
import './App.css';
import Main from './main.js';
/* import PlantItLogo from './img/PLANTIT.png'; */

function App() {
  return (
    <div>
      <header>
        <nav>
          <p>#</p>
          <ul>
            <li><a href="https://www.figma.com/">Login</a></li>
            <li><a href="https://www.figma.com/">Sign Up</a></li>
            <li><a href="https://www.figma.com/">Blog</a></li>
            <li><a href="https://www.figma.com/">Features</a></li>
          </ul>
        </nav>
      </header>
      <Main /> {/* Render the Main component */}
    </div>
  );
}

export default App;

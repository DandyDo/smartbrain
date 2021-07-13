import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
      <div className= 'ma4 mt0'>
        <Tilty className="Tilty h-100 flex items-center justify-center br2 shadow-2" perspective={1300} style={{ height: 180, width: 180 }}>
          <div>
            <a href='https://github.com/DandyDo/smartbrain' target="_blank" rel="noopener noreferrer">
              <img alt='logo' src={ brain }/>
            </a>
          </div>
        </Tilty>
      </div>  
    );
}

export default Logo;
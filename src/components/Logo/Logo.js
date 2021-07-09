import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
      <div className= 'ma4 mt0'>
        <Tilty className="w-100 Tilty flex items-center justify-center br2 shadow-2" perspective={1300}  style={{ height: 250, width: 250 }}>
          <div>
            <img className='w-100' alt='logo' src={ brain }/>
          </div>
        </Tilty>
      </div>  
    );
}

export default Logo;
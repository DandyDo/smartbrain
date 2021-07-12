import React from 'react';

const FacialRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt3'>
                <img alt='facial recognition result' src={ imageUrl} width='500px' height='auto'/>
            </div>
        </div>
      );
}

export default FacialRecognition;
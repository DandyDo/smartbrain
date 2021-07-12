import React from 'react';
import './FacialRecognition.css'

const FacialRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt3'>
                <img id='input-image' alt='' src={ imageUrl } width='500px' height='auto'/>
                {
                    boxes.map((box, i) => {
                        return (<div 
                                key={i} 
                                id='face' 
                                className='bounding-box' 
                                style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
                                ></div>);
                    })
                }
            </div>
        </div>
      );
}

export default FacialRecognition;
import React from 'react';
import './FacialRecognition.css'

const FacialRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className='center ma mb3'>
            <div className='relative'>
                <img id='input-image' alt='' src={ imageUrl } width='400px' height='auto'/>
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
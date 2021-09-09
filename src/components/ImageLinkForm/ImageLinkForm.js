import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
    return (
      <div>
        <p className='f3'>
            {'Link your image below to detect faces'}
        </p>
        <div className='center pb4'>
            <div className='center pa4 br3 shadow-5 form'>
                <input className='f4 pa2 w-70 center' type='text' onChange={ onInputChange }/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple button-size'
                 onClick= { onImageSubmit }
                 >Detect</button>
            </div>
        </div>
      </div>
    );
}

export default ImageLinkForm;
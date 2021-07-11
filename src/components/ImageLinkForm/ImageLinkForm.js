import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
      <div>
        <p className='f3'>
            {'Link your image below to detect faces'}
        </p>
        <div className='center'>
            <div className='center pa4 br3 shadow-5 form'>
                <input className='f4 pa2 w-70 center' type='text'/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>
        </div>
      </div>
    );
}

export default ImageLinkForm;
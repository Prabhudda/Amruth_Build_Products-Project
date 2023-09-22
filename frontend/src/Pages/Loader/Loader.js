import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader-container'>
      <div className='loader'>
        <div className='loader-arm'>
          <div className='loader-bucket'></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

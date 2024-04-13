// Loader.js
import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((step) => (step === 3 ? 1 : step + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='loader-container'>
      <div className={`loader step-${step}`}>
        <div className='block A'>A</div>
        <div className='block B'>B</div>
        <div className='block P'>P</div>
      </div>
    </div>
  );
};

export default Loader;

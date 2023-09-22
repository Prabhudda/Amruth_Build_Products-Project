import React from 'react';
import '../Whatsapp/whatsapp.css';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import { AiOutlineArrowUp } from 'react-icons/ai';
// import ScrollToTop from '../ScrollToTop';
function Whatsapp() {
  return (
    <div>
      <div className='whatsapp-icon-container'>
        <Link to='https://wa.me/919611782840' target='_blank' title='whatsapp'>
          <MdOutlineWhatsapp className='whatsapp-icon' />
        </Link>
      </div>
    </div>
  );
}

export default Whatsapp;

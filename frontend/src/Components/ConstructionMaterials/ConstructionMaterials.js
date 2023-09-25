import React from 'react';
import '../ConstructionMaterials/ConstructionMaterials.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Cement from '../..//assets/Cement.jpg';
import TMT from '../..//assets/steel.jpg';
import P_Sand from '../..//assets/psand.png';
import M_Sand from '../..//assets/m-sand.jpg';
import Jally from '../..//assets/jally.jpg';
import Dust from '../..//assets/dust.jpg';
import { FaAngleDoubleRight } from 'react-icons/fa';
function ConstructionMaterials() {
  return (
    <div className='ConstructionMaterials-main-container px-md-5 px-3 py-5'>
      <h3 className='ConstructionMaterials-main-text'>
        Discover Our Quality Construction Materials
      </h3>
      <p className='mt-5 px-sm-0 px-2'>
        Explore our extensive selection of construction materials tailored to
        meet the demands of your projects. From <strong>Cement</strong> and
        <strong> TMT Steel</strong> to <strong>M Sand</strong>,
        <strong> Jally</strong>, <strong>Dust</strong>, and
        <strong> P Sand</strong>, we provide the building blocks of excellence
        for your construction needs.
      </p>
      <div className='ConstructionMaterials-img-container row p-md-5 p-4 d-flex justify-content-between align-items-center mt-md-2 mt-4 '>
        <div className='ConstructionMaterials-img-box col-lg-4  col-md-5 col-12 text-center mt-md-0 mt-3'>
          <img
            src={Cement}
            style={{ width: '100%', height: '200px' }}
            className='img-fluid'
            loading='lazy'
            alt=''
          />
          <h5 className='fw-bold mt-3'>Cement</h5>
        </div>
        <div className='ConstructionMaterials-img-box col-lg-4 col-md-5 col-12 text-center mt-md-0 mt-4 '>
          <img
            src={TMT}
            style={{ width: '100%', height: '200px' }}
            className='img-fluid'
            alt=''
          />
          <h5 className='fw-bold mt-3'>TMT Steel</h5>
        </div>
        <div className=' ConstructionMaterials-img-box col-lg-4 col-md-5 col-12 text-center mt-md-0 mt-4 '>
          <img
            src={Jally}
            style={{ width: '100%', height: '200px' }}
            className='img-fluid'
            loading='lazy'
            alt=''
          />
          <h5 className='fw-bold mt-3'>Jally</h5>
        </div>
        <div className='ConstructionMaterials-img-box col-lg-4 col-md-5 col-12 text-center mt-md-0 mt-4 '>
          <img
            src={Dust}
            style={{ width: '100%', height: '200px' }}
            className='img-fluid'
            loading='lazy'
            alt=''
          />
          <h5 className='fw-bold mt-3'>Dust</h5>
        </div>
        <div className='ConstructionMaterials-img-box col-lg-4  col-md-5 col-12 text-center mt-md-0 mt-3'>
          <img
            src={P_Sand}
            style={{ width: '100%', height: '200px' }}
            className='img-fluid'
            loading='lazy'
            alt=''
          />
          <h5 className='fw-bold mt-3'>P Sand</h5>
        </div>
        <div className='ConstructionMaterials-img-box col-lg-4  col-md-5 col-12 text-center mt-md-0 mt-3'>
          <img
            src={M_Sand}
            style={{ width: '100%', height: '200px' }}
            className='img-fluid'
            loading='lazy'
            alt=''
          />
          <h5 className='fw-bold mt-3'>M Sand</h5>
        </div>
      </div>
      <div className='mt-3 px-sm-0 px-2'>
        <p>
          Elevate your construction with our precise, top-quality materials.
          From foundations to finishing touches, our products deliver unmatched
          durability and performance.
        </p>
      </div>
      <div className='text-center'>
        <Link to='/products' className=' btn btn-outline-primary px-5'>
          Explore <FaAngleDoubleRight />
        </Link>
      </div>
    </div>
  );
}

export default ConstructionMaterials;

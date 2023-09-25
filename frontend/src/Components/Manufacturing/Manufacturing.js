import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import SolidBlocks from '..//..//assets/SB.jpg';
import PaverBlock from '..//..//assets/paver-block.jpeg';
import KerbStone from '..//..//assets/kerb-stone.jpeg';
import CompoundWall from '..//..//assets/compound-wall.jpeg';
import '../Manufacturing/Manufacturing.css';
import { FaAngleDoubleRight } from 'react-icons/fa';
function Manufacturing() {
  return (
    <div className='Manufacturing-main-container px-md-5 px-3 py-5'>
      <h3 className='Manufacturing-main-text'>
        Explore Our Premium Manufacturing Materials
      </h3>
      <p className='mt-5 px-sm-0 px-2'>
        Discover our exceptional range of manufacturing materials designed to
        elevate your construction projects. From <strong>Solid Blocks </strong>
        and <strong>Paver Blocks</strong> to <strong>Kerb Stones</strong> and
        <strong> Precast Compound Walls</strong>, our top-notch solutions
        redefine excellence in construction.
      </p>
      <div className='Manufacturing-img-container row p-md-5 p-4 d-flex justify-content-between align-items-center mt-md-2 mt-4 '>
        <div className='Manufacturing-img-box col-lg-3  col-md-5 col-11 text-center mt-md-0 mt-3'>
          <img
            src={SolidBlocks}
            style={{ width: '100%', height: '100%' }}
            className='img-fluid'
            loading='lazy'
            alt=''
          />
          <h5 className='fw-bold'>Solid Block</h5>
        </div>
        <div className='Manufacturing-img-box col-lg-3 col-md-5 col-11 text-center mt-md-0 mt-4 '>
          <img
            src={PaverBlock}
            style={{ width: '100%', height: '100%' }}
            className='img-fluid'
            loading='lazy'
            alt=''
          />
          <h5 className='fw-bold'>Paver Block</h5>
        </div>
        <div className=' Manufacturing-img-box col-lg-3 col-md-5 col-11 text-center mt-md-0 mt-4 '>
          <img
            src={KerbStone}
            style={{ width: '100%', height: '100%' }}
            className='img-fluid'
            loading='lazy'
            alt=''
          />
          <h5 className='fw-bold'>Kerb Stone</h5>
        </div>
        <div className='Manufacturing-img-box col-lg-3 col-md-5 col-11 text-center mt-md-0 mt-4 '>
          <img
            src={CompoundWall}
            style={{ width: '100%', height: '100%' }}
            className='img-fluid'
            loading='lazy'
            alt=''
          />
          <h5 className='fw-bold'>Compound Wall</h5>
        </div>
      </div>
      <div className='mt-3 px-sm-0 px-2'>
        <p>
          Elegantly enduring manufacturing materials, meticulously crafted for
          longevity. Enhance outdoor beauty and build with confidence using our
          diverse range of products. Your landscape's perfect finish awaits.
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

export default Manufacturing;

import React from 'react';
import { TbBulb } from 'react-icons/tb';
import { MdTimeline } from 'react-icons/md';
import { IoIosTime } from 'react-icons/io';
import { AiOutlinePartition } from 'react-icons/ai';
import People from '..//..//assets/people.png';
import Estimation from '..//..//assets/estimation.jpg';
import Turnkey from '..//..//assets/turn-key.jpg';
import { FaArrowRight } from 'react-icons/fa';
import '../Service_Page/Service.css';
import SolidBlocks from '..//..//assets/SB.jpg';
import PaverBlock from '..//..//assets/paver-block.jpeg';
import KerbStone from '..//..//assets/kerb-stone.jpeg';
import CompoundWall from '..//..//assets/pcw-new.png';

import Cement from '../..//assets/Cement.jpg';
import TMT from '../..//assets/steel.jpg';
import P_Sand from '../..//assets/psand.png';
import M_Sand from '../..//assets/m-sand.jpg';
import Jally from '../..//assets/jally.jpg';
import Dust from '../..//assets/dust.jpg';

import { Link } from 'react-router-dom';
function Services() {
  return (
    <div className='service-main-box container-fluid p-0  bg-light'>
      <div className='position-relative serivesBgImg '>
        <div className='service-img-overlay d-flex justify-content-center align-items-center'>
          <h1 className='text-light'>Our Services</h1>
        </div>
      </div>
      <div className='container mt-sm-5 mt-0 '>
        <h2 className='text-center comprehensive-service-text'>
          Our comprehensive range of services
        </h2>
        <div className='comprehensive-service-box d-md-block d-none'>
          <div className='row text-center d-flex justify-content-around align-items-center'>
            <div
              className='col-md-3  col-12 py-5 mt-md-0 mt-3  bg-dark text-light'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <h4>Planning & Designing</h4>
            </div>
            <div
              className='col-md-3  col-12 py-5 mt-md-0 mt-3  bg-dark text-light'
              data-aos='fade-up'
              data-aos-duration='1100'
            >
              <h4>Estimation and Costing</h4>
            </div>
            <div
              className='col-md-3  col-12 py-5 mt-md-0 mt-3  bg-dark text-light'
              data-aos='fade-up'
              data-aos-duration='1300'
            >
              <h4>Turn Key Projects</h4>
            </div>
          </div>
          <div className='row text-center d-flex justify-content-around align-items-center '>
            <div
              className='col-md-5 col-12 py-5 mt-md-0 mt-3 bg-dark text-light'
              data-aos='fade-up'
              data-aos-duration='1800'
            >
              <h4>Manufacturing Materials</h4>
            </div>
            <div
              className='col-md-5 col-12 py-5 mt-md-0 mt-3 bg-dark text-light'
              data-aos='fade-up'
              data-aos-duration='1800'
            >
              <h4>Construction Materials</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-light p-md-5 p-2 container mt-sm-5 mt-0'>
        <div className='mt-2'>
          <div className=''>
            <div
              className='row d-flex justify-content-around align-items-center p-sm-5 p-3'
              style={{ backgroundColor: 'white' }}
            >
              <div
                className='col-md-5 col-12'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h2 className='service-main-text'>Planing & Designing</h2>
                <p className=''>
                  Where vision meets precision. Meticulous planning, creative
                  design – from concept to flawless execution. Your project, our
                  expertise, a seamless fusion of aesthetics and functionality.
                </p>
              </div>
              <div className='col-md-5 col-12'>
                <img
                  src={People}
                  loading='lazy'
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className='bg-light p-md-3 p-2 mt-sm-5 mt-2'>
              <div className='row d-flex justify-content-around align-items-center'>
                <h4 className='text-center mt-3   p-sm-5  fw-bold service-main-text'>
                  Elevating Your Project through Strategic Planning & Designing
                </h4>
                <div
                  className='col-md-5 col-12  mt-md-5 mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='text-center'>
                    <TbBulb size={50} />
                  </div>
                  <div className='mt-3 '>
                    <h4 className='text-center service-main-text'>
                      Conceptualization
                    </h4>
                    <p className='text-center'>
                      Preparation starts with understanding your project's
                      essence. We collaborate to reveal core objectives, unique
                      elements.
                    </p>
                  </div>
                </div>
                <div
                  className='col-md-5 col-12 mt-md-5 mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='text-center'>
                    <MdTimeline size={50} />
                  </div>
                  <div className='mt-3 '>
                    <h4 className='text-center service-main-text'>
                      Strategizing
                    </h4>
                    <p className='text-center'>
                      Meticulous planning maps each move, anticipating
                      challenges, seizing opportunities, guiding inception to
                      fruition.
                    </p>
                  </div>
                </div>
                <div
                  className='col-md-5 col-12 mt-md-5 mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='text-center'>
                    <IoIosTime size={50} />
                  </div>
                  <div className='mt-3 '>
                    <h4 className='text-center service-main-text'>
                      Timeline and Scheduling
                    </h4>
                    <p className='text-center'>
                      We value time's essence, crafting precise choreography for
                      steady progress, ensuring momentum never falters
                    </p>
                  </div>
                </div>

                <div
                  className='col-md-5 col-12 mt-md-5 mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='text-center'>
                    <AiOutlinePartition size={50} />
                  </div>
                  <div className='mt-3 '>
                    <h4 className='text-center service-main-text'>
                      Resource Allocation
                    </h4>
                    <p className='text-center'>
                      Every element matters. We allocate judiciously, optimizing
                      efficiency and minimizing waste across manpower,
                      materials, and technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-sm-5 mt-2'>
          <div className=' bg-light p-2'>
            <div
              className='row d-flex justify-content-around align-items-center p-sm-5 p-2'
              style={{ backgroundColor: 'white' }}
            >
              <div
                className='col-md-5 col-12 p-2'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h2 className='service-main-text'>Estimation and Costing</h2>
                <p className=''>
                  Transparency and accuracy are paramount. Advanced techniques
                  yield detailed estimates and breakdowns, ensuring clear
                  financial understanding for informed decisions.
                </p>
              </div>
              <div className='col-md-5 col-12'>
                <img
                  src={Estimation}
                  loading='lazy'
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className='row d-flex container-fluid justify-content-around align-items-center mt-3 '>
              <div className='col-md-6 col-12 estimation-costing-box'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                      Precise Projection
                    </div>
                    <div className='mt-2'>
                      <p>
                        Industry Insights, Advanced Tools. Our accurate cost
                        forecasts empower informed decisions and efficient
                        resource allocation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box my-md-0 my-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                      Transparent Breakdowns
                    </div>
                    <div className='mt-2'>
                      <p>
                        Detailed cost breakdowns provide clarity, revealing
                        comprehensive expense allocation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box mt-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                      Contingency Planning
                    </div>
                    <div className='mt-2'>
                      <p>
                        Comprehensive safeguards for resilience and budget
                        security against unexpected challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box mt-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                      Optimized Resource Allocation
                    </div>
                    <div className='mt-2'>
                      <p>
                        Our experts optimize resources, delivering quality and
                        excellence while ensuring budget efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-sm-5 mt-2'>
          <div className=' bg-light p-2'>
            <div
              className='row d-flex justify-content-around align-items-center p-sm-5 p-2'
              style={{ backgroundColor: 'white' }}
            >
              <div
                className='col-md-5 col-12'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h2 className='service-main-text'>Turnkey Projects</h2>
                <p>
                  From inception to completion, our solutions cover design,
                  procurement, construction, and handover. We handle it all, so
                  you can focus on your core activities.
                </p>
              </div>
              <div className='col-md-5 col-12'>
                <img
                  src={Turnkey}
                  loading='lazy'
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className='row d-flex container-fluid justify-content-around align-items-center mt-3 '>
              <div className='col-md-6 col-12 estimation-costing-box'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                      Comprehensive Coverage
                    </div>
                    <div className='mt-2'>
                      <p>From project inception to successful completion.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box my-md-0 my-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                      Design Expertise
                    </div>
                    <div className='mt-2'>
                      <p>
                        Creative and efficient design solutions tailored to your
                        needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box mt-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                      Expert Construction
                    </div>
                    <div className='mt-2'>
                      <p>Meticulous execution to bring your vision to life.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box mt-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                      Smooth Handover
                    </div>
                    <div className='mt-2'>
                      <p>
                        Ensuring a seamless transition for your operational
                        success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='row manufacturing-container d-flex align-items-center p-sm-5 p-2'
              style={{ backgroundColor: 'white' }}
            >
              <div
                className='col-md-4 col-12 py-sm-0 py-5'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h2 className='service-main-text '>Manufacturing Materials</h2>
                <p>
                  Solid Blocks & Paver Blocks for robust structures, Kerb Stones
                  & Precast Compound Walls for safety and aesthetics.
                </p>
                <Link to='/products' className='btn btn-outline-primary'>
                  Read More
                </Link>
              </div>
              <div className='col-md-7 col-12 row d-flex manufacturing-container align-items-center'>
                <div className='col-md-5 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      loading='lazy'
                      src={SolidBlocks}
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Solid Block</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-5 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      src={PaverBlock}
                      loading='lazy'
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Paver Block</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-5 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      src={KerbStone}
                      loading='lazy'
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Kerb Stone</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-5 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      src={CompoundWall}
                      loading='lazy'
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Compound Wall</h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className='row manufacturing-container d-flex align-items-center p-sm-5 p-2 '
              style={{ backgroundColor: 'white' }}
            >
              <div>
                <div
                  className='col-12 py-sm-0 py-5'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <h2 className='service-main-text'>Construction Materials</h2>
                  <p>
                    Solid Blocks & Paver Blocks for robust structures, Kerb
                    Stones & Precast Compound Walls for safety and aesthetics.
                  </p>
                  <Link to='/products' className='btn btn-outline-primary'>
                    Read More
                  </Link>
                </div>
              </div>
              <div className='col-12 row manufacturing-container  d-flex justify-content-between align-items-center mt-md-5 mt-0'>
                <div className='col-md-3 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      loading='lazy'
                      src={Cement}
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Cement</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      loading='lazy'
                      src={TMT}
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>TMT</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      loading='lazy'
                      src={P_Sand}
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>P Sand</h5>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='row d-flex manufacturing-container justify-content-between align-items-center mt-md-5 mt-3'>
                <div className='col-md-3 col-12 image-container position-relative'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      src={M_Sand}
                      loading='lazy'
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>M Sand</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      loading='lazy'
                      src={Jally}
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Jally</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      src={Dust}
                      loading='lazy'
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Dust</h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

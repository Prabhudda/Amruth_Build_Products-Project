import React, { useState } from 'react';
import '../Home_Page/Home.css';
import { FaLeaf, FaTrophy, FaLightbulb } from 'react-icons/fa';
import { RxArrowTopRight } from 'react-icons/rx';
import { HashLink as Link } from 'react-router-hash-link';
import img1 from '..//..//assets/Service-home-1.jpeg';
import img2 from '..//..//assets/3.jpeg';
import img3 from '..//..//assets/turnkey.jpg';
import jsw from '..//..//assets/jsw-steel.png';
import SK from '..//..//assets/sk.jpg';
import Kamadenu from '..//..//assets/kamadenu-new.png';
import logo from '..//..//assets/round.jpg';
import TMT from '..//..//assets/turbo-steel.jpg';
import ts from '..//..//assets/ts-new.png';
import ManufacturingMaterials from '..//..//Components/Manufacturing/Manufacturing';
import ConstructionMaterials from '..//..//Components/ConstructionMaterials/ConstructionMaterials';

const data = [
  {
    id: 1,
    title: 'Innovative Construction & Manufacturing',
    txt: 'Blueprinting Your Dreams , Where Imagination Meets Architecture',
    img: `${img1}`,
    tt: '',
  },
  {
    id: 2,
    title: 'Amruth Build Products',
    txt: 'Build a Better Future',
    img: `${img1}`,
    tt: 'Innovative Construction & Manufacturing',
  },
  {
    id: 3,
    title: 'Services',
    txt: 'Planning & Designing',
    img: `${img2}`,
    tt: 'Blueprinting Your Dreams , Where Imagination Meets Architecture',
  },
  {
    id: 4,
    title: 'Services',
    txt: 'Estimation and Costing',
    img: `${logo}`,
    tt: 'Building with Precision, Budget in Mind',
  },
  {
    id: 5,
    title: 'Services',
    txt: 'Turn Key Projects',
    img: `${img3}`,
    tt: ' Seamless Execution, Stress-Free Experience',
  },
];

function Home() {
  const [index] = useState(0);
  const { id, title, txt } = data[index];
  return (
    <div
      className='home-head-component position-relative container-fluid px-0  my-4'
      style={{ overflow: 'hidden' }}
    >
      <div className='home-main-container'>
        <div className='img-overlay text-center'>
          <div className='text-container container' key={id}>
            <h1 className='company-home-title'>{title}</h1>
            <p className='mt-3 home-sub-text'>{txt}</p>
          </div>
          <div className='mt-4 container home-button'>
            <Link className='explore-link' to='/about'>
              Explore More
            </Link>
            <Link
              className='btn btn-outline-primary mx-3 text-light'
              to='/contact'
              style={{
                letterSpacing: '1px',
                borderRadius: '0px',
                padding: '5px 12px',
                fontSize: '1rem',
                marginTop: '-3px',
              }}
            >
              Reach Us
            </Link>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className=''>
          <h3 className='text-center main-text'>
            Building Your Vision, Brick By Brick
          </h3>
        </div>
      </div>
      <div
        className='container-fluid p-0 text-center'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <div className=' row p-3 d-flex justify-content-around align-items-center '>
          <div className='container-box col-lg-3 col-md-5 col-12 p-5 mt-md-0'>
            <FaLightbulb className='container-icons' />
            <h3 className='mt-3'>Innovation</h3>
            <p>
              Blending technology and creativity, we exceed client expectations.
              Fresh ideas drive continuous enhancement of our offerings.
            </p>
          </div>
          <div className='container-box col-lg-3 col-md-5 col-12 p-5 mt-lg-0 mt-md-5 mt-1'>
            <FaLeaf className='container-icons' />
            <h3 className='mt-3 '>Sustainability</h3>
            <p>
              Our work is rooted in sustainability. We envision an eco-friendly
              future with responsible construction and efficient manufacturing
              for a greener world.
            </p>
          </div>
          <div className='container-box col-lg-3 col-md-6 col-12 p-5 mt-lg-0 mt-md-5 mt-1'>
            <FaTrophy className='container-icons' />
            <h3 className='mt-3'>Excellence</h3>
            <p>
              Quality defines our every action, from intricate details to grand
              undertakings. Our dedication sets us apart and guarantees success.
            </p>
          </div>
        </div>
      </div>
      <div className='container-fluid trusted-text-container p-0'>
        <div
          className='pt-5 px-sm-0 px-3'
          data-aos='fade-up'
          data-aos-duration='1100'
        >
          <h3 className='main-text text-center'>
            Trusted by well known companies
          </h3>
          <p className='sub-text mt-5 text-center'>
            We take pride in our commitment to delivering exceptional services
            that meet the high standards of industry leaders.
          </p>
        </div>
        <div className='row px-0 d-flex justify-content-center align-items-center '>
          <div className=''>
            <div className='logos'>
              <div className='logos-slide'>
                <img loading='lazy' src={jsw} alt='' />
                <img loading='lazy' src={SK} alt='' />
                <img loading='lazy' src={ts} alt='' />
                <img
                  loading='lazy'
                  className='Kamadenu'
                  src={Kamadenu}
                  alt=''
                />
                <img loading='lazy' src={jsw} alt='' />
                <img loading='lazy' src={SK} alt='' />
                <img loading='lazy' src={TMT} alt='' />
                <img
                  loading='lazy'
                  className='Kamadenu'
                  src={Kamadenu}
                  alt=''
                />
              </div>
              <div className='logos-slide'>
                <img loading='lazy' src={jsw} alt='' />
                <img loading='lazy' src={SK} alt='' />
                <img loading='lazy' src={ts} alt='' />
                <img
                  loading='lazy'
                  className='Kamadenu'
                  src={Kamadenu}
                  alt=''
                />
                <img loading='lazy' src={jsw} alt='' />
                <img loading='lazy' src={SK} alt='' />
                <img loading='lazy' src={TMT} alt='' />
                <img
                  loading='lazy'
                  className='Kamadenu'
                  src={Kamadenu}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='service-container conatainer-fluid postion-relative'>
        <div className='container px-md-0 px-4'>
          <h2 className='main-text'>Bringing Your Visions to Life</h2>
          <div
            className='row d-flex justify-content-center align-items-center mt-5 p-sm-5 p-0'
            style={{ backgroundColor: '#FAF7F0' }}
          >
            <div className='col-lg-6 col-12 p-0'>
              <img
                loading='lazy'
                className='img-fluid service-img'
                src={img1}
                alt=''
              />
            </div>
            <div
              className='col-lg-6 col-11 mt-md-0 mt-3 p-lg-5 py-4 px-2'
              data-aos='fade-up'
              data-aos-duration='1100'
            >
              <h3 className='service-main-text'>Planning and Designing</h3>
              <p>
                Our experts turn your construction vision into reality, blending
                functionality with aesthetics for beautifully crafted spaces
                that resonate with your aspirations.
              </p>
              <Link to='/services' className='btn btn-outline-primary'>
                Get More <RxArrowTopRight />
              </Link>
            </div>
          </div>
          <div
            className='row flex-sm-row flex-row-reverse d-flex justify-content-center align-items-center mt-5 p-sm-5 p-0'
            style={{ backgroundColor: '#F3FDE8' }}
          >
            <div
              className='col-lg-6 col-11 mt-md-0 mt-3 p-lg-5 py-4 px-2 order-lg-0 order-1'
              data-aos='fade-up'
              data-aos-duration='1200'
            >
              <h3 className='service-main-text'>Estimation and Costing</h3>
              <p>
                Our estimation and costing ensure transparency and accuracy.
                With detailed cost breakdowns and advanced tools, you can
                confidently manage your project budget without hidden surprises.
              </p>
              <Link to='/services' className='btn btn-outline-primary'>
                Get More <RxArrowTopRight />
              </Link>
            </div>
            <div className='col-lg-6 col-12 p-0 order-lg-1 order-0'>
              <img
                loading='lazy'
                className='img-fluid service-img'
                src={img2}
                alt=''
              />
            </div>
          </div>
          <div
            className='row d-flex justify-content-center align-items-center mt-5 p-sm-5 p-0'
            style={{ backgroundColor: '#F9F5F6' }}
          >
            <div className='col-lg-6 col-12 p-0'>
              <img
                loading='lazy'
                src={img3}
                className='img-fluid service-img'
                alt=''
              />
            </div>
            <div
              className='col-lg-6 col-11 mt-md-0 mt-3 p-lg-5 py-4 px-2'
              data-aos='fade-up'
              data-aos-duration='1200'
            >
              <h3 className='service-main-text'>Turnkey Projects</h3>
              <p>
                Witness your dream project unfold effortlessly with our turnkey
                solutions. From concept to execution, we handle design,
                construction, and more, ensuring a seamless experience and
                exceptional results.
              </p>
              <Link to='/services' className='btn btn-outline-primary'>
                Get More <RxArrowTopRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className='my-5 p-0 px-2 container'
        data-aos='fade-up'
        data-aos-duration='1200'
      >
        <ManufacturingMaterials />
      </div>
      <div
        className='my-5 p-0 px-2 container'
        data-aos='fade-up'
        data-aos-duration='1200'
      >
        <ConstructionMaterials />
      </div>
    </div>
  );
}

export default Home;

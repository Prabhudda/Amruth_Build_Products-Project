import React, { useState } from 'react';
import '../Home_Page/Home.css';
import { FaLeaf, FaTrophy, FaLightbulb } from 'react-icons/fa';
import { RxArrowTopRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';
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
    title: 'Amruth Build Products',
    txt: 'Build a Better Future',
    img: `${img1}`,
    tt: 'Innovative Construction & Manufacturing Company',
  },
  {
    id: 2,
    title: 'Services',
    txt: 'Planning & Designing',
    img: `${img2}`,
    tt: 'Blueprinting Your Dreams , Where Imagination Meets Architecture',
  },
  {
    id: 3,
    title: 'Services',
    txt: 'Estimation and Costing',
    img: `${logo}`,
    tt: 'Building with Precision, Budget in Mind',
  },
  {
    id: 4,
    title: 'Services',
    txt: 'Turn Key Projects',
    img: `${img3}`,
    tt: ' Seamless Execution, Stress-Free Experience',
  },
];

function Home() {
  const [index, setIndex] = useState(0);
  const { id, title, txt, tt, img } = data[index];

  // const checkNumber = (number) => {
  //   if (number > data.length - 1) return 0;
  //   if (number < 0) return data.length - 1;
  //   return number;
  // };

  // const prevBtn = () => {
  //   setIndex((index) => {
  //     let newIndex = index - 1;
  //     return checkNumber(newIndex);
  //   });
  // };

  // const nextBtn = () => {
  //   setIndex((index) => {
  //     let newIndex = index + 1;
  //     return checkNumber(newIndex);
  //   });
  // };

  return (
    <div
      className='home-head-component position-relative container-fluid px-0  my-5'
      style={{ overflow: 'hidden' }}
    >
      <div className='home-main-container'>
        <div className='img-overlay text-center'>
          <div className='text-container container' key={id}>
            <h1 className='company-home-title'>{title}</h1>
            <h2 className='home-sub-title mt-3'>{txt}</h2>
            <h5 className='mt-3 home-sub-text'>{tt}</h5>
          </div>
          <div className='mt-5 container'>
            <Link className='explore-link btn btn-outline-primary' to='/about'>
              Explore More
            </Link>
          </div>
        </div>
        {/*<div class='btn-container'>
          <button className='prev-btn' onClick={prevBtn}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextBtn}>
            <FaChevronRight />
          </button>
        </div> */}
      </div>

      <div className='container my-5'>
        <div className=''>
          <h3 className='text-center main-text main-text-1'>
            Building Your Vision, Brick by Brick
          </h3>
        </div>
      </div>
      <div
        className='container-fluid p-0 text-center '
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <div className=' row p-3 d-flex justify-content-around align-items-center'>
          <div className='container-box col-lg-3 col-md-5 col-12 p-3 mt-md-0'>
            <FaLightbulb className='container-icons' />
            <h2>Innovation</h2>
            <p>
              Blending technology and creativity, we exceed client expectations.
              Fresh ideas drive continuous enhancement of our offerings.
            </p>
          </div>
          <div className='container-box col-lg-3 col-md-5 col-12 p-3 mt-lg-0 mt-md-5 mt-1'>
            <FaLeaf className='container-icons' />
            <h2>Sustainability</h2>
            <p>
              Our work is rooted in sustainability. We envision an eco-friendly
              future with responsible construction and efficient manufacturing
              for a greener world.
            </p>
          </div>
          <div className='container-box col-lg-3 col-md-6 col-12 p-3 mt-lg-0 mt-md-5 mt-1'>
            <FaTrophy className='container-icons' />
            <h2>Excellence</h2>
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
          <h3 className='main-text text-center main-text-2'>
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
              className='col-lg-6 col-12 mt-md-0 mt-3 p-lg-5 py-4 px-2'
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
              className='col-lg-6 col-12 mt-md-0 mt-3 p-lg-5 py-4 px-2 order-lg-0 order-1'
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
              className='col-lg-6 col-12 mt-md-0 mt-3 p-lg-5 py-4 px-2'
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

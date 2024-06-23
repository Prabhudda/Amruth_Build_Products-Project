import React from 'react';
import company1 from '..//..//assets/company-1.jpg';
import company2 from '..//..//assets/company-2.jpg';
import abp from '..//..//assets/ABP_img.jpeg';

import '../About/About.css';
import { FaHandsHelping } from 'react-icons/fa';
import { TbTargetArrow } from 'react-icons/tb';
import { AiOutlineEye } from 'react-icons/ai';

function About() {
  return (
    <div
      className='about-main-container p-0 container-fluid position-relative'
      style={{ overflow: 'hidden' }}
    >
      <div className='position-relative serivesBgImg '>
        <div className='service-img-overlay d-flex justify-content-center align-items-center'>
          <h1 className='text-light text-center products-main-title'>
            About Us
          </h1>
        </div>
      </div>
      <div className='position-relative container mt-5'>
        <div className='our-story-container'>
          <div>
            <h3 className='about-main-text'>Company Profile</h3>
          </div>
          <div className='mt-5'>
            <p className='text-left mx-md-0 mx-3'>
              We take pride in being an innovative construction and
              manufacturing company, dedicated to providing top-notch solutions
              for all your construction needs.
            </p>
            <p className='text-left mx-md-0 mx-3'>
              With years of experience and expertise, we have earned a
              reputation for excellence in the industry. Our commitment to
              quality, customer satisfaction, and sustainable practices sets us
              apart as a trusted partner for your construction projects.
            </p>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-lg-4 col-11'>
            <img
              loading='lazy'
              className='img-fluid company-img-box'
              src={company1}
              alt='company-img'
            />
          </div>
          <div className='col-lg-4 col-11 mt-lg-0 mt-4'>
            <img
              loading='lazy'
              className='img-fluid company-img-box'
              src={company2}
              alt='company-img'
            />
          </div>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row d-flex justify-content-around align-items-center'>
          <div className='col-lg-4 col-11'>
            <img
              loading='lazy'
              className='img-fluid company-img-box'
              src={abp}
              alt='company-img'
            />
          </div>
        </div>
      </div>
      <div className='position-relative our-values-container container p-0 text-center'>
        <h3 className='about-main-text text-center px-1'>Framing Our Values</h3>
        <div className='row p-3 d-md-flex flex-md-row flex-row-reverse justify-content-around align-items-center mt-5'>
          <div
            className='col-lg-5 col-md-12 col-11 p-4 mt-md-0 mt-3  about-shadow'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <AiOutlineEye size={50} />
            <h2 className='content-sub-text fs-3 fw-bold mt-1'>Vision</h2>
            <p>
              Turning ideas into reality, we reflect our commitment through
              every structure we create. Quality, innovation, and sustainability
              guide us.We surpass client expectations.
            </p>
          </div>
          <div
            className='col-lg-5 col-md-12 col-11 mt-lg-0 mt-5 p-4 about-shadow'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <TbTargetArrow size={50} />
            <h2 className='content-sub-text fs-3 fw-bold mt-1'>Mission</h2>
            <p className=''>
              Elevating excellence through inspiring spaces, lasting
              creations,and driven by both technology and unwavering dedication
              in construction and manufacturing.
            </p>
          </div>
          <div
            className='col-lg-5 col-md-12 col-11 mt-5  p-4 about-shadow'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <FaHandsHelping size={50} />
            <h2 className='content-sub-text fs-5 fw-bold mt-1'>
              Collaborative Approach
            </h2>
            <p>
              Empowered by collaboration, we partner closely with clients to
              realize their visions. Shared goals and commitment drive every
              step toward excellence.
            </p>
          </div>
        </div>
      </div>
      <div className='container position-relative my-5'>
        <div className='row d-flex justify-content-between align-items-flex-start'>
          <div
            className='col-lg-5 col-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h3 className='about-main-text'>Who We Are</h3>
            <p className='mt-4 px-sm-0 px-3 paragraphs'>
              Beyond a company, a passion, a vision, a commitment. With over 2
              years of expertise, we've refined our craft into an art. Our
              skilled team turns your concepts into enduring realities through
              creative collaboration.
            </p>
          </div>
          <div
            className='col-lg-5 col-12 mt-lg-0 mt-5'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h3 className='about-main-text'>What Sets Us Apart</h3>
            <p className='mt-4 px-sm-0 px-3  paragraphs'>
              Uniqueness drives us.Quality and customer happiness are our
              foundations.Trust in our promise for exceptional results and a
              greener future.
            </p>
          </div>
        </div>
      </div>
      <div className='position-relative container my-5'>
        <div className='row col-12 d-flex justify-content-center align-items-center'>
          <div
            className='col-lg-9 col-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h3 className='text-center about-main-text'>What We Do</h3>
            <p className='mt-5 px-sm-0 px-3  paragraphs'>
              Our services span construction and manufacturing, executed with
              precision, ingenuity, and excellence.
            </p>
          </div>
        </div>
        <div
          className='position-relative container mt-5'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <div className='position-relative row d-flex justify-content-center align-items-center'>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Planning</h5>
                  We lay the foundation for success through meticulous planning,
                  ensuring that every project is structured to achieve optimal
                  outcomes.
                </li>
              </ul>
            </div>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Designing</h5>
                  Our creative minds fuse artistry and functionality to craft
                  designs that are both visionary and practical, reflecting your
                  unique aspirations.
                </li>
              </ul>
            </div>
          </div>
          <div className='position-relative row justify-content-center align-items-center'>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Estimation and Costing</h5>
                  We provide accurate estimations and cost analyses, helping you
                  make informed decisions and manage your project budget
                  effectively.
                </li>
              </ul>
            </div>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Turnkey Projects</h5>
                  Embrace a seamless construction journey with our turnkey
                  solutions, where we handle every detail from concept to
                  completion.
                </li>
              </ul>
            </div>
          </div>
          <div className='position-relative row justify-content-center align-items-center'>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Construction Materials</h5>
                  We offer a comprehensive range of construction materials,
                  including cement, TMT steel, M sand, jally, dust, and P sand,
                  each meeting the highest standards of quality and reliability.
                </li>
              </ul>
            </div>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Manufacturing Materials</h5>
                  Elevate your projects with our precision-engineered
                  manufacturing materials, including solid blocks, paver blocks,
                  kerb stones, and precast compound walls.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container choose-us-main-container position-relative my-5'>
        <div className='p-3'>
          <div className=''>
            <h3 className='text-center about-main-text'>Why Choose Us</h3>
          </div>
          <div className='row row-data d-flex justify-content-around align-items-center'>
            <div
              className='col-md-3 col-12 choose-us-box'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>01</div>
                <div>Innovative Solutions</div>
              </div>
            </div>
            <div
              className='col-md-3 col-12 choose-us-box my-md-0 my-4'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>02</div>
                <div>Expertise Beyond Measure</div>
              </div>
            </div>
            <div
              className='col-md-3 col-12 choose-us-box'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>03</div>
                <div>Uncompromising Quality</div>
              </div>
            </div>
          </div>
          <div className='row row-data d-flex justify-content-around align-items-center my-md-5 mt-4'>
            <div
              className='col-md-3 col-12  choose-us-box'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>04</div>
                <div>Comprehensive Services</div>
              </div>
            </div>
            <div
              className='col-md-3 col-12  choose-us-box my-md-0 my-4'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>05</div>
                <div>Customer-Centric Approach</div>
              </div>
            </div>
            <div
              className='col-md-3 col-12  choose-us-box'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>06</div>
                <div>Diverse Materials</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

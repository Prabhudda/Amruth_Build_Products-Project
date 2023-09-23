import React, { useState } from 'react';
import styled from 'styled-components';
import contactImg from '..//..//assets/contact.png';
import '../Contact/Contact.css';
import validator from 'validator';
import { FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import axios from 'axios';

const MapContainer = styled.li`
  @media (max-width: 538px) {
    iframe {
      width: 400px;
    }
  }
  @media (max-width: 403px) {
    iframe {
      width: 290px;
    }
  }
`;

const InputBox = styled.input``;
const TextMessageBox = styled.textarea``;

function Contact() {
  const [errors, setErrors] = useState({});
  const [dataSubmittedMessage, setDataSubmittedMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const clearData = () => {
    setFormData({
      name: '',
      email: '',
      number: '',
      message: '',
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValidName = (name) => {
    return validator.matches(name, /^[a-zA-Z\s-]+$/);
  };

  const isValidNumber = (number) => {
    if (number === undefined) {
      // Handle the case where number is undefined (e.g., not provided in formData)
      return false;
    }
    return (
      validator.matches(number, /^[+]?\d+$/) &&
      validator.isLength(number, { min: 10, max: 10 })
    );
  };
  const isValidEmail = (email) => {
    return validator.isEmail(email);
  };

  const isValidMessage = (message) => {
    return validator.isLength(message, { min: 10 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!isValidName(formData.name)) {
      newErrors.name = 'Please enter your name';
    }

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'please provide your email';
    }

    if (!isValidNumber(formData.number)) {
      newErrors.number = 'please enter valid number';
    }

    if (!isValidMessage(formData.message)) {
      newErrors.message = 'Message must be between 10 and 1000 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      // Display error messages to the user
      setErrors(newErrors);
    } else {
      try {
        setTimeout(() => {
          setDataSubmittedMessage(true);
          setTimeout(() => {
            setDataSubmittedMessage(false);
          }, 5000);

          clearData();
        }, 1500);

        const response = await axios.post(
          'https://amruth-build-products-backend.onrender.com/contact',
          formData
        );

        console.log('Form submitted successfully!', response.data);

        // setFormData({
        //   name: '',
        //   email: '',
        //   number: '',
        //   message: '',
        // });
        // setErrors({});
        // setDataSubmittedMessage(true);
      } catch (error) {
        console.error('Error submitting the form:', error);
        // Handle errors or show an error message to the user
      }
    }
  };

  // setTimeout(() => {
  //   setDataSubmittedMessage(false);
  // }, 10000);

  return (
    <div className='contact-main-container container-fluid p-0'>
      <div className='position-relative serivesBgImg '>
        <div className='service-img-overlay d-flex justify-content-center align-items-center'>
          <h1 className='text-light text-center products-main-title'>
            Contact Us
          </h1>
        </div>
      </div>
      <div className='text-center mt-5'>
        <h2 className='contact-main-text'>Get in touch with us today!</h2>
        <p className='mt-5 px-4'>
          Ready to embark on your next project? Connect with us today and let's
          build a future together.
        </p>
      </div>
      <div className='container mt-sm-5 px-sm-0 px-4 mt-3 d-flex justify-content-md-center'>
        <div className='row'>
          <div
            className='col-md-6 col-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <img
              loading='lazy'
              src={contactImg}
              alt=''
              style={{ width: '100%' }}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className='col-md-6 col-12'
            autoComplete='off'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className=''>
              <label
                className='mt-2 fw-bold'
                style={{ color: `{errors.name ? 'red':'black}` }}
                htmlFor='name'
              >
                Name <span style={{ color: 'red' }}>*</span>
              </label>
              <InputBox
                className='input-box w-100 mt-2 card px-3 py-2'
                type='text'
                value={formData.name}
                name='name'
                placeholder='Enter your name'
                onChange={handleChange}
              />
              {errors.name && <span className='error'>{errors.name}</span>}
            </div>
            <div>
              <label className='mt-2 fw-bold' htmlFor='email'>
                Email <span style={{ color: 'red' }}>*</span>
              </label>
              <InputBox
                className='input-box w-100 mt-2 card px-3 py-2'
                type='email'
                name='email'
                value={formData.email}
                placeholder='Enter your email'
                onChange={handleChange}
              />
              {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div>
              <label className='mt-2 fw-bold' htmlFor='number'>
                Number <span style={{ color: 'red' }}>*</span>
              </label>
              <InputBox
                className='input-box w-100 mt-2 card px-3 py-2'
                type='number'
                value={formData.number}
                name='number'
                placeholder='Enter your number'
                onChange={handleChange}
              />
              {errors.number && <span className='error'>{errors.number}</span>}
            </div>
            <div>
              <label className=' mt-2 fw-bold' htmlFor='message'>
                Message <span style={{ color: 'red' }}>*</span>
              </label>
              <TextMessageBox
                className='input-box w-100 mt-2 card px-3 py-2'
                type='text'
                name='message'
                value={formData.message}
                placeholder='Enter your message'
                rows='5'
                onChange={handleChange}
              />
              {errors.message && (
                <span className='error'>{errors.message}</span>
              )}
            </div>
            <div className='d-flex'>
              <button
                className='btn btn-outline-primary w-50 mt-5 mx-2'
                type='submit'
              >
                Submit
              </button>
              <button
                className='btn btn-outline-danger w-50 mt-5 mx-2'
                type='reset'
                onClick={clearData}
              >
                Reset
              </button>
            </div>
            <div className='mt-4 text-success'>
              {dataSubmittedMessage && (
                <div className='alert alert-success'>
                  Data Submitted successfully...!!
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className='container contact-details-box mt-5'>
        <div className='row d-flex justify-content-around align-items-center px-md-0 px-5'>
          <div
            className='col-md-3 col-12 contact-box d-flex flex-column justify-content-center align-items-center'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='text-center'>
              <div>
                <FaEnvelope size={35} className='contact-icons' />
              </div>
              <div className='mt-2'>
                <p className='fw-bold contact-title'>Email</p>
                <p
                  className=' mt-sm-0 mt-2 fs-6'
                  style={{ wordBreak: 'break-word' }}
                >
                  <a
                    className='contact-link'
                    href='mailto:amruthbuildproducts@gmail.com'
                    title='Drop a message'
                  >
                    amruthbuildproducts@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className='col-md-3 col-12 contact-box d-flex flex-column justify-content-center align-items-center mt-md-0 mt-4'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <div className='text-center mx-sm-3'>
              <div>
                <FaPhoneAlt size={35} className='contact-icons' />
              </div>
              <div className='mt-2'>
                <p className='fw-bold contact-title'>Call Us</p>
                <p
                  className=' mt-sm-0 mt-2 fs-6'
                  style={{ wordBreak: 'break-word' }}
                >
                  <a
                    className='contact-link mt-sm-0 mt-2'
                    title='Call Us'
                    href='tel:+919611782840'
                  >
                    +91-9611782840
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className='col-md-3 col-12 contact-box d-flex flex-column justify-content-center align-items-center mt-md-0 mt-4'
            data-aos='fade-up'
            data-aos-duration='1300'
          >
            <div className='text-center mx-sm-3'>
              <div>
                <FaClock size={35} className='contact-icons' />
              </div>
              <div className='mt-2'>
                <p className='fw-bold contact-title'>Open Hours</p>
                <p className='fs-6'>Monday-Sunday</p>
                <p className='fs-6'>9:30AM - 5:30PM</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className='row d-flex justify-content-center align-items-center'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <div className='container-fluid mt-md-5 mt-3 col-12'>
            <div className='mt-lg-0 mt-5'>
              <MapContainer style={{ listStyle: 'none' }}>
                <iframe
                  className='map-frame'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6652.448213099841!2d76.08184809836433!3d14.029307228287367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba67be65caa1ed%3A0x749d7d7f27ea2ad5!2sAmruth%20Build%20Products!5e0!3m2!1sen!2sin!4v1690566894091!5m2!1sen!2sin'
                  title='location'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

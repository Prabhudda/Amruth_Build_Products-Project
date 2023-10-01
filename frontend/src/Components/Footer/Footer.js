import React from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
// import { AiOutlineArrowUp } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Logo from '../../assets/round.jpg';
import '../Footer/Footer.css';
// import ScrollToTop from '../ScrollToTop';

// <FaBuilding size={0} />
function Footer() {
  const location = useLocation();
  return (
    <div className='footer-main-container container-fluid p-sm-5 p-4'>
      <footer className=''>
        <div className='row d-flex justify-content-around '>
          <div className='col-lg-2 col-12'>
            <div className='d-flex  flex-column '>
              <div className=''>
                <img
                  src={Logo}
                  alt='img'
                  width={100}
                  height={100}
                  loading='lazy'
                />
                <h5 className='mt-3 footer-title'>Building a Better Future</h5>
                <p>
                  we are architects of progress, builders of dreams, and
                  champions of innovation. With a steadfast commitment to
                  excellence, we strive to redefine the industry's standards and
                  pave the way for a brighter tomorrow.
                </p>
              </div>
            </div>
            <h5 className='fw-bold footer-title'>Follow Us</h5>
            <div className='d-flex justify-content-start align-items-center mt-3'>
              <div className=''>
                <Link
                  to='https://www.facebook.com/profile.php?id=100086127334544'
                  title='Facebook'
                  target='_blank'
                >
                  <FaFacebook className='reach-us-icons social-media-icons' />
                </Link>
              </div>

              <div className='mx-2'>
                <Link
                  to='https://www.instagram.com/amruth_organic_fertilizers/'
                  target='_blank'
                  title='Instagram'
                >
                  <FaInstagram className='reach-us-icons social-media-icons' />
                </Link>
              </div>
              <div className=''>
                <Link
                  to='https://www.linkedin.com/company/amruth-organic-fertilizers/'
                  title='LinkedIn'
                  target='_blank'
                >
                  <FaLinkedin className='reach-us-icons social-media-icons' />
                </Link>
              </div>
              <div className='mx-2'>
                <Link
                  to='https://www.youtube.com/@AMRUTHORGANICFERTILIZERS/featured'
                  title='YouTube'
                  target='_blank'
                >
                  <FaYoutube className='reach-us-icons social-media-icons' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-12 mt-5'>
            <h5 className='footer-title '>Quick Links</h5>
            <hr></hr>
            <div>
              <div>
                <Link
                  className={
                    location.pathname === '/' ? 'active' : 'footer-link'
                  }
                  to='/'
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  className={
                    location.pathname === '/about' ? 'active' : 'footer-link'
                  }
                  to='/about'
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  className={
                    location.pathname === '/products' ? 'active' : 'footer-link'
                  }
                  to='/products'
                >
                  Products
                </Link>
              </div>
              <div>
                <Link
                  className={
                    location.pathname === '/projects' ? 'active' : 'footer-link'
                  }
                  to='/projects'
                >
                  Projects
                </Link>
              </div>
              <div>
                <Link
                  className={
                    location.pathname === '/services' ? 'active' : 'footer-link'
                  }
                  to='/services'
                >
                  Services
                </Link>
              </div>
              {/* 
              <div>
                <Link
                  className={
                    location.pathname === '/team' ? 'active' : 'footer-link'
                  }
                  to='/team'
                >
                  Team
                </Link>
              </div>
              */}
              <div className=''>
                <Link
                  className={
                    location.pathname === '/contact' ? 'active' : 'footer-link'
                  }
                  to='/contact'
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-12 mt-5'>
            <h5 className='footer-title'>
              <Link to='/services' className='footer-main-link'>
                Services
              </Link>
            </h5>
            <hr></hr>
            <div>
              <div>Planning</div>
              <div>Designing</div>
              <div>Estimation and Costing</div>
              <div>Turn Key Projects</div>
            </div>
          </div>

          <div className='col-lg-2 col-12 mt-5'>
            <h5 className='footer-title'>
              <Link to='/products' className='footer-main-link'>
                Manufacturing Materials
              </Link>
            </h5>
            <hr></hr>
            <div>
              <div>Solid Blocks</div>
              <div>Paver Blocks</div>
              <div>Kerb Stones</div>
              <div>Precast Compound Walls</div>
            </div>
            <h5 className='footer-title mt-4'>
              <Link to='/products' className='footer-main-link'>
                Construction Materials
              </Link>
            </h5>
            <hr></hr>
            <div>
              <div>Cement</div>
              <div>TMT Steel</div>
              <div>M Sand</div>
              <div>Jally</div>
              <div>Dust</div>
              <div>P Sand</div>
            </div>
          </div>
          <div className='col-lg-2 col-12 mt-5'>
            <h5 className='footer-title'>
              <Link to='/contact' className='footer-main-link'>
                Reach Us At
              </Link>
            </h5>
            <hr></hr>
            <div className='d-sm-flex flex-column justify-content-center mt-sm-0 mt-4'>
              <div className='mt-2'>
                <FaMapMarkerAlt className='reach-us-icons' />
                <p className='mx-sm-0 fs-6  mt-3 ' style={{ opacity: '1' }}>
                  Amruth Build Products, Beside Amrutha bindu petrol bunk
                  Malladihalli, Holalkere (tq), Chitradurga (Dist), Karnataka -
                  577531
                </p>
              </div>
              <div className=' d-sm-flex flex-row justify-content-left mt-2'>
                <div className='mx-sm-2'>
                  <FaEnvelope className='reach-us-icons' />
                  <p className=' mt-sm-0 mt-2' style={{ opacity: '1' }}>
                    <Link
                      className='footer-link'
                      to='mailto:amruthbuildproducts@gmail.com'
                      title='Drop an Email'
                      style={{ fontSize: '13px' }}
                    >
                      amruthbuildproducts@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className='d-sm-flex flex-row justify-content-left mt-3'>
                <div className='mx-sm-2'>
                  <FaPhoneAlt className='reach-us-icons' />
                  <p style={{ opacity: '1' }}>
                    <Link
                      to='tel:+919611782840'
                      className='footer-link mt-2'
                      title='Call Us'
                      style={{ fontSize: '15px' }}
                    >
                      9611782840
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center d-sm-flex justify-content-center align-items-center  d-none'>
          <a className='Footer-ScrollToTop' href='/' title='scroll to top'>
            <AiOutlineArrowUp size={20} />
          </a>
        </div>
      </footer>

      <hr></hr>
      <div>
        <div className='' style={{ fontFamily: 'times-roman' }}>
          <p className='footer-text'>
            &copy; 2023 AMRUTH BUILD PRODUCTS, ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

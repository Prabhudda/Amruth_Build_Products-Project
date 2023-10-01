import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Logo from '..//..//assets/logo.jpg';
import LogoRound from '..//..//assets/round.jpg';

import '../Navbar/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.section``;
const NavbarHeader = styled.div`
  @media (max-width: 550px) {
    justify-content: space-around !important;
  }
`;
const Nav = styled.nav``;
const NavUl = styled.ul`
  padding-left: 0px;
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #f0f0f0;
    overflow: hidden;
    text-align: center;
    line-height: 40px;
    transition: height 0.6s ease;

    ${(props) =>
      props.$isopen &&
      css`
        height: 100vh;
      `}
  }
`;

const NavLi = styled.li`
  display: inline-block;
  list-style-type: none;
  margin: 0 10px;

  @media (max-width: 992px) {
    .li {
      background-color: #fff;
      line-height: 50px;
      width: 100%;
      text-align: center;
    }
  }
`;

function Navbar() {
  const [isopen, setisopen] = useState();
  const handleToggle = () => {
    setisopen(!isopen);
  };

  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
    <div className='position-relative'>
      <NavbarContainer
        className={`${
          scroll ? 'after-scroll' : 'before-scroll'
        } navbar fixed-top navbar-expand-lg navbar-container `}
      >
        <NavbarHeader className='container-fluid d-flex justify-content-between align-items-center mx-md-4 px-0'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <Link
                className='navbar-left  '
                to='/'
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={Logo}
                  className='mx-sm-2 mx-1 logo'
                  alt='logo'
                  loading='lazy'
                />
              </Link>
            </div>
            <span className='company-text px-sm-2 px-0  '>
              Amruth Build Products
            </span>
          </div>

          <Nav className='px-sm-3 px-1'>
            <div className='text-center '>
              <NavUl
                className='navUl m-0 d-flex justify-content-center align-items-center'
                $isopen={isopen}
              >
                {isopen && (
                  <img
                    src={LogoRound}
                    className='LogoRound d-lg-none '
                    alt='logo'
                    loading='lazy'
                  />
                )}
                <NavLi
                  className='li li-link d-block d-sm-inline-block'
                  onClick={() => setisopen(!isopen)}
                >
                  <Link
                    className={
                      location.pathname === '/' ? 'active' : 'navbar-links'
                    }
                    to='/'
                  >
                    Home
                  </Link>
                </NavLi>
                <NavLi
                  className='li li-link d-block d-sm-inline-block'
                  onClick={() => setisopen(!isopen)}
                >
                  <Link
                    className={
                      location.pathname === '/about' ? 'active' : 'navbar-links'
                    }
                    to='/about'
                  >
                    About
                  </Link>
                </NavLi>
                <NavLi
                  className='li li-link d-block d-sm-inline-block'
                  onClick={() => setisopen(!isopen)}
                >
                  <Link
                    className={
                      location.pathname === '/products'
                        ? 'active'
                        : 'navbar-links'
                    }
                    to='/products'
                  >
                    Products
                  </Link>
                </NavLi>
                <NavLi
                  className='li li-link d-block d-sm-inline-block'
                  onClick={() => setisopen(!isopen)}
                >
                  <Link
                    className={
                      location.pathname === '/projects'
                        ? 'active'
                        : 'navbar-links'
                    }
                    to='/projects'
                  >
                    Projects
                  </Link>
                </NavLi>
                {/* 
                <NavLi
                  className='li li-link d-block d-sm-inline-block'
                  onClick={() => setisopen(!isopen)}
                >
                  <Link
                    className={
                      location.pathname === '/team' ? 'active' : 'navbar-links'
                    }
                    to='/team'
                  >
                    Team
                  </Link>
                </NavLi>
                */}
                <NavLi
                  className='li li-link d-block d-sm-inline-block'
                  onClick={() => setisopen(!isopen)}
                >
                  <Link
                    className={
                      location.pathname === '/services'
                        ? 'active'
                        : 'navbar-links'
                    }
                    to='/services'
                  >
                    Services
                  </Link>
                </NavLi>
                <NavLi
                  className='li d-block d-sm-inline-block'
                  onClick={() => setisopen(!isopen)}
                >
                  <Link className='btn btn-outline-primary' to='/contact'>
                    Contact Us
                  </Link>
                </NavLi>
              </NavUl>
            </div>
            <button
              className='btn btn-outline-primary btn-sm d-lg-none'
              onClick={handleToggle}
            >
              {isopen ? <FaTimes /> : <FaBars />}
            </button>
          </Nav>
        </NavbarHeader>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;

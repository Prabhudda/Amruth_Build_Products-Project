import styled from 'styled-components';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home_Page/Home';
import About from './Pages/About/About';
import Products from './Pages/Product/Products';
import Services from './Pages/Service_Page/Services';
import Contact from './Pages/Contact/Contact';
import ProjectDetails from './Pages/Projects_Page/ProjectDetails';

// import Team from './Pages/Team/Team';
import ScrollToTop from '../src/Components/ScrollToTop';
import Footer from '../src/Components/Footer/Footer';
import Whatsapp from './Components/Whatsapp/Whatsapp';
import Projects from './Pages/Projects_Page/Projects';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Admin from './adminPage/Admin';
import Loader from '../src/Pages/Loader/Loader';
import { useEffect, useState } from 'react';

AOS.init();
const MainContainer = styled.section``;

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainContainer className=''>
      <Router>
        {load ? (
          <Loader />
        ) : (
          <div>
            <Navbar />
            <Whatsapp />
            <ScrollToTop />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/products' element={<Products />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/project/:id' element={<ProjectDetails />} />
              <Route path='/admin' element={<Admin />} />

              {/*<Route path='/team' element={<Team />} /> */}
            </Routes>
            <Footer />
          </div>
        )}
      </Router>
    </MainContainer>
  );
}

export default App;

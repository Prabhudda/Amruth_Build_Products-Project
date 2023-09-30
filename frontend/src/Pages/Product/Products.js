import React from 'react';
import SolidBlock from '../..//assets/solidBlock.png';
import PaverBlock from '../..//assets/paver-blocks.jpeg';
import KerbStones from '../..//assets/ks.jpg';
import PrecastCompoundWalls from '../..//assets/pcw.jpg';
import Cement from '../..//assets/Cement.jpg';
import TMTSteel from '../..//assets/steel.jpg';
import P_Sand from '../..//assets/p-sand.png';
import M_Sand from '../..//assets/m-sand.jpg';
import Jally from '../..//assets/jally.jpg';
import Dust from '../..//assets/dust.jpg';

import '../Product/Products.css';

function Products() {
  return (
    <div className='container-fluid p-0 products-main-box'>
      <div className='position-relative serivesBgImg '>
        <div className='service-img-overlay d-flex justify-content-center align-items-center'>
          <h1 className='text-light text-center products-main-title'>
            Quality Manufacturing Materials
          </h1>
        </div>
      </div>
      <div className='container mt-5'>
        <h3 className='text-center products-main-text'>Our Products</h3>
        <div
          className='row d-flex justify-content-between rounded align-items-center mt-5 p-sm-5 p-1'
          style={{ backgroundColor: '#EEEEEE' }}
        >
          <div className='col-lg-5 col-12'>
            <img
              className='img-fluid'
              src={SolidBlock}
              loading='lazy'
              alt=''
              style={{ width: '100%' }}
            />
          </div>
          <div className=' col-lg-7 col-12 my-md-5 my-3  p-sm-5 px-4'>
            <h5 className='products-sub-text py-sm-2 p-0 py-2'>Solid Blocks</h5>
            <p>
              Engineered for strength using premium materials. Exceptional
              load-bearing, excellent insulation, and soundproofing. Ideal for
              robust structures. Choose from various sizes to match your needs.
            </p>
          </div>
          <div
            className='my-md-5 my-1 px-4'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='pb-5'>
              <div>
                <h4 className='products-advantage-title'>
                  Advantages of Solid Blocks
                </h4>
              </div>
              <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Durable Strength</h5>
                  <li>
                    Our solid blocks, crafted from premium cement and
                    aggregates, offer exceptional load-bearing capacity,
                    ensuring lasting durability.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Proven Performance</h5>
                  <li>
                    Trusted by diverse projects, our solid blocks guarantee
                    reliable results for robust walls and structures. this is
                    features are advantages
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Versatile Sizing</h5>
                  <li>
                    Choose from a range of sizes to match your project needs,
                    with easy installation and aesthetic appeal.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>
                    Cost-Effective & Eco-Friendly
                  </h5>
                  <li>
                    Reduce maintenance costs and energy expenses while embracing
                    environmentally conscious construction.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='row d-flex justify-content-center align-items-center my-sm-5 my-4 p-sm-5 rounded p-1'
          style={{ backgroundColor: '#F8F0E5' }}
        >
          <div className='col-lg-7 col-12 my-md-5 my-5 px-4'>
            <h5 className='products-sub-text'>Paver Blocks</h5>
            <p>
              Versatile and durable concrete pavers for stunning pavements.
              Crafted from cement, sand, aggregates, and pigments, they offer
              creative design options. Interlocking ensures stability and even
              load distribution. Ideal for driveways, walkways, patios, and
              more.
            </p>
          </div>
          <div className='col-lg-5 col-12'>
            <img
              className='img-fluid'
              src={PaverBlock}
              loading='lazy'
              alt=''
              style={{ width: '100%' }}
            />
          </div>
          <div
            className=' my-md-5 my-5 px-4'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div>
              <div>
                <h4 className='products-advantage-title'>
                  Advantages of Paver Blocks
                </h4>
              </div>
              <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Durability & Versatility</h5>
                  <li>
                    Paver blocks offer strong, long-lasting surfaces and come in
                    various sizes, shapes, and colors for creative design
                    options.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Interlocking Stability</h5>
                  <li>
                    The interlocking system ensures stability, even under heavy
                    loads, and simplifies maintenance by allowing individual
                    block replacement.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Aesthetic Appeal</h5>
                  <li>
                    Paver blocks enhance outdoor spaces with customizable
                    patterns, adding visual charm to driveways, walkways, and
                    patios.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Quick Installation</h5>
                  <li>
                    The interlocking system streamlines installation,
                    potentially reducing project timelines.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='row d-flex justify-content-center align-items-center p-sm-5 p-1 mt-5 rounded'
          style={{ backgroundColor: '#EEEEEE' }}
        >
          <div className='col-lg-5 col-12'>
            <img
              className='img-fluid'
              src={KerbStones}
              loading='lazy'
              alt=''
              style={{ width: '100%' }}
            />
          </div>
          <div className='col-lg-7 col-12 my-md-5 my-5 p-sm-5 px-4 '>
            <h5 className='products-sub-text py-sm-3 p-0'>Kerb Stones</h5>
            <p>
              Vital for road and pavement projects, they guide traffic and curb
              erosion. Concrete or natural stone options in various profiles and
              sizes. Balancing aesthetics with functionality for drainage and
              pedestrian safety, enhancing streetscapes.
            </p>
          </div>
          <div
            className='my-md-5 my-2 px-4'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div>
              <div>
                <h4 className='products-advantage-title'>
                  Advantages of Kerb Stones
                </h4>
              </div>
              <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Traffic Guidance</h5>
                  <li>
                    Kerb stones direct traffic flow, ensuring safe and organized
                    movement on roads and pavements.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Material Options</h5>
                  <li>
                    Kerb stones offer versatility with choices of concrete or
                    natural stone, accommodating diverse design preferences.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Profile Variety</h5>
                  <li>
                    Available in multiple profiles and sizes, allowing
                    customization for specific project requirements.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Aesthetically Pleasing</h5>
                  <li>
                    Enhance streetscapes with visually appealing elements that
                    complement urban landscapes.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='row d-flex justify-content-center align-items-center rounded my-sm-5 my-5 p-sm-5 p-1'
          style={{ backgroundColor: '#F8F0E5' }}
        >
          <div className='col-lg-7 col-12 my-md-5 my-5 px-4'>
            <h5 className='products-sub-text'>Precast Compound Walls </h5>
            <p>
              Pre-manufactured panels assembled on-site for property boundaries.
              Concrete cast in molds, replicating brick or stone. Fast,
              cost-effective, and durable. Ideal for residential, industrial,
              and commercial spaces.
            </p>
          </div>
          <div className='col-lg-5 col-12'>
            <img
              className='img-fluid'
              loading='lazy'
              src={PrecastCompoundWalls}
              alt=''
              style={{ width: '100%' }}
            />
          </div>
          <div
            className='my-5 my-md-5 px-4'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div>
              <div>
                <h4 className='products-advantage-title'>
                  Advantages of Precast Compound Walls
                </h4>
              </div>
              <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Rapid On-Site Assembly</h5>
                  <li>
                    Pre-manufactured panels allow for swift on-site assembly,
                    reducing construction time significantly.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Cost-Effectiveness</h5>
                  <li>
                    The streamlined manufacturing process and efficient
                    installation contribute to lower overall project costs.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Authentic Aesthetics</h5>
                  <li>
                    These walls can replicate the appearance of traditional
                    brick or stone walls, adding a timeless charm to the
                    property.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Versatile Application:</h5>
                  <li>
                    Ideal for residential complexes, industrial compounds, and
                    commercial properties, providing sturdy and appealing
                    boundary solutions
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-0' id='construction-materials'></div>
      <div className='position-relative container-fluid px-0'>
        <div className='p-0' id='construction-materials2'></div>
        <div className='position-relative serivesBgImg '>
          <div className='service-img-overlay d-flex justify-content-center align-items-center'>
            <h1 className='text-light text-center products-main-title'>
              Simplify Your Construction Projects with Our Premium Services
            </h1>
          </div>
        </div>
        <div className='container mt-5'>
          <h3 className='text-center products-main-text'>
            Our Construction Materials
          </h3>
          <div
            className='row d-flex justify-content-between rounded align-items-center mt-5 p-sm-5 p-1'
            style={{ backgroundColor: '#F9FBE7' }}
          >
            <div className='col-lg-5 col-12'>
              <img
                className='img-fluid'
                loading='lazy'
                src={Cement}
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <div className='col-lg-7 col-12 my-md-5 my-4 p-sm-5 px-4 '>
              <h5 className='products-sub-text py-sm-3 p-0'>Cement</h5>
              <p>
                The cornerstone of durability and strength in construction. Our
                premium selection guarantees longevity and stability. Explore a
                variety of options sourced from trusted manufacturers,
                prioritizing quality and reliability for your projects.
              </p>
            </div>
            <div
              className='my-2 my-md-5 px-sm-4 px-4'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div>
                <h3 className='products-advantage-title'>
                  Benefits of Our Cement Supply
                </h3>
              </div>
              <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Trusted Brands</h5>
                  <li>
                    We partner with renowned cement producers to bring you
                    top-quality options.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Versatile Applications</h5>
                  <li>
                    Our cement is suitable for a wide range of construction
                    needs, from foundations to finishing touches.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Enhanced Performance</h5>
                  <li>
                    Experience exceptional workability, strength, and durability
                    in every mix.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Expert Advice</h5>
                  <li>
                    Our team is ready to assist you in selecting the ideal
                    cement type for your specific project requirements.
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div
            className='row d-flex justify-content-between align-items-center mt-5 mb-5 p-sm-5 p-1 rounded'
            style={{ backgroundColor: '#ECF2FF' }}
          >
            <div className='col-lg-7 col-12 my-md-5 my-4 px-4 '>
              <h5 className='products-sub-text py-sm-3 p-0'>TMT Steel</h5>
              <p>
                As a dedicated service provider, we offer comprehensive TMT
                steel solutions that fortify your construction projects. Our
                expertise lies in sourcing and delivering premium TMT bars,
                enhancing the structural resilience of your creations.
              </p>
            </div>
            <div className='col-lg-5 col-12'>
              <img
                className='img-fluid'
                loading='lazy'
                src={TMTSteel}
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <div
              className='my-4 my-sm-5 px-4'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div>
                <h3 className='products-advantage-title'>
                  Why Choose Our TMT Steel Services
                </h3>
              </div>
              <div className='row d-flex justify-content-between align-items-center pb-3'>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Superior Strength</h5>
                  <li>
                    Our TMT bars offer exceptional tensile strength, ensuring
                    the structural integrity of your project.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Corrosion Resistance</h5>
                  <li>
                    Built to resist corrosion, our TMT steel guarantees
                    longevity and stability, even in harsh environments.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Seismic Safety</h5>
                  <li>
                    With enhanced ductility, our TMT bars can absorb seismic
                    forces, making your construction more resilient to
                    earthquakes.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Expert Guidance</h5>
                  <li>
                    Our team of professionals is ready to assist you in
                    selecting the right TMT steel for your specific needs.
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div
            className='row d-flex justify-content-between align-items-center mt-sm-5 mt-3 flex-lg-row flex-column-reverse p-sm-5 p-1 rounded'
            style={{ backgroundColor: '#F8F0E5' }}
          >
            <div className='col-lg-5 col-12'>
              <img
                className='img-fluid'
                loading='lazy'
                src={P_Sand}
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <div className='col-lg-7 col-12 my-md-5 my-3 p-sm-5 px-4 '>
              <h5 className='products-sub-text py-sm-3 p-0 mt-sm-0 mt-3'>
                P Sand
              </h5>
              <p>
                Experience the pinnacle of plastering with our premium P Sand
                services. We offer a refined selection of Plastering Sand,
                meticulously curated to ensure flawless finishes for your
                construction projects.
              </p>
            </div>
          </div>
          <div
            className='row d-flex justify-content-between align-items-center mt-5 p-sm-5 p-1 rounded'
            style={{ backgroundColor: '#EEEEEE' }}
          >
            <div className='col-lg-7 col-12 my-md-5 my-3 px-4'>
              <h5 className='products-sub-text py-sm-3 p-0 mt-sm-0 mt-3'>
                M Sand
              </h5>
              <p>
                Discover the pinnacle of construction sand with our premium M
                Sand services. Our meticulously sourced Manufactured Sand is
                designed to empower your projects with enhanced strength and
                durability.
              </p>
            </div>
            <div className='col-lg-5 col-12 p-sm-5 px-3'>
              <img
                className='img-fluid'
                src={M_Sand}
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <div className=''>
              <div
                className='my-5 my-md-5 px-2'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div>
                  <h3 className='products-advantage-title mt-3'>
                    M Sand and P Sand Services
                  </h3>
                </div>
                <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                    <h5 className='content-sub-text'>Consistent Quality</h5>
                    <li>
                      Benefit from uniform particle sizes for reliable
                      performance
                    </li>
                  </div>
                  <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                    <h5 className='content-sub-text'>Structural Strength</h5>
                    <li>
                      Harness robust bonding properties for durable and
                      resilient constructions.
                    </li>
                  </div>
                  <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                    <h5 className='content-sub-text'>Versatility Unleashed</h5>
                    <li>
                      From concrete to polished finishes, our sands adapt to
                      diverse needs.
                    </li>
                  </div>
                  <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                    <h5 className='content-sub-text'>Expert Consultation</h5>
                    <li>
                      Our skilled team guides you in selecting the ideal sand
                      mix for your project.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='row d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center mt-sm-5 mt-5 mb-5 p-sm-5 p-3'
            style={{ backgroundColor: '#ECF2FF' }}
          >
            <div className='col-lg-5 col-12'>
              <img
                className='img-fluid'
                src={Jally}
                loading='lazy'
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <div className='col-lg-7 col-12 my-md-5 my-2 p-sm-5 px-3 '>
              <h5 className='products-sub-text py-sm-3 p-0 mt-sm-0 mt-3'>
                Jally
              </h5>
              <p>
                we specialize in providing reliable and top-quality Jally
                materials that serve as the cornerstone of sturdy and durable
                construction. Our Jally services are tailored to meet your
                specific needs, ensuring the structural integrity and stability
                of your projects.
              </p>
            </div>
          </div>
          <div
            className='row d-flex justify-content-between align-items-center my-md-5 my-4 p-sm-5 p-1'
            style={{ backgroundColor: '#EEEEEE' }}
          >
            <div className='col-lg-7 col-12 my-md-5 my-2 px-4'>
              <h5 className='products-sub-text py-sm-3 p-0 mt-sm-0 mt-3'>
                Dust
              </h5>
              <p>
                we offer specialized Dust services that contribute to the
                precision and flawless finishes of your construction projects.
                Our Dust materials are designed to achieve seamless adjustments
                and create smooth surfaces, enhancing the overall aesthetics of
                your structures.
              </p>
            </div>
            <div className='col-lg-5 col-12'>
              <img
                className='img-fluid'
                src={Dust}
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <div
              className='my-5 my-md-5 px-4'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div>
                <h3 className='products-advantage-title'>
                  Our Jally and Dust Services
                </h3>
              </div>
              <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Solid Foundations</h5>
                  <li>
                    Build confidently with reliable Jally, ensuring stable and
                    robust base layers.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Precise Adjustments:</h5>
                  <li>
                    Achieve accuracy using versatile Dust materials for
                    fine-tuning, leveling, and filling.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Expert Application</h5>
                  <li>
                    Rely on our experienced team for guidance on both Jally and
                    Dust utilization.
                  </li>
                </div>
                <div className='col-md-6 col-12 mt-sm-5 mt-4'>
                  <h5 className='content-sub-text'>Complete Solutions</h5>
                  <li>
                    From strong bases to smooth finishes, our comprehensive
                    services transform your construction projects.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

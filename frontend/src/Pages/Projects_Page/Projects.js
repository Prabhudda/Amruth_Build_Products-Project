import React, { useState } from 'react';
import Road1 from '..//..//assets/road-1.jpg';
import Road2 from '..//..//assets/road-2.jpg';
import Road3 from '..//..//assets/road-3.jpg';
import Road4 from '..//..//assets/road-4.jpg';

import wareHouse1 from '..//..//assets/warehouse1.jpg';
import wareHouse2 from '..//..//assets/warehouse2.jpg';
import wareHouse3 from '..//..//assets/warehouse3.jpg';
import wareHouse4 from '..//..//assets/warehouse4.jpg';
import '../Projects_Page/Projects.css';
const projectsData = [
  {
    id: 1,
    title: 'Asphalt Road Project :',
    status: 'completed',
    description1:
      'Our dedicated civil team recently achieved a significant milestone by completing a comprehensive road construction project that has transformed local infrastructure and connectivity.',
    description2:
      'This project, undertaken with unwavering commitment and technical expertise, has not only improved the physical landscape but also enhanced the lives of residents and travelers within the community.',
    startDate: '2022-05-10',
    endDate: '2022-09-30',
    img1: `${Road1}`,
    img2: `${Road2}`,
    img3: `${Road3}`,
    img4: `${Road4}`,
  },
  {
    id: 2,
    title: 'Warehouse Construction :',
    status: 'completed',
    description1:
      'We are thrilled to announce the successful completion of Warehouse Project, a remarkable warehouse construction endeavor that underscores our unwavering commitment to excellence and innovation in the construction industry.',
    description2:
      'We turn your visions into reality, and Warehouse Project is a testament to our dedication.',
    startDate: '2022-05-10',
    endDate: '2022-09-30',
    img1: `${wareHouse1}`,
    img2: `${wareHouse2}`,
    img3: `${wareHouse3}`,
    img4: `${wareHouse4}`,
  },
];

const Projects = () => {
  const [activeTab] = useState('ongoing');
  const completedProjects = projectsData.filter(
    (project) => project.status === 'completed'
  );
  return (
    <div className='container-fluid p-0 project-main-container'>
      <div className='position-relative serivesBgImg '>
        <div className='service-img-overlay d-flex justify-content-center align-items-center'>
          <h1 className='text-light text-center products-main-title'>
            Our Projects
          </h1>
        </div>
      </div>
      <div className='container d-flex justify-content-center align-items-center'></div>
      <div className='my-5 '>
        {activeTab === 'ongoing' && (
          <div className=''>
            <div className='container mt-5 '>
              <h2
                className='projects-main-text'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Completed Projects
              </h2>
              <div className=''>
                {completedProjects.map((project) => (
                  <div className='my-sm-0 my-2' key={project.id}>
                    <div
                      className='p-sm-0 p-3'
                      data-aos='fade-up'
                      data-aos-duration='1000'
                    >
                      <h4 className='mt-sm-5 mt-3 projects-sub-text'>
                        {project.title}
                      </h4>
                      <p className='mt-1'>{project.description1}</p>
                      <p className='mt-1'>{project.description2}</p>
                      <p className='mt-3 fw-bold'>
                        Start Date: {project.startDate}
                      </p>
                      <p className='mt-3 fw-bold'>
                        End Date: {project.endDate}
                      </p>
                    </div>
                    <div className='row p-sm-0 p-3 d-flex justify-content-center align-items-center'>
                      <div
                        className='col-md-4 col-12 mt-3'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                      >
                        <img
                          className='grayimg'
                          loading='lazy'
                          src={project.img1}
                          alt=''
                          style={{ width: '100%' }}
                        />
                      </div>
                      <div
                        className='col-md-4 col-12 mt-3'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                      >
                        <img
                          className='grayimg'
                          src={project.img2}
                          loading='lazy'
                          alt=''
                          style={{ width: '100%' }}
                        />
                      </div>
                      <div
                        className='col-md-4 col-12 mt-3'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                      >
                        <img
                          className='grayimg'
                          loading='lazy'
                          src={project.img3}
                          alt=''
                          style={{ width: '100%' }}
                        />
                      </div>
                      <div
                        className='col-md-4 col-12 mt-3'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                      >
                        <img
                          className='grayimg'
                          loading='lazy'
                          src={project.img4}
                          alt=''
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

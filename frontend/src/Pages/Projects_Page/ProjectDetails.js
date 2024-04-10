import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectData';
import { Link } from 'react-router-dom';
const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='container projectDetailsBox' key={project.id}>
      <div className='my-sm-5 my-3 row p-sm-0 p-3 d-flex justify-content-center align-items-center'>
        <h4 className='fw-bold text-center'>{project.title}</h4>
        <span className='mt-3 d-md-flex d-none fw-bold'>
          <Link to='/projects' className='text-decoration-none'>
            projects
          </Link>
          {' > '}
          {project.title}
        </span>
        <p className='mt-3'>{project.description1}</p>
        <p>{project.description2}</p>
        <div className='d-sm-flex justify-content-between align-items-center'>
          <p>Start Date: {project.startDate}</p>
          <p>End Date: {project.endDate}</p>
        </div>

        {project.image &&
          project.image.map((image, i) => (
            <div
              className='col-md-4 col-12 mt-3'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                className='grayImg'
                key={i}
                src={image}
                alt={project.title}
                style={{ maxWidth: '100%' }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

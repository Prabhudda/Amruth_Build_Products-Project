import React from 'react';

function ErrorPage() {
  return (
    <div
      className='container'
      style={{ marginTop: '150px', marginBottom: '200px' }}
    >
      <div className='row'>
        <div className='col-md-6 offset-md-3 text-center mt-5'>
          <h2 className='display-4'>404 - Page Not Found</h2>
          <p className='lead'>The page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;

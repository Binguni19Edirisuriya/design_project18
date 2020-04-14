import React from 'react';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'> Ready-4U</h1>
          <p className='lead'>
            Get your Handy Service person to your doorstep with few clicks
          </p>
          <div className='buttons'>
            <a href='register.html' className='btn btn-dark'>
              Sign Up
            </a>
            <a href='login.html' className='btn btn-light'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;

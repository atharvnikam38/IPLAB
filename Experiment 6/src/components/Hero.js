import React from 'react';
import heroimage from './images/hero img.avif';

function Hero() {
  return (
    <section className="py-3 py-lg-5 py-xl-8">
      <div className="container overflow-hidden">
        <div className="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <h3>HI THERE 👋 I'm</h3>
            <h2 className="display-3 fw-bold mb-3">ATHARV NIKAM</h2>
            <h3>FRONT END DEVELOPER</h3>
            <p className="fs-4 mb-5">Crafting sleek and responsive web experiences that blend creativity with functionality.</p>
            <div className="d-grid gap-2 d-sm-flex">
              <button className="btn btn-primary rounded-pill" onClick={() => alert('Hire me clicked!')}>HIRE ME</button>
              <button className="btn btn-outline-primary rounded-pill">GET CV</button>
            </div>
          </div>
          <div className="col-12 col-lg-5 text-center">
            <img className="img-fluid" src={heroimage} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

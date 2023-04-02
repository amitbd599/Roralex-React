import React from "react";

const NewsLetterThree = () => {
  return (
    <>
      {/* News Letter version three Start */}
      <section
        className='newsletter-section-version-three  py-80'
        style={{
          backgroundImage: "url('assets/img/bg-overlay/bg-overlay-6.png')",
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='right-side'>
                <div className='heading-text'>
                  <h3>Everything you wish to know</h3>
                  <h2>
                    We also take great pains <br /> to{" "}
                    <span className='theme-color'>ensure</span> that our
                    quality.
                  </h2>
                </div>
                <div className='profile-hold'>
                  <div className='img-file'>
                    <img src='./assets/img/client/profile-7.png' alt='' />
                  </div>
                  <div className='text-file'>
                    <h3>William B. Hunt</h3>
                    <p>Building construction Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='left-side'>
                <div className='input-section'>
                  <input type='text' placeholder='Email Address' />
                  <button className='btn-shape-normal-outline'>
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Letter version three End */}
    </>
  );
};

export default NewsLetterThree;

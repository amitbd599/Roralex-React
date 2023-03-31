import React from "react";

const NewsLetterOne = () => {
  return (
    <>
      {/* News Letter version one Start */}
      <section
        className='newsletter-section-version-one bg-white py-80 '
        style={{
          backgroundImage: 'url("assets/img/bg-overlay/bg-overlay-2.png")',
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='wrapper'>
                <h2>
                  Newsletter <span className='theme-color'>Integration</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='input'>
                  <input type='text' placeholder='Email Address...' />
                </div>
                <div className='btn-section'>
                  <button className='btn-shape-normal-outline'>
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Letter version one End */}
    </>
  );
};

export default NewsLetterOne;

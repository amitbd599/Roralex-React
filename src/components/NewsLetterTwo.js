import React from "react";

const NewsLetterTwo = () => {
  return (
    <>
      {/* News Letter version two Start */}
      <section
        className='newsletter-section-version-two  py-80'
        style={{
          backgroundImage: "url('assets/img/bg-overlay/bg-overlay-4.png')",
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='wrapper'>
                <h2>
                  Sign up for our{" "}
                  <span className='theme-color'>newsletter</span> to stay up to
                  date with tech news!
                </h2>
                <p>
                  Plain concrete, also known as plain cement concrete or PCC, is
                  most commonly used for paving and flooring. Made from a mix of
                  cement, aggregate, and water the different types of aggregate
                  and ratio of materials used will give different types of
                  cement with slightly different properties.
                </p>
                <div className='input-section'>
                  <input type='text' placeholder='Email Address' />
                  <button className='btn-shape-normal-outline'>
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='img-file'>
                <img src='./assets/img/worker/bg-worker-7.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Letter version two End */}
    </>
  );
};

export default NewsLetterTwo;

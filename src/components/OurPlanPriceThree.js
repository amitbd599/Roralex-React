import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const OurPlanPriceThree = () => {
  return (
    <>
      {/* Our Plan Price  version three Start */}
      <section className='price-section-version-three bg-white pt-80 pb-100'>
        {/* Header Intro Version Three */}
        <div className='header-intro-version-three'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>Our Plan Price</h3>
                    <h2>
                      Purchase Our Service <br /> Most{" "}
                      <span className='theme-color'>Unique</span> Price
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Price Card Items */}
        <div className='price-card-version-three'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper shadow'>
                  <div className='inner'>
                    <div className='icon-file'>
                      <img src='./assets/img/icons/icon-31.svg' alt='' />
                    </div>
                    <div className='heading-intro'>
                      <h2>Basic Plan</h2>
                      <h3>
                        $ 330.96 <span>/Month</span>
                      </h3>
                    </div>
                    <div className='inner-list'>
                      <ul>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>Evidence construction of clay and wood.</span>
                        </li>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>Heavier timber buildings also appeared.</span>
                        </li>
                        <li>
                          <FaTimes className='fa-xmark' />
                          <span>The packed clay walls of earlier times.</span>
                        </li>
                        <li>
                          <FaTimes className='fa-xmark' />
                          <span>Bricks were made from mud and straw.</span>
                        </li>
                        <li>
                          <FaTimes className='fa-xmark' />
                          <span>Less effort was thus required to fell.</span>
                        </li>
                        <li>
                          <FaTimes className='fa-xmark' />
                          <span>Against this drab background of endless.</span>
                        </li>
                      </ul>
                      <div className='btn-section'>
                        <button className='btn-shape-normal-outline'>
                          <span>Purchase</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper shadow'>
                  <div className='inner'>
                    <div className='icon-file'>
                      <img src='./assets/img/icons/icon-31.svg' alt='' />
                    </div>
                    <div className='heading-intro'>
                      <h2>Standard Plan</h2>
                      <h3>
                        $ 830.36 <span>/Month</span>
                      </h3>
                    </div>
                    <div className='inner-list'>
                      <ul>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>Evidence construction of clay and wood.</span>
                        </li>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>Heavier timber buildings also appeared.</span>
                        </li>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>The packed clay walls of earlier times.</span>
                        </li>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>Bricks were made from mud and straw.</span>
                        </li>
                        <li>
                          <FaTimes className='fa-xmark' />
                          <span>Less effort was thus required to fell.</span>
                        </li>
                        <li>
                          <FaTimes className='fa-xmark' />
                          <span>Against this drab background of endless.</span>
                        </li>
                      </ul>
                      <div className='btn-section'>
                        <button className='btn-shape-normal-outline'>
                          <span>Purchase</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper shadow'>
                  <div className='inner'>
                    <div className='icon-file'>
                      <img src='./assets/img/icons/icon-31.svg' alt='' />
                    </div>
                    <div className='heading-intro'>
                      <h2>Professional</h2>
                      <h3>
                        $ 3630.76 <span>/Month</span>
                      </h3>
                    </div>
                    <div className='inner-list'>
                      <ul>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>Evidence construction of clay and wood.</span>
                        </li>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>Heavier timber buildings also appeared.</span>
                        </li>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>The packed clay walls of earlier times.</span>
                        </li>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>Bricks were made from mud and straw.</span>
                        </li>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>Less effort was thus required to fell.</span>
                        </li>
                        <li>
                          <FaCheck className='fa-check' />
                          <span>Against this background of endless.</span>
                        </li>
                      </ul>
                      <div className='btn-section'>
                        <button className='btn-shape-normal-outline'>
                          <span>Purchase</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Plan Price  version three End */}
    </>
  );
};

export default OurPlanPriceThree;

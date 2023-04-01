import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceListTwo = () => {
  return (
    <>
      {/* Service List Section version two start */}
      <section className='serviceList-section-version-two bg-gray pt-80 py-100 '>
        {/* Header Intro Version Two */}
        <div className='header-intro-version-two'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>We Can Provide That</h3>
                    <h2>SERVICES LIST</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service List Card Items */}
        <div className='inner-card-items-slider'>
          <div className='container'>
            <div className='row'>
              <div className='swiper swiper-container serviceList-version-two'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='inner-wrapper bg-theme'>
                      <div className='icon-file'>
                        <img
                          className='img-fluid'
                          src='./assets/img/icons/icon-24.svg'
                          alt=''
                        />
                      </div>
                      <div className='intro'>
                        <h2>Construction</h2>
                        <p>
                          Building construction means any physical activity on
                          the site involved in the erection
                        </p>
                      </div>
                      <div className='btn-section'>
                        <a href='services-details.html'>
                          <span className='btn-shape-normal-outline'>
                            <span>More Info</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='inner-wrapper bg-dark'>
                      <div className='icon-file'>
                        <img
                          className='img-fluid'
                          src='./assets/img/icons/icon-25.svg'
                          alt=''
                        />
                      </div>
                      <div className='intro'>
                        <h2>Interior</h2>
                        <p>
                          Building construction means any physical activity on
                          the site involved in the erection
                        </p>
                      </div>
                      <div className='btn-section'>
                        <a href='services-details.html'>
                          <span className='btn-shape-normal-outline'>
                            <span>More Info</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='inner-wrapper bg-theme'>
                      <div className='icon-file'>
                        <img
                          className='img-fluid'
                          src='./assets/img/icons/icon-26.svg'
                          alt=''
                        />
                      </div>
                      <div className='intro'>
                        <h2>Automobile</h2>
                        <p>
                          Building construction means any physical activity on
                          the site involved in the erection
                        </p>
                      </div>
                      <div className='btn-section'>
                        <a href='services-details.html'>
                          <span className='btn-shape-normal-outline'>
                            <span>More Info</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='inner-wrapper bg-dark'>
                      <div className='icon-file'>
                        <img
                          className='img-fluid'
                          src='./assets/img/icons/icon-27.svg'
                          alt=''
                        />
                      </div>
                      <div className='intro'>
                        <h2>Superstructure</h2>
                        <p>
                          Building construction means any physical activity on
                          the site involved in the erection
                        </p>
                      </div>
                      <div className='btn-section'>
                        <a href='services-details.html'>
                          <span className='btn-shape-normal-outline'>
                            <span>More Info</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='inner-wrapper bg-theme'>
                      <div className='icon-file'>
                        <img
                          className='img-fluid'
                          src='./assets/img/icons/icon-28.svg'
                          alt=''
                        />
                      </div>
                      <div className='intro'>
                        <h2>Manufacture</h2>
                        <p>
                          Building construction means any physical activity on
                          the site involved in the erection
                        </p>
                      </div>
                      <div className='btn-section'>
                        <a href='services-details.html'>
                          <span className='btn-shape-normal-outline'>
                            <span>More Info</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='inner-wrapper bg-dark'>
                      <div className='icon-file'>
                        <img
                          className='img-fluid'
                          src='./assets/img/icons/icon-29.svg'
                          alt=''
                        />
                      </div>
                      <div className='intro'>
                        <h2>Strengthen </h2>
                        <p>
                          Building construction means any physical activity on
                          the site involved in the erection
                        </p>
                      </div>
                      <div className='btn-section'>
                        <a href='services-details.html'>
                          <span className='btn-shape-normal-outline'>
                            <span>More Info</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* If we need pagination */}
              <div className='serviceList-section-version-two-pagination' />
            </div>
          </div>
        </div>
      </section>
      {/* Service List Section version two End */}
    </>
  );
};

export default ServiceListTwo;

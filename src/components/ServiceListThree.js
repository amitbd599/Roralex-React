import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceListThree = () => {
  return (
    <>
      {/* Service List Section version three start */}
      <section className='serviceList-section-version-three bg-gray py-80 '>
        {/* Header Intro Version Three */}
        <div className='header-intro-version-three'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>SERVICES LIST</h3>
                    <h2>
                      Best <span className='theme-color'>Services</span> We
                      Offer <br /> For You!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Inner Card Items */}
        <div className='inner-card-items'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div className='wrapper'>
                  <div className='inner'>
                    <div className='count-file'>
                      <div className='hip'>
                        <h2>01</h2>
                      </div>
                    </div>
                    <div className='text-file'>
                      <h3>Development and Planning Phase</h3>
                      <p>
                        The most critical phase of a commercial construction
                        project is the development and planning stage.
                      </p>
                    </div>
                    <div className='btn-hold'>
                      <Link to='/services-details'>
                        <span>Read More</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div className='wrapper'>
                  <div className='inner'>
                    <div className='count-file'>
                      <div className='hip'>
                        <h2>02</h2>
                      </div>
                    </div>
                    <div className='text-file'>
                      <h3>Planning the budget for construction</h3>
                      <p>
                        The most critical phase of a commercial construction
                        project is the development and planning stage.
                      </p>
                    </div>
                    <div className='btn-hold'>
                      <Link to='/services-details'>
                        <span>Read More</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div className='wrapper'>
                  <div className='inner'>
                    <div className='count-file'>
                      <div className='hip'>
                        <h2>03</h2>
                      </div>
                    </div>
                    <div className='text-file'>
                      <h3>The pre-design phase development</h3>
                      <p>
                        The most critical phase of a commercial construction
                        project is the development and planning stage.
                      </p>
                    </div>
                    <div className='btn-hold'>
                      <Link to='/services-details'>
                        <span>Read More</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div className='wrapper'>
                  <div className='inner'>
                    <div className='count-file'>
                      <div className='hip'>
                        <h2>04</h2>
                      </div>
                    </div>
                    <div className='text-file'>
                      <h3>Preparation actual construction turns</h3>
                      <p>
                        The most critical phase of a commercial construction
                        project is the development and planning stage.
                      </p>
                    </div>
                    <div className='btn-hold'>
                      <Link to='/services-details'>
                        <span>Read More</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button Section */}
        <div className='btn-section text-center'>
          <Link to='/services'>
            <span className='btn-shape-normal-outline'>
              <span>More Services</span>
            </span>
          </Link>
        </div>
      </section>
      {/* Service List Section version three End */}
    </>
  );
};

export default ServiceListThree;

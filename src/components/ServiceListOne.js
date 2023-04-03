import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceListOne = () => {
  return (
    <>
      {/* Service List Section version one start */}
      <section className='serviceList-section-version-one bg-gray py-80'>
        {/* Header Intro Version One */}
        <div className='header-intro-version-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-10 col-xl-7'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>SERVICES LIST</h3>
                    <div className='shape-img'>
                      <img src='./assets/img/shape/Union-1.svg' alt='Roralex' />
                    </div>
                  </div>
                  <div className='inner-text'>
                    <h2>
                      Our Best <span className='theme-color'>Services</span>{" "}
                      that are going to provide you
                    </h2>
                    <p>
                      Building construction is the process of adding structure
                      to real property. The vast majority of building
                      construction projects are small renovations, such as
                      addition of a room, or renovation of a bathroom.
                    </p>
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
              <div className='col-lg-3 col-md-6'>
                <div className='wrapper shadow'>
                  <div className='icon-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/icons/icon-8.svg'
                      alt='Roralex'
                    />
                  </div>
                  <div className='text-file'>
                    <h3>Preparation Construction Site involved</h3>
                    <p>
                      There may be variations as every project is unique follows
                      different design and construction process.
                    </p>
                  </div>
                  <div className='btn-hold'>
                    <Link to='/services-details'>
                      <span>Read More</span> <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='wrapper shadow'>
                  <div className='icon-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/icons/icon-9.svg'
                      alt='Roralex'
                    />
                  </div>
                  <div className='text-file'>
                    <h3>Foundation Construction building project</h3>
                    <p>
                      There may be variations as every project is unique follows
                      different design and construction process.
                    </p>
                  </div>
                  <div className='btn-hold'>
                    <Link to='/services-details'>
                      <span>Read More</span> <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='wrapper shadow'>
                  <div className='icon-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/icons/icon-10.svg'
                      alt='Roralex'
                    />
                  </div>
                  <div className='text-file'>
                    <h3>Superstructure variations Construction</h3>
                    <p>
                      There may be variations as every project is unique follows
                      different design and construction process.
                    </p>
                  </div>
                  <div className='btn-hold'>
                    <Link to='/services-details'>
                      <span>Read More</span> <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='wrapper shadow'>
                  <div className='icon-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/icons/icon-11.svg'
                      alt='Roralex'
                    />
                  </div>
                  <div className='text-file'>
                    <h3>Superstructure variations Construction</h3>
                    <p>
                      There may be variations as every project is unique follows
                      different design and construction process.
                    </p>
                  </div>
                  <div className='btn-hold'>
                    <Link to='/services-details'>
                      <span>Read More</span> <FaArrowRight />
                    </Link>
                  </div>
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
      {/* Service List Section version one End */}
    </>
  );
};

export default ServiceListOne;

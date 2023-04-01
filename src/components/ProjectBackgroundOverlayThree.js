import React from "react";

const ProjectBackgroundOverlayThree = () => {
  return (
    <>
      {/* Project Background Overlay Section version three start */}
      <section
        className='projectBackgroundOverlay-version-three bg-white '
        data-background='./assets/img/bg-overlay/bg-overlay-4.png'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='wrapper'>
                <div className='main-text'>
                  <h2>
                    See why we are trusted <br />
                    the world over
                  </h2>
                </div>
                {/* Button Section */}
                <div className='btn-section text-center'>
                  <a href='services.html'>
                    <span className='btn-shape-normal-outline'>
                      <span>More Services</span>
                    </span>
                  </a>
                </div>
                {/* Hip Slider */}
                <div className='hip-slider'>
                  <div className='container'>
                    <div className='row'>
                      {/* Additional required wrapper */}
                      <div className='swiper swiper-container hip-slider-one'>
                        <div className='swiper-wrapper'>
                          {/* Slides */}
                          <div className='swiper-slide'>
                            <div className='inner-wrapper'>
                              <div className='text'>
                                <h2>Popular Destinations</h2>
                              </div>
                              <div className='list'>
                                <ul>
                                  <li>
                                    {" "}
                                    <i className='fa-solid fa-right-to-line' />
                                    <span>
                                      most commonly used for paving and
                                      flooring.
                                    </span>
                                  </li>
                                  <li>
                                    <i className='fa-solid fa-right-to-line' />{" "}
                                    <span>
                                      Made from a mix of cement, aggregate
                                      water.
                                    </span>
                                  </li>
                                  <li>
                                    <i className='fa-solid fa-right-to-line' />
                                    <span>
                                      PCC is a combination of cement aggregate.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='swiper-slide'>
                            <div className='inner-wrapper'>
                              <div className='text'>
                                <h2>History of building</h2>
                              </div>
                              <div className='list'>
                                <ul>
                                  <li>
                                    {" "}
                                    <i className='fa-solid fa-right-to-line' />
                                    <span>
                                      One is the increasing durability of
                                      materials used.
                                    </span>
                                  </li>
                                  <li>
                                    <i className='fa-solid fa-right-to-line' />
                                    <span>
                                      Another is a for buildings of ever greater
                                      height.
                                    </span>
                                  </li>
                                  <li>
                                    <i className='fa-solid fa-right-to-line' />
                                    <span>
                                      The present state of construction is
                                      complex.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='swiper-slide'>
                            <div className='inner-wrapper'>
                              <div className='text'>
                                <h2>Construction today</h2>
                              </div>
                              <div className='list'>
                                <ul>
                                  <li>
                                    {" "}
                                    <i className='fa-solid fa-right-to-line' />
                                    <span>
                                      A tent illustrates the elements of
                                      environmental.
                                    </span>
                                  </li>
                                  <li>
                                    <i className='fa-solid fa-right-to-line' />{" "}
                                    <span>
                                      The membrane must be supported against the
                                      forces.
                                    </span>
                                  </li>
                                  <li>
                                    <i className='fa-solid fa-right-to-line' />
                                    <span>
                                      The tent has continued in use to the
                                      present.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* If we need pagination */}
                      <div className='hip-slider-pagination' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Background Overlay Section version three End */}
    </>
  );
};

export default ProjectBackgroundOverlayThree;

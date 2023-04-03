import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProjectBackgroundOverlayThree = () => {
  return (
    <>
      {/* Project Background Overlay Section version three start */}
      <section
        className='projectBackgroundOverlay-version-three bg-white '
        style={{
          backgroundImage: "url('assets/img/bg-overlay/bg-overlay-4.png')",
        }}
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
                  <Link to='/services'>
                    <span className='btn-shape-normal-outline'>
                      <span>More Services</span>
                    </span>
                  </Link>
                </div>
                {/* Hip Slider */}
                <div className='hip-slider'>
                  <div className='container'>
                    <div className='row'>
                      {/* Additional required wrapper */}
                      <div className='swiper swiper-container hip-slider-one'>
                        <div className='swiper-wrapper'>
                          {/* Slides */}
                          <Swiper
                            // install Swiper modules
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            speed={1000}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 6000 }}
                          >
                            <SwiperSlide>
                              {" "}
                              <div>
                                <div className='inner-wrapper'>
                                  <div className='text'>
                                    <h2>Popular Destinations</h2>
                                  </div>
                                  <div className='list'>
                                    <ul>
                                      <li>
                                        {" "}
                                        <FaAngleDoubleRight />
                                        <span>
                                          most commonly used for paving and
                                          flooring.
                                        </span>
                                      </li>
                                      <li>
                                        <FaAngleDoubleRight />{" "}
                                        <span>
                                          Made from a mix of cement, aggregate
                                          water.
                                        </span>
                                      </li>
                                      <li>
                                        <FaAngleDoubleRight />
                                        <span>
                                          PCC is a combination of cement
                                          aggregate.
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div>
                                <div className='inner-wrapper'>
                                  <div className='text'>
                                    <h2>History of building</h2>
                                  </div>
                                  <div className='list'>
                                    <ul>
                                      <li>
                                        {" "}
                                        <FaAngleDoubleRight />
                                        <span>
                                          One is the increasing durability of
                                          materials used.
                                        </span>
                                      </li>
                                      <li>
                                        <FaAngleDoubleRight />
                                        <span>
                                          Another is a for buildings of ever
                                          greater height.
                                        </span>
                                      </li>
                                      <li>
                                        <FaAngleDoubleRight />
                                        <span>
                                          The present state of construction is
                                          complex.
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div>
                                <div className='inner-wrapper'>
                                  <div className='text'>
                                    <h2>Construction today</h2>
                                  </div>
                                  <div className='list'>
                                    <ul>
                                      <li>
                                        {" "}
                                        <FaAngleDoubleRight />
                                        <span>
                                          A tent illustrates the elements of
                                          environmental.
                                        </span>
                                      </li>
                                      <li>
                                        <FaAngleDoubleRight />{" "}
                                        <span>
                                          The membrane must be supported against
                                          the forces.
                                        </span>
                                      </li>
                                      <li>
                                        <FaAngleDoubleRight />
                                        <span>
                                          The tent has continued in use to the
                                          present.
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                      {/* If we need pagination */}
                      {/* <div className='hip-slider-pagination' /> */}
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

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
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
                  <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    slidesPerGroup={2}
                    speed={1000}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000 }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                      },
                      500: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                      },
                      1200: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                      },
                      1400: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div>
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
                              Building construction means any physical activity
                              on the site involved in the erection
                            </p>
                          </div>
                          <div className='btn-section'>
                            <Link to='/services-details'>
                              <span className='btn-shape-normal-outline'>
                                <span>More Info</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
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
                              Building construction means any physical activity
                              on the site involved in the erection
                            </p>
                          </div>
                          <div className='btn-section'>
                            <Link to='/services-details'>
                              <span className='btn-shape-normal-outline'>
                                <span>More Info</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
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
                              Building construction means any physical activity
                              on the site involved in the erection
                            </p>
                          </div>
                          <div className='btn-section'>
                            <Link to='/services-details'>
                              <span className='btn-shape-normal-outline'>
                                <span>More Info</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
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
                              Building construction means any physical activity
                              on the site involved in the erection
                            </p>
                          </div>
                          <div className='btn-section'>
                            <Link to='/services-details'>
                              <span className='btn-shape-normal-outline'>
                                <span>More Info</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
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
                              Building construction means any physical activity
                              on the site involved in the erection
                            </p>
                          </div>
                          <div className='btn-section'>
                            <Link to='/services-details'>
                              <span className='btn-shape-normal-outline'>
                                <span>More Info</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
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
                              Building construction means any physical activity
                              on the site involved in the erection
                            </p>
                          </div>
                          <div className='btn-section'>
                            <Link to='/services-details'>
                              <span className='btn-shape-normal-outline'>
                                <span>More Info</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/* If we need pagination */}
              {/* <div className='serviceList-section-version-two-pagination' /> */}
            </div>
          </div>
        </div>
      </section>
      {/* Service List Section version two End */}
    </>
  );
};

export default ServiceListTwo;

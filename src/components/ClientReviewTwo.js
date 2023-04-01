import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
const ClientReviewTwo = () => {
  return (
    <>
      {/* Client Review Section version two Start */}
      <section className='client-review-version-two bg-white py-80'>
        {/* Header Intro Version Two */}
        <div className='header-intro-version-two'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>Many Satisfied Clients Say About Us</h3>
                    <h2>Client Reviews</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Client Review Slider Card */}
        <div className='slider-client-review'>
          <div className='container'>
            <div className='row'>
              {/* Additional required wrapper */}
              <div className='swiper swiper-container review-version-two'>
                <div className='swiper-wrapper'>
                  {/* Slides */}
                  <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={3}
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
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                      1400: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div>
                        <div className='inner-wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/client/profile-1.png'
                              alt=''
                            />
                          </div>
                          <div className='quta-img'>
                            <img src='./assets/img/icons/icon-30.svg' alt='' />
                          </div>
                          <div className='text'>
                            <p>
                              Builder wants to be your builder for life. Whether
                              we built your home or not, it’s not too late for
                              you to join our family.
                            </p>
                          </div>
                          <div className='name-pos'>
                            <h2>Jefferey Y. Lemke</h2>
                            <h4>Airport service agent</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <div className='inner-wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/client/profile-5.png'
                              alt=''
                            />
                          </div>
                          <div className='quta-img'>
                            <img src='./assets/img/icons/icon-30.svg' alt='' />
                          </div>
                          <div className='text'>
                            <p>
                              Builder wants to be your builder for life. Whether
                              we built your home or not, it’s not too late for
                              you to join our family.
                            </p>
                          </div>
                          <div className='name-pos'>
                            <h2>Agnes A. Miller</h2>
                            <h4>Bookmobile driver</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <div className='inner-wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/client/profile-3.png'
                              alt=''
                            />
                          </div>
                          <div className='quta-img'>
                            <img src='./assets/img/icons/icon-30.svg' alt='' />
                          </div>
                          <div className='text'>
                            <p>
                              Builder wants to be your builder for life. Whether
                              we built your home or not, it’s not too late for
                              you to join our family.
                            </p>
                          </div>
                          <div className='name-pos'>
                            <h2>Robin C. Ochoa</h2>
                            <h4>Mortgage broker</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className='inner-wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/client/profile-2.png'
                              alt=''
                            />
                          </div>
                          <div className='quta-img'>
                            <img src='./assets/img/icons/icon-30.svg' alt='' />
                          </div>
                          <div className='text'>
                            <p>
                              Builder wants to be your builder for life. Whether
                              we built your home or not, it’s not too late for
                              you to join our family.
                            </p>
                          </div>
                          <div className='name-pos'>
                            <h2>Agnes A. Miller</h2>
                            <h4>Bookmobile driver</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className='inner-wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/client/profile-4.png'
                              alt=''
                            />
                          </div>
                          <div className='quta-img'>
                            <img src='./assets/img/icons/icon-30.svg' alt='' />
                          </div>
                          <div className='text'>
                            <p>
                              Builder wants to be your builder for life. Whether
                              we built your home or not, it’s not too late for
                              you to join our family.
                            </p>
                          </div>
                          <div className='name-pos'>
                            <h2>Agnes A. Miller</h2>
                            <h4>Bookmobile driver</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/* If we need pagination */}
            </div>
          </div>
        </div>
      </section>
      {/* Client Review Section version two End */}
    </>
  );
};

export default ClientReviewTwo;

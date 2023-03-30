import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
const ClientReviewOne = () => {
  return (
    <>
      {/* Client Review Section version one Start */}
      <section className='client-review-version-one bg-gray py-80'>
        {/* Header Intro Version One */}
        <div className='header-intro-version-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-10 col-xl-7'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>Client Reviews</h3>
                    <div className='shape-img'>
                      <img src='./assets/img/shape/Union-1.svg' alt='Roralex' />
                    </div>
                  </div>
                  <div className='inner-text'>
                    <h2>
                      Many Satisfied{" "}
                      <span className='theme-color'>Clients</span> Say About Us
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
        {/* Client Review Slider Card */}
        <div className='slider-client-review'>
          <div className='container'>
            <div className='row'>
              {/* Additional required wrapper */}
              <div className=' review-version-one'>
                <div className='swiper-wrapper'>
                  {/* Slides */}
                  <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={3}
                    slidesPerGroup={2}
                    speed={1000}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000 }}
                    className=''
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        pagination: false,
                        spaceBetween: 20,
                        slidesPerGroup: 1,
                      },
                      500: {
                        slidesPerView: 1,
                        pagination: false,
                        spaceBetween: 20,
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
                              alt='Roralex'
                            />
                          </div>
                          <div className='quta-img'>
                            <img
                              src='./assets/img/icons/icon-23.svg'
                              alt='Roralex'
                            />
                          </div>
                          <div className='review-star'>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                          </div>
                          <div className='text-file'>
                            <h2>Julio G. Fisher</h2>
                            <h4>Administrative assistant</h4>
                            <p>
                              Builder wants to be your builder for life. Whether
                              we built your home or not, it’s not too late for
                              you to join our family.
                            </p>
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
                              alt='Roralex'
                            />
                          </div>
                          <div className='quta-img'>
                            <img
                              src='./assets/img/icons/icon-23.svg'
                              alt='Roralex'
                            />
                          </div>
                          <div className='review-star'>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                          </div>
                          <div className='text-file'>
                            <h2>Ethel J. McFarland</h2>
                            <h4>Excavating operator</h4>
                            <p>
                              Builder wants to be your builder for life. Whether
                              we built your home or not, it’s not too late for
                              you to join our family.
                            </p>
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
                              src='./assets/img/client/profile-3.png'
                              alt='Roralex'
                            />
                          </div>
                          <div className='quta-img'>
                            <img
                              src='./assets/img/icons/icon-23.svg'
                              alt='Roralex'
                            />
                          </div>
                          <div className='review-star'>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                          </div>
                          <div className='text-file'>
                            <h2>Elvis K. Mullen</h2>
                            <h4>Building manager</h4>
                            <p>
                              Builder wants to be your builder for life. Whether
                              we built your home or not, it’s not too late for
                              you to join our family.
                            </p>
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
                              alt='Roralex'
                            />
                          </div>
                          <div className='quta-img'>
                            <img
                              src='./assets/img/icons/icon-23.svg'
                              alt='Roralex'
                            />
                          </div>
                          <div className='review-star'>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                          </div>
                          <div className='text-file'>
                            <h2>Elvis K. Mullen</h2>
                            <h4>Building manager</h4>
                            <p>
                              Builder wants to be your builder for life. Whether
                              we built your home or not, it’s not too late for
                              you to join our family.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/* If we need pagination */}
              <div className='review-version-one-pagination' />
            </div>
          </div>
        </div>
      </section>
      {/* Client Review Section version one End */}
    </>
  );
};

export default ClientReviewOne;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Thumbs,
  EffectFade,
} from "swiper";
import { useState } from "react";

const SliderTwo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {/* Hero Slider Version Two start  */}
      <section className='hero-slider-version-two'>
        <div className='swiper  hero-slider-two'>
          <div className='swiper-wrapper'>
            <Swiper
              loop={true}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, EffectFade]}
              effect='fade'
            >
              <SwiperSlide>
                <div className='inner-item '>
                  <div
                    className='slide-bg'
                    style={{
                      backgroundImage:
                        "url('assets/img/slider-bg/slider-bg-5.png')",
                    }}
                  />
                  <div className='body-data'>
                    <div className='container'>
                      <div className='row '>
                        <div className='col-12'>
                          <div className='content'>
                            <div className='heading-text '>
                              <h2 className='text-center'>
                                Construction is an{" "}
                                <span className='theme-color'>ancient</span>{" "}
                                human activity
                              </h2>
                              <p className='text-center'>
                                Human shelters were at first very simple and
                                perhaps lasted only a few days or months. Over
                                time, however, even temporary structures evolved
                                into such highly refined forms as the igloo.
                              </p>
                              <div className='btn-section'>
                                <button className='btn-shape-normal-outline'>
                                  <span>More Info</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='inner-item '>
                  <div
                    className='slide-bg'
                    style={{
                      backgroundImage:
                        "url('assets/img/slider-bg/slider-bg-6.png')",
                    }}
                  />
                  <div className='body-data'>
                    <div className='container'>
                      <div className='row '>
                        <div className='col-12'>
                          <div className='content'>
                            <div className='heading-text '>
                              <h2 className='text-center'>
                                The steps in{" "}
                                <span className='theme-color'>building</span>{" "}
                                construction are explained
                              </h2>
                              <p className='text-center'>
                                Human shelters were at first very simple and
                                perhaps lasted only a few days or months. Over
                                time, however, even temporary structures evolved
                                into such highly refined forms as the igloo.
                              </p>
                              <div className='btn-section'>
                                <button className='btn-shape-normal-outline'>
                                  <span>More Info</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='inner-item '>
                  <div
                    className='slide-bg'
                    style={{
                      backgroundImage:
                        "url('assets/img/slider-bg/slider-bg-7.png')",
                    }}
                  />
                  <div className='body-data'>
                    <div className='container'>
                      <div className='row '>
                        <div className='col-12'>
                          <div className='content'>
                            <div className='heading-text '>
                              <h2 className='text-center'>
                                There may be{" "}
                                <span className='theme-color'>variations</span>{" "}
                                as every project is unique
                              </h2>
                              <p className='text-center'>
                                Human shelters were at first very simple and
                                perhaps lasted only a few days or months. Over
                                time, however, even temporary structures evolved
                                into such highly refined forms as the igloo.
                              </p>
                              <div className='btn-section'>
                                <button className='btn-shape-normal-outline'>
                                  <span>More Info</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* If we need navigation buttons */}
          {/* <div className='swiper-button-prev' />
          <div className='swiper-button-next' /> */}
          {/* If we need pagination */}
          <div className='hero-slider-two-pagination' />
        </div>
      </section>
      {/* Hero Slider Version Two End */}
    </>
  );
};

export default SliderTwo;

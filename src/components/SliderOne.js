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

const SliderOne = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(thumbsSwiper);
  return (
    <>
      {/* Hero Slider Version One start  */}
      <section className='hero-slider-version-one'>
        <div className='swiper hero-slider'>
          <div className='swiper-wrapper'>
            <Swiper
              loop={true}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, EffectFade]}
              effect='fade'
            >
              <SwiperSlide>
                <div className='inner-item swiper-slide'>
                  <div
                    className='slide-bg'
                    style={{
                      backgroundImage:
                        "url('assets/img/slider-bg/slider-bg-1.png')",
                    }}
                  />
                  <div className='body-data'>
                    <div className='container'>
                      <div className='row '>
                        <div className='col-xl-8 col-lg-12'>
                          <div className='left-content'>
                            <div>
                              <div className='intro-box'>
                                <span>Constitution General Agency</span>
                              </div>
                              <div className='heading-text '>
                                <h2>
                                  An appropriate site is that selected after the
                                  building layout.
                                </h2>
                                <p>
                                  Further pledging that it shall be a
                                  fundamental aim of the State to realise
                                  through the democratic process a socialist
                                  society.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-12'>
                          <div className='right-content'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/worker/bg-worker-1.png'
                                alt='Roralex'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='inner-item swiper-slide'>
                  <div
                    className='slide-bg'
                    style={{
                      backgroundImage:
                        "url('assets/img/slider-bg/slider-bg-2.png')",
                    }}
                  />
                  <div className='body-data'>
                    <div className='container'>
                      <div className='row '>
                        <div className='col-xl-8 col-lg-12'>
                          <div className='left-content'>
                            <div>
                              <div className='intro-box'>
                                <span>Constitution General Agency</span>
                              </div>
                              <div className='heading-text'>
                                <h2>
                                  Permits and insurance obtained electric
                                  different sources!
                                </h2>
                                <p>
                                  Further pledging that it shall be a
                                  fundamental aim of the State to realise
                                  through the democratic process a socialist
                                  society.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-12'>
                          <div className='right-content'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/worker/bg-worker-2.png'
                                alt='Roralex'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='inner-item swiper-slide'>
                  <div
                    className='slide-bg'
                    style={{
                      backgroundImage:
                        "url('assets/img/slider-bg/slider-bg-3.png')",
                    }}
                  />
                  <div className='body-data'>
                    <div className='container'>
                      <div className='row '>
                        <div className='col-xl-8 col-lg-12'>
                          <div className='left-content'>
                            <div>
                              <div className='intro-box'>
                                <span>Constitution General Agency</span>
                              </div>
                              <div className='heading-text'>
                                <h2>
                                  Building structures are generally on concrete
                                  foundations.
                                </h2>
                                <p>
                                  Further pledging that it shall be a
                                  fundamental aim of the State to realise
                                  through the democratic process a socialist
                                  society.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-12'>
                          <div className='right-content'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/worker/bg-worker-3.png'
                                alt='Roralex'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='inner-item swiper-slide'>
                  <div
                    className='slide-bg'
                    style={{
                      backgroundImage:
                        "url('assets/img/slider-bg/slider-bg-4.png')",
                    }}
                  />
                  <div className='body-data'>
                    <div className='container'>
                      <div className='row '>
                        <div className='col-xl-8 col-lg-12'>
                          <div className='left-content'>
                            <div>
                              <div className='intro-box'>
                                <span>Constitution General Agency</span>
                              </div>
                              <div className='heading-text'>
                                <h2>
                                  Provide insulation to protect from required
                                  lighting?
                                </h2>
                                <p>
                                  Further pledging that it shall be a
                                  fundamental aim of the State to realise
                                  through the democratic process a socialist
                                  society.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-12'>
                          <div className='right-content'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/worker/bg-worker-4.png'
                                alt='Roralex'
                              />
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
        </div>
      </section>
      {/* Hero Slider Version One End */}
      {/* Swiper Dot start */}

      <section className='hero-slider-arrow'>
        <div className='container'>
          <div className='swiper hero-slider-nav '>
            <div className='swiper-wrapper'>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper w-100'
              >
                <SwiperSlide>
                  <div className='swiper-slide'>
                    <div className='inner-item'>
                      <div className='icon-file'>
                        <img
                          className='img-fluid'
                          src='./assets/img/icons/icon-1.png'
                          alt='Roralex'
                        />
                      </div>
                      <div className='text-file'>
                        <span>Branches</span>
                        <h4>Conference Convened</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='swiper-slide'>
                    <div className='inner-item'>
                      <div className='icon-file'>
                        <img
                          className='img-fluid'
                          src='./assets/img/icons/icon-2.png'
                          alt='Roralex'
                        />
                      </div>
                      <div className='text-file'>
                        <span>Branches</span>
                        <h4>Conference Convened</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='swiper-slide'>
                    <div className='inner-item'>
                      <div className='icon-file'>
                        <img
                          className='img-fluid'
                          src='./assets/img/icons/icon-3.png'
                          alt='Roralex'
                        />
                      </div>
                      <div className='text-file'>
                        <span>Branches</span>
                        <h4>Conference Convened</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='swiper-slide'>
                    <div className='inner-item'>
                      <div className='icon-file'>
                        <img
                          className='img-fluid'
                          src='./assets/img/icons/icon-4.png'
                          alt='Roralex'
                        />
                      </div>
                      <div className='text-file'>
                        <span>Branches</span>
                        <h4>Conference Convened</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Swiper Dot end */}
    </>
  );
};

export default SliderOne;

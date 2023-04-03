import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { FaPhoneAlt } from "react-icons/fa";

const SliderThree = () => {
  return (
    <>
      {/* Hero Slider Version three start  */}
      <section className='hero-slider-version-three'>
        <div className='swiper hero-slider-three'>
          <div className='swiper-wrapper'>
            <Swiper
              loop={true}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs, EffectFade]}
              effect='fade'
            >
              <SwiperSlide>
                <div className='inner-item '>
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
                            <div className='intro-box'>
                              <span>Best building construction SOLUTION </span>
                            </div>
                            <div className='heading-text '>
                              <h2>
                                We are best building construction <br /> Agency
                              </h2>
                              <p>
                                Sit amet consectetur adipiscing elit sed do
                                eiusmod tem porincididunt ut labore et dolore
                                magna aliqua. Quis psum suspendisse ultrices
                                gravida commodo viverra Sit amet consectetur
                                adipiscing elit sed do eiusmod tem
                                porincididunt.
                              </p>
                              <button className='btn-shape-normal-outline'>
                                <span>Learn More</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-12'>
                          <div className='right-content'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/worker/bg-worker-1.png'
                                alt=''
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
                <div className='inner-item '>
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
                            <div className='intro-box'>
                              <span>Constitution General Agency</span>
                            </div>
                            <div className='heading-text'>
                              <h2>
                                Permits &amp; insurance obtained electric
                                sources!
                              </h2>
                              <p>
                                Sit amet consectetur adipiscing elit sed do
                                eiusmod tem porincididunt ut labore et dolore
                                magna aliqua. Quis psum suspendisse ultrices
                                gravida commodo viverra Sit amet consectetur
                                adipiscing elit sed do eiusmod tem
                                porincididunt.
                              </p>
                              <button className='btn-shape-normal-outline'>
                                <span>Learn More</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-12'>
                          <div className='right-content'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/worker/bg-worker-2.png'
                                alt=''
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
                <div className='inner-item '>
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
                            <div className='intro-box'>
                              <span>Constitution General Agency</span>
                            </div>
                            <div className='heading-text'>
                              <h2>
                                Building structures access concrete foundations.
                              </h2>
                              <p>
                                Sit amet consectetur adipiscing elit sed do
                                eiusmod tem porincididunt ut labore et dolore
                                magna aliqua. Quis psum suspendisse ultrices
                                gravida commodo viverra Sit amet consectetur
                                adipiscing elit sed do eiusmod tem
                                porincididunt.
                              </p>
                              <button className='btn-shape-normal-outline'>
                                <span>Learn More</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-12'>
                          <div className='right-content'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/worker/bg-worker-3.png'
                                alt=''
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
                <div className='inner-item '>
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
                            <div className='intro-box'>
                              <span>Constitution General Agency</span>
                            </div>
                            <div className='heading-text'>
                              <h2>
                                Providing insulation best required lighting?
                              </h2>
                              <p>
                                Sit amet consectetur adipiscing elit sed do
                                eiusmod tem porincididunt ut labore et dolore
                                magna aliqua. Quis psum suspendisse ultrices
                                gravida commodo viverra Sit amet consectetur
                                adipiscing elit sed do eiusmod tem
                                porincididunt.
                              </p>
                              <button className='btn-shape-normal-outline'>
                                <span>Learn More</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-12'>
                          <div className='right-content'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/worker/bg-worker-4.png'
                                alt=''
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
        <div className='intro-lub'>
          <div>
            <h2>FOR Encourage Request CALL :</h2>
            <div className='clips'>
              <span>
                <FaPhoneAlt />
              </span>
              <span className='phone'>(989)-256-111-89</span>
            </div>
            <p>
              Lobortis ipsam potenti necessitatibus integer unde quisque,
              condimentum doloribus cupiditate.
            </p>
          </div>
        </div>
      </section>
      {/* Hero Slider Version three End */}
    </>
  );
};

export default SliderThree;

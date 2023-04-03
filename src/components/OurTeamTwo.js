import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const OurTeamTwo = () => {
  return (
    <>
      {/* Our Team Section version two start */}
      <section className='ourTeam-section-version-two bg-white py-100'>
        {/* Header Intro Version Two */}
        <div className='header-intro-version-two'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>Providing Solutions For Construction</h3>
                    <h2>Our Team</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Team Section Card Items */}
        <div className='inner-card-items-slider'>
          <div className='container'>
            <div className='row'>
              <div className='swiper swiper-container team-version-two'>
                <div className='swiper-wrapper'>
                  <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={4}
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
                        slidesPerGroup: 2,
                      },
                      992: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                      },
                      1200: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                      },
                      1400: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div>
                        <div className='inner-wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/team/team-6.png'
                              alt=''
                            />
                          </div>
                          <div className='intro'>
                            <Link to='/team-details'>
                              <h2 className='name'>Michael V. Fournier</h2>
                            </Link>
                            <p className='position'>Civil Engineer</p>
                            <div className='social-icon'>
                              <ul>
                                <li>
                                  <a href='#'>
                                    <FaFacebookF />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaTwitter />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaYoutube />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>
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
                              src='./assets/img/team/team-7.png'
                              alt=''
                            />
                          </div>
                          <div className='intro'>
                            <Link to='/team-details'>
                              <h2 className='name'>George Skertchly</h2>
                            </Link>
                            <p className='position'>Building Inspector</p>
                            <div className='social-icon'>
                              <ul>
                                <li>
                                  <a href='#'>
                                    <FaFacebookF />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaTwitter />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaYoutube />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>
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
                              src='./assets/img/team/team-8.png'
                              alt=''
                            />
                          </div>
                          <div className='intro'>
                            <Link to='/team-details'>
                              <h2 className='name'>Dakota Budd</h2>
                            </Link>
                            <p className='position'>Architecture</p>
                            <div className='social-icon'>
                              <ul>
                                <li>
                                  <a href='#'>
                                    <FaFacebookF />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaTwitter />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaYoutube />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>
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
                              src='./assets/img/team/team-9.png'
                              alt=''
                            />
                          </div>
                          <div className='intro'>
                            <Link to='/team-details'>
                              <h2 className='name'>Betty O. Werner</h2>
                            </Link>
                            <p className='position'>Architect</p>
                            <div className='social-icon'>
                              <ul>
                                <li>
                                  <a href='#'>
                                    <FaFacebookF />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaTwitter />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaYoutube />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>
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
                              src='./assets/img/team/team-6.png'
                              alt=''
                            />
                          </div>
                          <div className='intro'>
                            <Link to='/team-details'>
                              <h2 className='name'>Michael V. Fournier</h2>
                            </Link>
                            <p className='position'>Civil Engineer</p>
                            <div className='social-icon'>
                              <ul>
                                <li>
                                  <a href='#'>
                                    <FaFacebookF />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaTwitter />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaYoutube />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>
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
                              src='./assets/img/team/team-10.png'
                              alt=''
                            />
                          </div>
                          <div className='intro'>
                            <Link to='/team-details'>
                              <h2 className='name'>Betty R. Reis</h2>
                            </Link>
                            <p className='position'>Stereotyper</p>
                            <div className='social-icon'>
                              <ul>
                                <li>
                                  <a href='#'>
                                    <FaFacebookF />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaTwitter />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaYoutube />
                                  </a>
                                </li>
                                <li>
                                  <a href='#'>
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/* If we need pagination */}
              {/* <div className='team-version-two-pagination' /> */}
            </div>
          </div>
        </div>
      </section>
      {/* Our Team Section version two End */}
    </>
  );
};

export default OurTeamTwo;

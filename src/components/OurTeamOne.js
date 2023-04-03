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

const OurTeamOne = () => {
  return (
    <>
      {/* Our Team Section version one start */}
      <section className='ourTeam-section-version-one bg-gray pt-200 pb-60'>
        {/* Header Intro Version One */}
        <div className='header-intro-version-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-10 col-xl-7'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>Our Expert Team</h3>
                    <div className='shape-img'>
                      <img src='./assets/img/shape/Union-1.svg' alt='Roralex' />
                    </div>
                  </div>
                  <div className='inner-text'>
                    <h2>
                      Valuable Expert <span className='theme-color'>Team</span>{" "}
                      Members
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
        {/* Team Slider Card */}
        <div className='inner-card-items-slider'>
          <div className='container'>
            <div className='row'>
              <div className='swiper swiper-container team-version-one'>
                <div className='swiper-wrapper'>
                  <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={4}
                    slidesPerGroup={2}
                    speed={1000}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000 }}
                    className='mySwiper'
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
                        slidesPerView: 4,
                      },
                      1400: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div>
                        <div className='inner-wrapper '>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/team/team-6.png'
                              alt='Roralex'
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
                        <div className='inner-wrapper '>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/team/team-7.png'
                              alt='Roralex'
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
                      {" "}
                      <div>
                        <div className='inner-wrapper '>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/team/team-8.png'
                              alt='Roralex'
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
                        <div className='inner-wrapper '>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/team/team-9.png'
                              alt='Roralex'
                            />
                          </div>
                          <div className='intro'>
                            <Link to='team-details'>
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
                        <div className='inner-wrapper '>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/team/team-6.png'
                              alt='Roralex'
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
                        <div className='inner-wrapper '>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/team/team-10.png'
                              alt='Roralex'
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
                    <SwiperSlide>
                      {" "}
                      <div>
                        <div className='inner-wrapper '>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/team/team-8.png'
                              alt='Roralex'
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
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team Section version one End */}
    </>
  );
};

export default OurTeamOne;

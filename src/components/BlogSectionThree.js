import React from "react";
import { FaCalendarAlt, FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
const BlogSectionThree = () => {
  return (
    <>
      {/* Blog Section version three Start */}
      <section className='blog-section-version-three bg-gray py-80'>
        {/* Header Intro Version Three */}
        <div className='header-intro-version-three'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>LATEST NEWS</h3>
                    <h2>
                      We Are Providing hot <br /> and{" "}
                      <span className='theme-color'>latest</span> news
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Card Items */}
        <div className='blog-card-version-three'>
          <div className='container'>
            <div className='row'>
              <div className='swiper swiper-container blog-version-three'>
                <div className='swiper-wrapper'>
                  <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={0}
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
                        <div className='wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/blog/blog-1.png'
                              alt=''
                            />
                          </div>
                          <div className='inner-file'>
                            <Link to='/blog-details'>
                              <h2>
                                Building construction is the process of
                                structure
                              </h2>
                            </Link>
                            <p>
                              The vast majority of building construction
                              projects are small renovations, such as the
                              addition of a room, or renovation of a bathroom.
                            </p>
                            <div className='footer-icons'>
                              <div className='inner'>
                                <FaUserAlt />
                                By{" "}
                                <strong className='theme-color'>
                                  Alex Jhon
                                </strong>
                              </div>
                              <div className='inner'>
                                <FaRegCalendarAlt />4 years ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className='wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/blog/blog-2.png'
                              alt=''
                            />
                          </div>
                          <div className='inner-file'>
                            <Link to='/blog-details'>
                              <h2>
                                There is a wide range of building products.
                              </h2>
                            </Link>
                            <p>
                              The vast majority of building construction
                              projects are small renovations, such as the
                              addition of a room, or renovation of a bathroom.
                            </p>
                            <div className='footer-icons'>
                              <div className='inner'>
                                <FaUserAlt />
                                By{" "}
                                <strong className='theme-color'>
                                  Alex Jhon
                                </strong>
                              </div>
                              <div className='inner'>
                                <FaRegCalendarAlt />4 years ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className='wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/blog/blog-3.png'
                              alt=''
                            />
                          </div>
                          <div className='inner-file'>
                            <Link to='/blog-details'>
                              <h2>
                                Construction today is a significant industrial.
                              </h2>
                            </Link>
                            <p>
                              The vast majority of building construction
                              projects are small renovations, such as the
                              addition of a room, or renovation of a bathroom.
                            </p>
                            <div className='footer-icons'>
                              <div className='inner'>
                                <FaUserAlt />
                                By{" "}
                                <strong className='theme-color'>
                                  Alex Jhon
                                </strong>
                              </div>
                              <div className='inner'>
                                <FaRegCalendarAlt />4 years ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className='wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/blog/blog-4.png'
                              alt=''
                            />
                          </div>
                          <div className='inner-file'>
                            <Link to='/blog-details'>
                              <h2>
                                A tent illustrates basic elements of
                                environmental.
                              </h2>
                            </Link>
                            <p>
                              The vast majority of building construction
                              projects are small renovations, such as the
                              addition of a room, or renovation of a bathroom.
                            </p>
                            <div className='footer-icons'>
                              <div className='inner'>
                                <FaUserAlt />
                                By{" "}
                                <strong className='theme-color'>
                                  Alex Jhon
                                </strong>
                              </div>
                              <div className='inner'>
                                <FaRegCalendarAlt />4 years ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className='wrapper shadow'>
                          <div className='img-file'>
                            <img
                              className='img-fluid'
                              src='./assets/img/blog/blog-5.png'
                              alt=''
                            />
                          </div>
                          <div className='inner-file'>
                            <Link to='/blog-details'>
                              <h2>
                                People no traveled in search of game or herds.
                              </h2>
                            </Link>
                            <p>
                              The vast majority of building construction
                              projects are small renovations, such as the
                              addition of a room, or renovation of a bathroom.
                            </p>
                            <div className='footer-icons'>
                              <div className='inner'>
                                <FaUserAlt />
                                By{" "}
                                <strong className='theme-color'>
                                  Alex Jhon
                                </strong>
                              </div>
                              <div className='inner'>
                                <FaRegCalendarAlt />4 years ago
                              </div>
                            </div>
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
      {/* Blog Section version three End */}
    </>
  );
};

export default BlogSectionThree;

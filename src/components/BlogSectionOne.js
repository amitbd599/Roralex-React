import React from "react";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogSectionOne = () => {
  return (
    <>
      {/* Blog Section version one Start */}
      <section className='blog-section-version-one bg-white py-80'>
        {/* Header Intro Version One */}
        <div className='header-intro-version-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-10 col-xl-7'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>LATEST NEWS</h3>
                    <div className='shape-img'>
                      <img src='./assets/img/shape/Union-1.svg' alt='Roralex' />
                    </div>
                  </div>
                  <div className='inner-text'>
                    <h2>
                      We Are Providing{" "}
                      <span className='theme-color'>latest</span> Awesome news
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
        {/* Blog Card Items */}
        <div className='blog-card-version-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper'>
                  <div className='img-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/blog/blog-1.png'
                      alt='Roralex'
                    />
                    <div className='badge-file'>
                      <span>Building</span>
                    </div>
                  </div>
                  <div className='inner-text'>
                    <div className='overlay-date'>
                      <div className='date'>
                        <span>
                          <FaCalendarAlt />
                        </span>
                        <span>January 15 2019</span>
                      </div>
                      <div className='admin'>
                        <span>
                          <FaUserAlt />
                        </span>
                        <span>Admin</span>
                      </div>
                    </div>
                    <h2>How to estimate structural steel for construction.</h2>
                    <p>
                      Home renovations, especially those involving plentiful of
                      demolition can be a very dusty affair. This nasty dust can
                      easily free flow.
                    </p>
                    <Link to='/blog-details'>
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper '>
                  <div className='img-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/blog/blog-2.png'
                      alt='Roralex'
                    />
                    <div className='badge-file'>
                      <span>Construction</span>
                    </div>
                  </div>
                  <div className='inner-text'>
                    <div className='overlay-date'>
                      <div className='date'>
                        <span>
                          <FaCalendarAlt />
                        </span>
                        <span>January 13 2019</span>
                      </div>
                      <div className='admin'>
                        <span>
                          <FaUserAlt />
                        </span>
                        <span>Alex Jhon</span>
                      </div>
                    </div>
                    <h2>Understanding the basics building to construct.</h2>
                    <p>
                      Home renovations, especially those involving plentiful of
                      demolition can be a very dusty affair. This nasty dust can
                      easily free flow.
                    </p>
                    <Link to='/blog-details'>
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper '>
                  <div className='img-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/blog/blog-3.png'
                      alt='Roralex'
                    />
                    <div className='badge-file'>
                      <span>Building</span>
                    </div>
                  </div>
                  <div className='inner-text'>
                    <div className='overlay-date'>
                      <div className='date'>
                        <span>
                          <FaCalendarAlt />
                        </span>
                        <span>January 10 2019</span>
                      </div>
                      <div className='admin'>
                        <span>
                          <FaUserAlt />
                        </span>
                        <span>Admin</span>
                      </div>
                    </div>
                    <h2>There may be variations as every project is unique.</h2>
                    <p>
                      Home renovations, especially those involving plentiful of
                      demolition can be a very dusty affair. This nasty dust can
                      easily free flow.
                    </p>
                    <Link to='/blog-details'>
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper '>
                  <div className='img-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/blog/blog-4.png'
                      alt='Roralex'
                    />
                    <div className='badge-file'>
                      <span>Finance</span>
                    </div>
                  </div>
                  <div className='inner-text'>
                    <div className='overlay-date'>
                      <div className='date'>
                        <span>
                          <FaCalendarAlt />
                        </span>
                        <span>January 07 2019</span>
                      </div>
                      <div className='admin'>
                        <span>
                          <FaUserAlt />
                        </span>
                        <span>Admin</span>
                      </div>
                    </div>
                    <h2>Once the site where the building is indented.</h2>
                    <p>
                      Home renovations, especially those involving plentiful of
                      demolition can be a very dusty affair. This nasty dust can
                      easily free flow.
                    </p>
                    <Link to='/blog-details'>
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper '>
                  <div className='img-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/blog/blog-5.png'
                      alt='Roralex'
                    />
                    <div className='badge-file'>
                      <span>Insurance</span>
                    </div>
                  </div>
                  <div className='inner-text'>
                    <div className='overlay-date'>
                      <div className='date'>
                        <span>
                          <FaCalendarAlt />
                        </span>
                        <span>January 05 2019</span>
                      </div>
                      <div className='admin'>
                        <span>
                          <FaUserAlt />
                        </span>
                        <span>Elvis K. Mullen</span>
                      </div>
                    </div>
                    <h2>Permits insurance obtained different sources.</h2>
                    <p>
                      Home renovations, especially those involving plentiful of
                      demolition can be a very dusty affair. This nasty dust can
                      easily free flow.
                    </p>
                    <Link to='/blog-details'>
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper '>
                  <div className='img-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/blog/blog-1.png'
                      alt='Roralex'
                    />
                    <div className='badge-file'>
                      <span>Foundation</span>
                    </div>
                  </div>
                  <div className='inner-text'>
                    <div className='overlay-date'>
                      <div className='date'>
                        <span>
                          <FaCalendarAlt />
                        </span>
                        <span>January 02 2019</span>
                      </div>
                      <div className='admin'>
                        <span>
                          <FaUserAlt />
                        </span>
                        <span>Rose S. Chism</span>
                      </div>
                    </div>
                    <h2>Building structures are constructed on concrete.</h2>
                    <p>
                      Home renovations, especially those involving plentiful of
                      demolition can be a very dusty affair. This nasty dust can
                      easily free flow.
                    </p>
                    <Link to='/blog-details'>
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className='btn-section'>
                  <Link to='/blog'>
                    <span className='btn-shape-normal-outline'>
                      <span>View More News</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section version one End */}
    </>
  );
};

export default BlogSectionOne;

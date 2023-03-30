import React from "react";
import {
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaSearch,
  FaTimes,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const HeaderOne = () => {
  return (
    <>
      {/* header-area-start */}
      <header id='header-sticky' className='header-intro-version-one-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-2 col-lg-2 col-md-6 col-6'>
              <div className='logo-area'>
                <div className='logo'>
                  <a href='index-1.html'>
                    <img
                      src='./assets/img/common/Logo_White.png'
                      alt='Roralex'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-7 col-lg-10 col-md-6 col-6'>
              <div className='menu-body'>
                <div className='main-menu'>
                  <nav id='mobile-menu'>
                    <ul>
                      <li className='has-dropdown'>
                        <a href='index-1.html'>Home</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='index-1.html'>Home One</a>
                          </li>
                          <li>
                            <a href='index-2.html'>Home Two</a>
                          </li>
                          <li>
                            <a href='index-3.html'>Home Three</a>
                          </li>
                        </ul>
                      </li>
                      <li className='has-dropdown'>
                        <a href='services.html'>Services</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='services.html'>Services</a>
                          </li>
                          <li>
                            <a href='services-details.html'>Services Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className='has-dropdown'>
                        <a href='about.html'>Pages</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='about.html'>About Us</a>
                          </li>
                          <li>
                            <a href='team.html'>Team</a>
                          </li>
                          <li>
                            <a href='team-details.html'>Team Details</a>
                          </li>
                          <li>
                            <a href='project.html'>projects</a>
                          </li>
                          <li>
                            <a href='project-details.html'>projects Details</a>
                          </li>
                          <li>
                            <a href='pricing.html'>pricing Page</a>
                          </li>
                          <li>
                            <a href='faq.html'>FAQ Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className='has-dropdown'>
                        <a href='blog.html'>Blogs</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='blog.html'>Blogs</a>
                          </li>
                          <li>
                            <a href='blog-details.html'>Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='contact.html'>Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='side-menu-icon d-lg-none text-end'>
                <a
                  href='javascript:void(0)'
                  className='info-toggle-btn f-right sidebar-toggle-btn'
                >
                  <FaBars />
                </a>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 d-none d-xl-block'>
              <div className='location-email-intro'>
                <div className='inner-location-email-intro pr-30'>
                  <div className='inner'>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span className='text'>Location</span>
                  </div>
                  <h5>Riverside Augusta</h5>
                </div>
                <div className='inner-location-email-intro'>
                  <div className='inner'>
                    <span>
                      <FaEnvelope />
                    </span>
                    <span className='text'>Get In Touch</span>
                  </div>
                  <h5>info@roralex.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header-area-end */}
      {/* mobile sidebar area start */}
      <div className='mobile-sidebar-area'>
        <div className='sidebar__wrapper'>
          <div className='sidebar__close'>
            <button className='sidebar__close-btn' id='sidebar__close-btn'>
              <FaTimes />
            </button>
          </div>
          <div className='sidebar__content'>
            <div className='sidebar__logo mb-20'>
              <a href='index-1.html'>
                <img src='./assets/img/common/Logo_Black.png' alt='logo' />
              </a>
              <p>Trusted Contraction service!</p>
            </div>
            <div className='sidebar__search mb-25'>
              <form action='#'>
                <input type='text' placeholder='Find A Construction Service!' />
                <button type='submit'>
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className='mobile-menu fix' />
            <div className='sidebar__contact  mb-20'>
              <h4>Contact With US</h4>
              <div className='sidebar__social'>
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
              <div className='location-email-intro mobile'>
                <div className='inner-location-email-intro pr-30'>
                  <div className='inner'>
                    <span>
                      <FaLocationArrow />
                    </span>
                    <span className='text'>Location</span>
                  </div>
                  <h5 className='text'>4043 Riverside Augusta</h5>
                </div>
                <div className='inner-location-email-intro pt-5'>
                  <div className='inner'>
                    <span>
                      <FaEnvelope />
                    </span>
                    <span className='text'>Get In Touch</span>
                  </div>
                  <h5 className='text'>info@roralex.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='body-overlay' />
      {/* mobile sidebar area end */}
    </>
  );
};

export default HeaderOne;

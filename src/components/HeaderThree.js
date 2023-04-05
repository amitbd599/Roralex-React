import React from "react";
import {
  FaAngleDown,
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
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderThree = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <>
      {/* header-area-start */}
      <header
        id='header-sticky'
        className={
          scroll
            ? "header-intro-version-three-area header__sticky"
            : "header-intro-version-three-area"
        }
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-2 col-lg-2 col-md-6 col-6'>
              <div className='logo-area'>
                <div className='logo'>
                  <Link to='/index-3'>
                    <img
                      src='./assets/img/common/Logo_White.png'
                      alt='Roralex'
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-7 col-lg-6 col-md-6 col-6'>
              <div className='menu-body'>
                <div className='main-menu'>
                  <nav id='mobile-menu'>
                    <ul>
                      <li className='has-dropdown'>
                        <Link to='/index-1'>
                          Home <FaAngleDown />
                        </Link>
                        <ul className='sub-menu'>
                          <li>
                            <Link to='/index-1'>Home One</Link>
                          </li>
                          <li>
                            <Link to='/index-2'>Home Two</Link>
                          </li>
                          <li>
                            <Link to='/index-3'>Home Three</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='has-dropdown'>
                        <Link to='/services'>
                          Services <FaAngleDown />
                        </Link>
                        <ul className='sub-menu'>
                          <li>
                            <Link to='/services'>Services</Link>
                          </li>
                          <li>
                            <Link to='/services-details'>Services Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='has-dropdown'>
                        <Link to='/about'>
                          Pages <FaAngleDown />
                        </Link>
                        <ul className='sub-menu'>
                          <li>
                            <Link to='/about'>About Us</Link>
                          </li>
                          <li>
                            <Link to='/team'>Team</Link>
                          </li>
                          <li>
                            <Link to='/team-details'>Team Details</Link>
                          </li>
                          <li>
                            <Link to='/project'>projects</Link>
                          </li>
                          <li>
                            <Link to='/project-details'>projects Details</Link>
                          </li>
                          <li>
                            <Link to='/pricing'>pricing Page</Link>
                          </li>
                          <li>
                            <Link to='/faq'>FAQ Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='has-dropdown'>
                        <Link to='/blog'>
                          Blogs <FaAngleDown />
                        </Link>
                        <ul className='sub-menu'>
                          <li>
                            <Link to='/blog'>Blogs</Link>
                          </li>
                          <li>
                            <Link to='/blog-details'>Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to='/contact'>Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='side-menu-icon d-lg-none text-end'>
                <span
                  className='info-toggle-btn f-right sidebar-toggle-btn'
                  onClick={mobileMenu}
                >
                  <FaBars />
                </span>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 d-none d-lg-block'>
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

      <div className={active ? "body-overlay active" : "body-overlay"} />
      <div>
        {/*=======  offcanvas mobile menu  =======*/}
        <div
          className={`offcanvas-mobile-menu ${
            active === true ? "active" : ""
          } `}
          id='mobile-menu-overlay'
        >
          <div className='sidebar__logo mb-20'>
            <div>
              <Link to='/index-1'>
                <img src='./assets/img/common/Logo_Black.png' alt='logo' />
              </Link>
              <p>Trusted Contraction service!</p>
            </div>

            <div className='sidebar__close'>
              <button
                className='sidebar__close-btn'
                id='sidebar__close-btn'
                onClick={mobileMenu}
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <div className='sidebar__search mb-25'>
            <form action='#'>
              <input type='text' placeholder='Find A Construction Service!' />
              <button type='submit'>
                <FaSearch />
              </button>
            </form>
          </div>
          <div className='offcanvas-wrapper'>
            <div className='offcanvas-inner-content'>
              <nav className='offcanvas-navigation' id='offcanvas-navigation'>
                <ul>
                  <li className='menu-item-has-children'>
                    <Link to='/index-1'>HOME</Link>
                    <ul className='sub-menu'>
                      <li>
                        <Link to='/index-1'>Home One</Link>
                      </li>
                      <li>
                        <Link to='/index-2'>Home Two</Link>
                      </li>
                      <li>
                        <Link to='/index-3'>Home Three</Link>
                      </li>
                    </ul>
                  </li>

                  <li className='menu-item-has-children'>
                    <Link to='/services'>Services</Link>
                    <ul className='sub-menu'>
                      <li>
                        <Link to='/services'>Service Page</Link>
                      </li>
                      <li>
                        <Link to='/services-details'>Services Details</Link>
                      </li>
                    </ul>
                  </li>

                  <li className='menu-item-has-children'>
                    <Link to='/about'>Pages</Link>
                    <ul className='sub-menu'>
                      <li>
                        <Link to='/about'>About Us</Link>
                      </li>
                      <li>
                        <Link to='/team'>Team</Link>
                      </li>
                      <li>
                        <Link to='/team-details'>Team Details</Link>
                      </li>
                      <li>
                        <Link to='/project'>Projects</Link>
                      </li>
                      <li>
                        <Link to='/project-details'>Projects Details</Link>
                      </li>
                      <li>
                        <Link to='/pricing'>Pricing Page</Link>
                      </li>
                      <li>
                        <Link to='/faq'>FAQ Page</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <Link to='/blog'>Blog</Link>
                    <ul className='sub-menu'>
                      <li>
                        <Link to='/blog'>Blog</Link>
                      </li>
                      <li>
                        <Link to='/blog-details'>Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='/contact'>CONTACT</Link>{" "}
                  </li>
                </ul>
              </nav>

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
        {/*=======  End of offcanvas mobile menu  =======*/}
      </div>
    </>
  );
};

export default HeaderThree;

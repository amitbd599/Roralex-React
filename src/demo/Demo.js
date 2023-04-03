import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaCartArrowDown, FaCog } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import "./style.css";
const Demo = () => {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 100) {
        setStickyNav(false);
      } else if (window.pageYOffset > 100) {
        setStickyNav(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <section className='root-demo'>
      {/* Navigation */}
      <header className='navbar-area m-0 demo-main'>
        <nav
          className={
            stickyNav
              ? "navbar navbar-expand-lg navbar-default navbar-fixed-top top-nav-collapse"
              : "navbar navbar-expand-lg navbar-default navbar-fixed-top"
          }
        >
          <div className='container nav-container demo'>
            <div className='logo'>
              <Link className='main-logo' to='/'>
                <img src='/assets/demo-img/logo.png' alt='img' />
              </Link>
            </div>
            <div className='nav-right-part nav-right-part-mobile ms-auto'>
              <ul className='text-end'>
                <li>
                  <a className='page-scroll' href='#demo'>
                    Demos
                  </a>
                </li>
                <li>
                  <a className='page-scroll' href='#inner'>
                    Inners
                  </a>
                </li>
                <li>
                  <Link className='cart' to='/'>
                    <img src='/assets/demo-img/add-to-cart.svg' alt='img' />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='collapse navbar-collapse' id='al_main_menu'>
              <ul className='navbar-nav menu-open text-center m-auto'>
                <li>
                  <a className='page-scroll' href='#demo'>
                    Demos
                  </a>
                </li>
                <li>
                  <a className='page-scroll' href='#inner'>
                    Inner Pages
                  </a>
                </li>
                <li>
                  <a className='page-scroll' href='#header'>
                    Header
                  </a>
                </li>
                <li>
                  <a className='page-scroll' href='#footer'>
                    Footer
                  </a>
                </li>
                <li>
                  <a className='page-scroll' href='#featured'>
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className='nav-right-part nav-right-part-desktop'>
              <ul>
                <li>
                  <a
                    href='https://themeforest.net/user/wowtheme7'
                    className='btns btns-whites'
                  >
                    Purchase Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Banner Area Start*/}
      <div id='banner' className='banner-area demo-main'>
        <div className='sidebar-links'>
          <a
            className='btns btns-whites'
            href='https://themeforest.net/user/wowtheme7'
          >
            <FaCartArrowDown />
            Add To Cart
          </a>
          <a
            className='btns btns-whites'
            href='https://themeforest.net/user/wowtheme7'
          >
            <FaCog />
            Demo Link
          </a>
        </div>
        <div className='container'>
          <div className='row justify-content-center justify-content-xl-start'>
            <div className='col-xl-6 col-lg-6 align-self-center'>
              <div className='banner-inner text-xl-start text-center'>
                <h1
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  AglieTech - Trendy &amp; Powerful React Template
                </h1>
                <div
                  className='btns-area'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                >
                  <a
                    className='btns btns-border-whites page-scroll'
                    href='#demo'
                  >
                    Try Demos
                  </a>
                  <a
                    className='btns btns-whites me-0'
                    href='https://themeforest.net/user/wowtheme7'
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className='col-xl-6 col-lg-6'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='row'>
                <img src='/assets/demo-img/in.png' alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Area End */}
      {/* counter start */}
      <div className='counter-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='counter-area-inner'>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div className='single-counter-inner text-center'>
                  <div className='details'>
                    <h2>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className='counter'>
                              <CountUp
                                duration={1}
                                delay={0}
                                start={0}
                                end={4}
                              />
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p>Total Homes</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='single-counter-inner text-center'>
                  <div className='details'>
                    <h2>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className='counter'>
                              <CountUp
                                duration={1}
                                delay={0}
                                start={0}
                                end={10}
                              />{" "}
                              +
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p>Total Pages</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='single-counter-inner text-center'>
                  <div className='details'>
                    <h2>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className='counter'>
                              <CountUp
                                duration={1}
                                delay={0}
                                start={0}
                                end={14}
                              />
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p>Inner Pages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter end */}
      {/* demo Section */}
      <section id='demo' className='demo-section pd-top-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div
                className='section-title '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <h5 className='subtitle'>AWESOME DEMOS</h5>
                <h2 className='title'>Great Home Pages</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <Link to='/index-1'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/1.png' alt='img' />
                  </span>
                  Home V.1
                </Link>
                <Link className='btns btns-base' to='/index-1'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large '
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <Link to='/index-2'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/2.png' alt='img' />
                  </span>
                  Home V.2
                </Link>
                <Link className='btns btns-base' to='/index-2'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large '
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1500'
              >
                <Link to='/index-3'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/3.png' alt='img' />
                  </span>
                  Home V.3
                </Link>
                <Link className='btns btns-base' to='/index-3'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <Link to='/index-4'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/4.png' alt='img' />
                  </span>
                  Home V.4
                </Link>
                <Link className='btns btns-base' to='/index-4'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large  '
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <Link to='/index-5'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/5.png' alt='img' />
                  </span>
                  Home V.5
                </Link>
                <Link className='btns btns-base' to='/index-5'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large  coming-soon'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1500'
              >
                <Link to='#'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/4.png' alt='img' />
                  </span>
                  <span className='cm-soon-title'>Comming Soon</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* inner Section */}
      <section id='inner' className='inner-section pd-top-130'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div
                className='section-title '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <h2 className='title'>Great Inner Pages</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <Link to='/about'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/about.png' alt='img' />
                  </span>
                  About Page
                </Link>
                <Link className='btns btns-base' to='/about'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item '
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <Link to='/service'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/portfolio.png' alt='img' />
                  </span>
                  Service Page
                </Link>
                <Link className='btns btns-base' to='/service'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item '
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1500'
              >
                <Link to='/service-details'>
                  <span className='thumb'>
                    <img
                      src='/assets/demo-img/portfolio-details.png'
                      alt='img'
                    />
                  </span>
                  Service Details
                </Link>
                <Link className='btns btns-base' to='/service-details'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <Link to='/team'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/team.png' alt='img' />
                  </span>
                  Team Page{" "}
                </Link>
                <Link className='btns btns-base' to='/team'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item '
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <Link to='/team-details'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/team-details.png' alt='img' />
                  </span>
                  Team Details Page{" "}
                </Link>
                <Link className='btns btns-base' to='/team-details'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item '
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1500'
              >
                <Link href='/blog'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/blog.png' alt='img' />
                  </span>
                  Blog Page
                </Link>
                <Link className='btns btns-base' to='/blog'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <Link to='/blog-details'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/blog-details.png' alt='img' />
                  </span>
                  Blog Details Page
                </Link>
                <Link className='btns btns-base' to='/blog-details'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item '
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <Link to='/contact'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/contact.png' alt='img' />
                  </span>
                  Contact
                </Link>
                <Link className='btns btns-base' to='/contact'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large  coming-soon'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1500'
              >
                <Link to='#'>
                  <span className='thumb'>
                    <img src='/assets/demo-img/4.png' alt='img' />
                  </span>
                  <span className='cm-soon-title'>Comming Soon</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* demo Section */}
      <section id='header' className='widget-section pd-top-87'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div
                className='section-title '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <h2 className='title'>Header Style</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='header-item mb-4'>
                <span className='thumb'>
                  <img
                    className='w-100'
                    src='/assets/demo-img/header.png'
                    alt='img'
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='header-item mb-4'>
                <span className='thumb'>
                  <img
                    className='w-100'
                    src='/assets/demo-img/header2.png'
                    alt='img'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* demo Section */}
      <section id='footer' className='widget-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center pd-top-130'>
              <div className='section-title'>
                <h2 className='title'>Footer Style</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='header-item mb-4'>
                <span className='thumb'>
                  <img
                    className='w-100'
                    src='/assets/demo-img/footer.png'
                    alt='img'
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='header-item mb-4'>
                <span className='thumb'>
                  <img
                    className='w-100'
                    src='/assets/demo-img/footer2.png'
                    alt='img'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* inner Section */}
      <section
        id='featured'
        className='featured-section pd-top-87 pd-bottom-110'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div
                className='section-title '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <h2 className='title'>Core Features</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/3.png' alt='img' />
                Bootstrap 5+
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/1.png' alt='img' />
                Sass
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/4.png' alt='img' />
                React Icons
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/2.png' alt='img' />
                React-Slick
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/5.png' alt='img' />
                HTML5
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/6.png' alt='img' />
                CSS3
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/7.png' alt='img' />
                NPM Package
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/8.png' alt='img' />
                React Router Dom
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/9.png' alt='img' />
                Clean Code
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/10.png' alt='img' />
                Magnific Popup
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/12.png' alt='img' />
                100% Responsive
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/11.png' alt='img' />
                Google Fonts
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/14.png' alt='img' />
                Well Documented
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/15.png' alt='img' />
                Counter Up
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item '
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1500'
              >
                <img src='/assets/demo-img/featured/13.png' alt='img' />
                Animation
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer area start */}
      <footer
        className='footer-area pd-top-100'
        // style={{ backgroundImage: 'url("/assets/demo-img/01.png")' }}
      >
        <div className='container '>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='footer-widget widget text-center pd-bottom-100 demo-main'>
                <Link className='logo' to='/'>
                  <img src='/assets/demo-img/logo.png' alt='#' />
                </Link>
                <h5 className='text-white mb-5 mt-5 lh-base'>
                  Mechanic, car repair workshop, garage owner, car wash company.
                  No matter which of these businesses you choose, AglieTech is
                  the first choice when it comes to a website.
                </h5>
                <a
                  className='btns btns-whites'
                  href='https://themeforest.net/user/wowtheme7'
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center align-self-center'>
                <p>Copy Right by wowtheme7</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </section>
  );
};

export default Demo;

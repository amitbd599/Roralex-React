import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  FaAngleDoubleRight,
  FaBars,
  FaEye,
  FaSearch,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
const Demo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
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
            ? "header-intro-version-one-area header__sticky"
            : "header-intro-version-one-area"
        }
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-2 col-lg-2 col-md-6 col-6'>
              <div className='logo-area'>
                <div className='logo'>
                  <Link to='/'>
                    <img
                      src='./assets/img/common/Logo_White.png'
                      alt='Roralex'
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-7 col-lg-10 col-md-6 col-6'>
              <div className='menu-body'>
                <div className='main-menu'>
                  <nav id='mobile-menu'>
                    <ul>
                      <li>
                        <a href='#intro'>Intro</a>
                      </li>
                      <li>
                        <a href='#allHome'>All Home</a>
                      </li>
                      <li>
                        <a href='#innerPage'>Inner Page</a>
                      </li>
                      <li>
                        <a href='#feature'>Core Features</a>
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
            <div className='col-xl-3 col-lg-4 d-none d-xl-block'></div>
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
                  <li>
                    <a to='#intro'>Intro</a>{" "}
                  </li>

                  <li>
                    <a to='#allHome'>allHome</a>{" "}
                  </li>

                  <li>
                    <a to='#innerPage'>InnerPage</a>{" "}
                  </li>

                  <li>
                    <a to='#feature'>Feature</a>{" "}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/*=======  End of offcanvas mobile menu  =======*/}
      </div>
      <section className='demo-inner'>
        <div
          id='intro'
          className='banner-intro'
          style={{
            backgroundImage: "url('assets/img/bg-overlay/bg-overlay-9.png')",
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='left-side'>
                  <div className='wrapper'>
                    <h2
                      className='wow animated fadeInUp'
                      data-aos='fade-right'
                      data-aos-delay='100'
                      data-aos-duration='1500'
                    >
                      RORALEX Trendy & Powerful React Template
                    </h2>
                    <div className='intro-list'>
                      <h3
                        className='wow animated fadeInUp'
                        data-aos='fade-right'
                        data-aos-delay='150'
                        data-aos-duration='1500'
                      >
                        Features &amp; Trend:
                      </h3>
                      <ul
                        className='wow animated fadeInUp'
                        data-aos='fade-right'
                        data-aos-delay='200'
                        data-aos-duration='1500'
                      >
                        <li>
                          <FaAngleDoubleRight /> Three HomePage Layout
                        </li>
                        {/* <li>
                          <FaAngleDoubleRight /> Three RTL HomePage Layout
                        </li> */}
                        <li>
                          <FaAngleDoubleRight /> Every Section Are Unique!
                        </li>
                        <li>
                          <FaAngleDoubleRight /> Working Contact Form.
                        </li>
                        <li>
                          <FaAngleDoubleRight /> Total 15 Pages Included.
                        </li>
                        <li>
                          <FaAngleDoubleRight /> Easy Code Maintain.
                        </li>
                        <li>
                          <FaAngleDoubleRight /> Full Responsive & Cross Browser
                          Support.
                        </li>
                        <li>
                          <FaAngleDoubleRight /> Using React Router Dom with
                          functional Component.
                        </li>
                        <li>
                          <FaAngleDoubleRight /> Using Latest Bootstrap 5 &
                          Include SCSS
                        </li>
                        <li>
                          <FaAngleDoubleRight /> Coming Soon HomePage Layout
                          Four, Five & Six Version.{" "}
                        </li>
                        <li>
                          <FaAngleDoubleRight /> Coming Soon NextJS, Wordpress
                          Theme Version
                        </li>
                      </ul>
                      <div
                        className='button-intro wow animated fadeInUp'
                        data-aos='fade-right'
                        data-aos-delay='100'
                        data-aos-duration='1500'
                      >
                        <div className='btn-section'>
                          <Link to='/index-1'>
                            <span className='btn-shape-normal-outline left'>
                              <span>View Demo</span>
                            </span>
                          </Link>
                        </div>
                        {/* <div className='btn-section'>
                          <Link to='/rtl/index-1'>
                            <span className='btn-shape-normal-outline right'>
                              <span>View RTL Demo</span>
                            </span>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div
                  className='right-side wow animated fadeInUp'
                  data-aos='fade-left'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='wrapper'>
                    <div className='left-tab'>
                      <div className='img-file img-file-1'>
                        <img
                          className='img-fluid'
                          src='./assets/img/demo/demo_7.png'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Counter  Data */}
        <div
          className='counter-view'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1500'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 inner'>
                <TrackVisibility once>
                  {({ isVisible }) =>
                    isVisible && (
                      <h2 className='counter'>
                        <CountUp delay={0} start={0} end={3} />
                      </h2>
                    )
                  }
                </TrackVisibility>
                <h3>HomePage</h3>
              </div>
              <div className='col-md-4 inner'>
                <TrackVisibility once>
                  {({ isVisible }) =>
                    isVisible && (
                      <h2 className='counter'>
                        <CountUp delay={0} start={0} end={3} />
                      </h2>
                    )
                  }
                </TrackVisibility>
                <h3>RTL HomePage Coming</h3>
              </div>
              <div className='col-md-4 inner'>
                <TrackVisibility once>
                  {({ isVisible }) =>
                    isVisible && (
                      <h2 className='counter'>
                        <CountUp delay={0} start={0} end={12} />
                      </h2>
                    )
                  }
                </TrackVisibility>
                <h3>Inner Pages</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Inner Items */}
        <div className='inner-items '>
          {/* Home Page all */}
          <div id='allHome' className='container mt-80'>
            <div className='row header'>
              <div className='col-12'>
                <h2>
                  Introduction Our All <br />{" "}
                  <span className='theme-color'>Awesome And Unique</span> Home
                  Pages
                </h2>
              </div>
            </div>
            <div
              className='row mt-50'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='300ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/demo_1.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/index-1'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Home Version - 1</h3>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/demo_2.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/index-2'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Home Version - 2 </h3>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/demo_3.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/index-3'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Home Version - 3 </h3>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper  wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file '>
                      <img
                        className='img-fluid blur'
                        src='./assets/img/demo/demo_3.png'
                        alt=''
                      />
                    </div>
                    <h3>
                      Home Version - 4 <br /> (Coming Soon){" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper  wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file '>
                      <img
                        className='img-fluid blur'
                        src='./assets/img/demo/demo_3.png'
                        alt=''
                      />
                    </div>
                    <h3>
                      Home Version - 5 <br /> (Coming Soon){" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper  wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file '>
                      <img
                        className='img-fluid blur'
                        src='./assets/img/demo/demo_3.png'
                        alt=''
                      />
                    </div>
                    <h3>
                      Home Version - 6 <br /> (Coming Soon){" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RTL Home Page all */}
          {/* <div id='allRtlHome' className='container mt-80'>
            <div className='row header'>
              <div className='col-12'>
                <h2>
                  Introduction All{" "}
                  <span className='theme-color'>
                    <br /> RTL
                  </span>{" "}
                  Home Pages
                </h2>
              </div>
            </div>
            <div className='row mt-50'>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='300ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-home-1.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/index-1'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Home Version - 3 </h3>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='600ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-home-2.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/index-2'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Home Version - 2</h3>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='800ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-home-3.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/index-3'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Home Version - 3</h3>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper  wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='300ms'
                >
                  <div className='items '>
                    <div className='img-file '>
                      <img
                        className='img-fluid blur'
                        src='./assets/img/demo/demo_3.png'
                        alt=''
                      />
                    </div>
                    <h3>
                      RTL Home Version - 4 <br /> (Coming Soon){" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper  wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='600ms'
                >
                  <div className='items '>
                    <div className='img-file '>
                      <img
                        className='img-fluid blur'
                        src='./assets/img/demo/demo_3.png'
                        alt=''
                      />
                    </div>
                    <h3>
                      RTL Home Version - 5 <br /> (Coming Soon){" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper  wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='800ms'
                >
                  <div className='items '>
                    <div className='img-file '>
                      <img
                        className='img-fluid blur'
                        src='./assets/img/demo/demo_3.png'
                        alt=''
                      />
                    </div>
                    <h3>
                      RTL Home Version - 6 <br /> (Coming Soon){" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Inner Page all */}
          <div id='innerPage' className='container mt-80'>
            <div className='row header'>
              <div className='col-12'>
                <h2>
                  Explore Our <span className='theme-color'>All Inner</span>{" "}
                  Pages{" "}
                </h2>
              </div>
            </div>
            <div className='row mt-50'>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/aboutUs.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/about'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>About Us</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='600ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-about.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/about'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL About Us</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/service.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/services'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Service</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='300ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-service.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/services'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Service</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/service-details.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/services-details'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Service Details</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='800ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-service-details.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/services-details'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Service Details</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/team.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/team'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Our Team</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='600ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-team.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/team'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Our Team</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/team-details.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/team-details'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Team Details</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='300ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-team-details.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/team-details'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Team Details</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/projectPage.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/project'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Projects</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='800ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-project.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/project'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Projects</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/project-details.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/project-details'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Project Details</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='600ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-project-details.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/project-details'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Project Details</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/price.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/pricing'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Price &amp; Plan</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='300ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-price.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/pricing'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Price &amp; Plan</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/faq.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/faq'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>FAQ</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='800ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-faq.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/faq'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL FAQ</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/blog.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/blog'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Blog</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='600ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-blog.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/blog'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Blog</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/blog-details.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/blog-details'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Blog Details</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='300ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-blog-details.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/blog-details'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Blog Details</h3>
                  </div>
                </div>
              </div> */}
              <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/contactPage.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/contact'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>Contact</h3>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div
                  className='wrapper wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='800ms'
                >
                  <div className='items '>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/demo/rtl-contact.png'
                        alt=''
                      />
                      <div className='btn-section d-flex justify-content-center'>
                        <Link to='/rtl/contact'>
                          <span className='btn-shape-normal-outline purchase'>
                            <FaEye /> <span>View Demo</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <h3>RTL Contact</h3>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* Feature Intro */}
        <div id='feature' className='feature mt-80 bg-gray py-60'>
          <div className='container'>
            <div className='row header'>
              <div className='col'>
                <div className='wrapper'>
                  <h2>Core Features</h2>
                  <p className='px-100'>
                    There are amazing color combinations and new features. The
                    template is built with unit and attractive design
                    management.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div
              className='row'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='2000'
            >
              <div className='col-lg-3 col-md-6'>
                <div className='item wow animated fadeInUp'>
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/page.png'
                      alt=''
                    />
                    <p>3 Awesome HomePages</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='450ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/rtl.png'
                      alt=''
                    />
                    <p>Coming RTL HomePages</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='600ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/content.png'
                      alt=''
                    />
                    <p>12 Inner Pages</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='750ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/speed.png'
                      alt=''
                    />
                    <p>Speed Optimized</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='300ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/responsive.png'
                      alt=''
                    />
                    <p>Fully Responsive</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='450ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/sass.png'
                      alt=''
                    />
                    <p>Include SCSS File</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='450ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/bootstrap.png'
                      alt=''
                    />
                    <p>Latest Bootstrap 5</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='600ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/w3.png'
                      alt=''
                    />
                    <p>100% W3C Validation </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='750ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/firefox.png'
                      alt=''
                    />
                    <p>Cross Browser Support</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='300ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/code.png'
                      alt=''
                    />
                    <p>Clean Coded</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='450ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/programming.png'
                      alt=''
                    />
                    <p>Modern Design</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='600ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/font.png'
                      alt=''
                    />
                    <p>Google Fonts</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='750ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/coding.png'
                      alt=''
                    />
                    <p>Easy Customizable</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='300ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/contact-form.png'
                      alt=''
                    />
                    <p>Contact With Email JS</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='450ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/folder.png'
                      alt=''
                    />
                    <p>Well Documented</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='600ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/customer-service.png'
                      alt=''
                    />
                    <p>24/7 Support</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='750ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/control.png'
                      alt=''
                    />
                    <p>Easy To Maintain Code Format</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='750ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/nextjs.png'
                      alt=''
                    />
                    <p>Coming Soon NextJS Version</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='750ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/html.png'
                      alt=''
                    />
                    <p>Have HTML Version</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='750ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/wordpress.png'
                      alt=''
                    />
                    <p>Coming Soon Wordpress Theme</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='item wow animated fadeInUp'
                  data-wow-duration='1.5'
                  data-wow-delay='750ms'
                >
                  <div>
                    <img
                      className='img-fluid'
                      src='./assets/img/demo/coming.png'
                      alt=''
                    />
                    <p>Coming More HomePages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <section className='footer-demo'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='wrapper'>
                <div className='img-file'>
                  <img src='./assets/img/common/Logo_White.png' alt='' />
                  <p>
                    RORALEX is a modern design combination React template. This
                    template can be used very nicely for a building construction
                    or any construction related services. This template contains
                    a total of 15 pages. There are also RTL facilities coming
                    soon. The template is made with unique design combination.
                    It is Our React version. Have already HTML Version. We are
                    coming soon with WordPress theme version of this template.
                  </p>
                </div>
                <div className='btn-section d-flex justify-content-center'>
                  <a href='https://www.templatemonster.com/authors/themesoft69/'>
                    <span className='btn-shape-normal-outline purchase'>
                      <FaShoppingCart /> <span>Purchase Now</span>
                    </span>
                  </a>
                </div>
                <br />
                <hr />
                <div className='d-flex justify-content-center'>
                  <a
                    href='https://www.templatemonster.com/authors/themesoft69/'
                    className='text-center text-white '
                  >
                    © By <strong>themesoft69</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo;

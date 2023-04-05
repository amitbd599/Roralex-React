import React, { useState } from "react";
import { FaAngleDoubleRight, FaCheckCircle, FaPlay } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const AboutThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* About Section version three start */}
      <section className='about-section-version-three pt-100 pb-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='left-side'>
                <div className='wrapper'>
                  <div className='intro-header'>
                    <h3>About Our building construction</h3>
                  </div>
                  <div className='inner-intro'>
                    <h2>
                      Your trusted <span className='theme-color'>partner</span>{" "}
                      <br /> for trade!
                    </h2>
                    <p>
                      Lobortis ipsam potenti necessitatibus integer unde
                      quisque, condimentum doloribus cupiditate. Class soluta
                      asperiores recusandae dolorum, orci! Elementum fermentum
                      montes lacinia. Conubia quos laoreet aperiam orci.
                    </p>
                    <ul>
                      <li>
                        <FaAngleDoubleRight />
                        <span>
                          Consectetur ac nisi venenatis consequat varius
                          vestibulum phasellus.
                        </span>
                      </li>
                      <li>
                        <FaAngleDoubleRight />
                        <span>
                          A inceptos justo a tincidunt facilisis praesent in
                          convallis accumsan.
                        </span>
                      </li>
                      <li>
                        <FaAngleDoubleRight />
                        <span>
                          Convallis accumsan adipiscing leo a eleifend senectus
                          diam proin.
                        </span>
                      </li>
                      <li>
                        <FaAngleDoubleRight />
                        <span>
                          Asperiores recusandae, orci! Elementum fermentum
                          montes.
                        </span>
                      </li>
                    </ul>
                    <div className='hub-show'>
                      <div className='inner-hub'>
                        <h2>
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className='counter'>
                                  <CountUp delay={0} start={0} end={450} />+
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p>HAPPY CLIENTS</p>
                      </div>
                      <div className='inner-hub'>
                        <h2>
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className='counter'>
                                  <CountUp delay={0} start={0} end={5680} />+
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p>PROJECT DONE</p>
                      </div>
                      <div className='inner-hub'>
                        <h2>
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className='counter'>
                                  <CountUp delay={0} start={0} end={3690} />+
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p>HAPPY CLIENTS</p>
                      </div>
                    </div>
                    <div className='btn-section'>
                      <Link to='/about'>
                        <span className='btn-shape-normal-outline'>
                          <span>More About Us</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className='right-side'>
                <div className='wrapper'>
                  <div className='top-img'>
                    <img
                      className='img-fluid'
                      src='./assets/img/about-us/about-4.png'
                      alt=''
                    />
                  </div>
                  <div className='mid-img'>
                    <img
                      className='img-fluid'
                      src='./assets/img/about-us/about-5.png'
                      alt=''
                    />
                  </div>
                  <div className='pop-img'>
                    <div className='inner'>
                      <img src='./assets/img/about-us/about-6.png' alt='' />
                      <div
                        className='vide-button'
                        onClick={() => setOpen(true)}
                      >
                        <span className='popup-video'>
                          <FaPlay />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='XM6kTQPzzpQ'
          onClose={() => setOpen(false)}
        />
      </section>
      {/* About Section version three end */}
    </>
  );
};

export default AboutThree;

import React, { useState } from "react";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
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
                        <i className='fa-solid fa-arrow-right-from-bracket' />
                        <span>
                          Consectetur ac nisi venenatis consequat varius
                          vestibulum phasellus.
                        </span>
                      </li>
                      <li>
                        <i className='fa-solid fa-arrow-right-from-bracket' />
                        <span>
                          A inceptos justo a tincidunt facilisis praesent in
                          convallis accumsan.
                        </span>
                      </li>
                      <li>
                        <i className='fa-solid fa-arrow-right-from-bracket' />
                        <span>
                          Convallis accumsan adipiscing leo a eleifend senectus
                          diam proin.
                        </span>
                      </li>
                      <li>
                        <i className='fa-solid fa-arrow-right-from-bracket' />
                        <span>
                          Asperiores recusandae, orci! Elementum fermentum
                          montes.
                        </span>
                      </li>
                    </ul>
                    <div className='hub-show'>
                      <div className='inner-hub'>
                        <h2>
                          <span className='counter'>450</span>+
                        </h2>
                        <p>HAPPY CLIENTS</p>
                      </div>
                      <div className='inner-hub'>
                        <h2>
                          <span className='counter'>5680</span>+
                        </h2>
                        <p>PROJECT DONE</p>
                      </div>
                      <div className='inner-hub'>
                        <h2>
                          <span className='counter'>3690</span>+
                        </h2>
                        <p>HAPPY CLIENTS</p>
                      </div>
                    </div>
                    <div className='btn-section'>
                      <a href='about.html'>
                        <span className='btn-shape-normal-outline'>
                          <span>More About Us</span>
                        </span>
                      </a>
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
                      <div className='vide-button'>
                        <a
                          href='https://www.youtube.com/watch?v=LXsdt6RMNfY'
                          className='popup-video'
                        >
                          <i className='fa-solid fa-play' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section version three end */}
    </>
  );
};

export default AboutThree;

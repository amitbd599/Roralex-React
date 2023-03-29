import React from "react";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
const AboutOne = () => {
  return (
    <>
      {/* About Section version one start */}
      <section className='about-section-version-one  pt-40 pb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='left-side '>
                <div className='wrapper'>
                  <div className='img-shape'>
                    <img
                      className='img-fluid'
                      src='./assets/img/about-us/about-1.png'
                      alt='Roralex'
                    />
                  </div>
                  <div className='pop-img'>
                    <div className='inner'>
                      <img
                        src='./assets/img/about-us/about-2.png'
                        alt='Roralex'
                      />
                      <div className='vide-button'>
                        <a
                          href='https://www.youtube.com/watch?v=Ke90Tje7VS0'
                          className='popup-video'
                        >
                          <FaPlay />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='project-count'>
                    <div>
                      <img
                        className='img-fluid'
                        src='./assets/img/icons/icon-5.png'
                        alt='Roralex'
                      />
                    </div>
                    <div>
                      <h3>
                        <span className='counter'>5000</span>+
                      </h3>
                      <p>Projects Done</p>
                    </div>
                  </div>
                  <div className='team-count'>
                    <h3>EXPERT TEAM</h3>
                    <h2>
                      <span className='counter'>30</span>k+
                    </h2>
                    <p>Top 50 Country Base</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='right-side'>
                <div className='wrapper'>
                  <div className='intro-header'>
                    <h3>More About Company</h3>
                  </div>
                  <div className='inner-intro'>
                    <h2>
                      Make your business{" "}
                      <span className='theme-color'>Stronger</span> with modern
                      technology.
                    </h2>
                    <p>
                      If your Comprehensive Car Insurance mentions ‘Agency
                      Repair’ then your car is going to be repaired at the
                      dealership from where you purchased the car. This service
                      is safe and reliable but can be expensive too.
                    </p>
                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>Reliable and safe service.</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Genuine spare parts are used for repair..</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Detailed and thorough inspection.</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>This service comes with an additional cost.</span>
                      </li>
                    </ul>
                    <hr />
                    <div className='hub-show'>
                      <div className='inner-hub'>
                        <div>
                          <img
                            src='./assets/img/icons/icon-6.png'
                            alt='Roralex'
                          />
                        </div>
                        <p>Powerful workflow attractive design</p>
                      </div>
                      <div className='inner-hub'>
                        <div>
                          <img
                            src='./assets/img/icons/icon-7.png'
                            alt='Roralex'
                          />
                        </div>
                        <p>Process of constructing building infrastructure</p>
                      </div>
                    </div>
                    <a href='about.html'>
                      <div className='btn-section'>
                        <span className='btn-shape-normal-outline'>
                          <span>More About Us</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='overlay-shape-img'>
          <img src='./assets/img/shape/Union.png' alt='Roralex' />
        </div>
      </section>
      {/* About Section version one end */}
    </>
  );
};

export default AboutOne;

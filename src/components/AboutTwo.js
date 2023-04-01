import React, { useState } from "react";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
const AboutTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* About Section version two start */}
      <section className='about-section-version-two  py-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='left-side'>
                <div className='wrapper'>
                  <div className='img-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/about-us/about-3.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='right-side'>
                <div className='wrapper'>
                  <div className='intro'>
                    <h3>About Our Company</h3>
                    <h2>
                      We Provide the{" "}
                      <span className='theme-color'>best quality</span>
                      service and construction
                    </h2>
                    <p>
                      Directors of the company are motivated to re-invest
                      revenue of the company rather than dividend sharing
                      because the directors desire to create products, services,
                      and employment to establish.”
                    </p>
                  </div>
                  <div className='list-data'>
                    <ul>
                      <li>
                        <i className='fa-solid fa-circle-small' />
                        <span>
                          The Floor Area Ratio (FAR) is the total sum of the
                          whole.
                        </span>
                      </li>
                      <li>
                        <i className='fa-solid fa-circle-small' />
                        <span>
                          FAR will make you understand what will be the height
                          and area of floors..
                        </span>
                      </li>
                      <li>
                        <i className='fa-solid fa-circle-small' />
                        <span>
                          Constructing a building according to the total size of
                          the land area.
                        </span>
                      </li>
                    </ul>
                    <div className='btn-section'>
                      <a href='about.html'>
                        <span className='btn-shape-normal-outline'>
                          <span>Learn More</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section version two end */}
    </>
  );
};

export default AboutTwo;

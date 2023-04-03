import React from "react";
import { FaCheck } from "react-icons/fa";

const WhyChooseUsFour = () => {
  return (
    <>
      {/* Why Choose Us Section version Four start */}
      <section className='whyChooseUs-section-version-four bg-gray py-100 '>
        {/* Header Intro Version One */}
        <div className='header-intro-version-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-10 col-xl-7'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>WHY CHOOSE US</h3>
                    <div className='shape-img'>
                      <img src='./assets/img/shape/Union-1.svg' alt='' />
                    </div>
                  </div>
                  <div className='inner-text'>
                    <h2>
                      We Providing Best <br /> construction{" "}
                      <span className='theme-color'>Feature</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Inner Card Items */}
        <div className='inner-card-items'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-7'>
                <div className='left-side'>
                  <div className='tabs-inner'>
                    <ul className='tabs'>
                      <li>
                        <a href='#tab1'>Administrator</a>
                      </li>
                      <li>
                        <a href='#tab2'>Services</a>
                      </li>
                      <li>
                        <a href='#tab3'>Features</a>
                      </li>
                    </ul>
                    <section className='tab_content_wrapper'>
                      <div className='tab_content' id='tab1'>
                        <div className='wrapper'>
                          <div className='left'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/about-us/about-7.png'
                                alt=''
                              />
                            </div>
                          </div>
                          <div className='right'>
                            <h2>Best Feature Of Building construction </h2>
                            <ul>
                              <li>
                                <FaCheck />
                                Design Details and Full Feasibility Study.
                              </li>
                              <li>
                                <FaCheck />
                                Incorporation of Permits into Design.
                              </li>
                              <li>
                                <FaCheck />
                                Choosing General Contractor &amp; Construction.
                              </li>
                              <li>
                                <FaCheck />
                                Research, Surveys, and Sketches.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='tab_content' id='tab2'>
                        <div className='wrapper'>
                          <div className='left'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/about-us/about-8.png'
                                alt=''
                              />
                            </div>
                          </div>
                          <div className='right'>
                            <h2>Egyptian stone diffused the eastern.</h2>
                            <ul>
                              <li>
                                <FaCheck />
                                The first surviving construction drawings.
                              </li>
                              <li>
                                <FaCheck />
                                In contrast to stone technology remained.
                              </li>
                              <li>
                                <FaCheck />
                                Developed the final of columns and moldings.
                              </li>
                              <li>
                                <FaCheck />A technique borrowed from stone
                                construction.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='tab_content' id='tab3'>
                        <div className='wrapper'>
                          <div className='left'>
                            <div className='img-file'>
                              <img
                                src='./assets/img/about-us/about-9.png'
                                alt=''
                              />
                            </div>
                          </div>
                          <div className='right'>
                            <h2>Although stone technology confined. </h2>
                            <ul>
                              <li>
                                <FaCheck />
                                Perhaps the spectacular building achievement.
                              </li>
                              <li>
                                <FaCheck />
                                It was a huge stone tower nearly as the Great.
                              </li>
                              <li>
                                <FaCheck />
                                Another example of a new stone technology.
                              </li>
                              <li>
                                <FaCheck />
                                Thus it does not take full advantage of the
                                great.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className='col-xl-5'>
                <div className='right-side'>
                  <div className='intro'>
                    <h2>
                      Construction and Culture Travel - Producing Memories for a
                      Lifetime
                    </h2>
                    <h3>Construction</h3>
                  </div>
                  <ul>
                    <li>
                      <div>
                        <img src='./assets/img/icons/icon-8.svg' alt='' />
                      </div>
                      <div>
                        <span>Process 01</span>
                        <span>Coordination and Interpretation</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src='./assets/img/icons/icon-9.svg' alt='' />
                      </div>
                      <div>
                        <span>Process 02</span>
                        <span>Design Details Full Feasibility</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section version Four End */}
    </>
  );
};

export default WhyChooseUsFour;

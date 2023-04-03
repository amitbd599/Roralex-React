import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamDetailsInner = () => {
  return (
    <>
      {/* Single Team Details Section version One start */}
      <section className='single-team-details-version-one'>
        {/* Person Details */}
        <div className='person-details'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5'>
                <div className='left-side'>
                  <div className='img-file'>
                    <img
                      className='img-fluid'
                      src='./assets/img/team/team-14.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='right-side'>
                  <div className='wrapper'>
                    <div className='name'>
                      <h2>Jason F. Herrick</h2>
                      <p>Marketing Manager</p>
                    </div>
                    <div className='data'>
                      <ul>
                        <li>
                          <span>Age:</span>
                          <span>36</span>
                        </li>
                        <li>
                          <span>Work Progress:</span>
                          <span> 96% (Positive)</span>
                        </li>
                        <li>
                          <span>Email:</span>
                          <span>JasonFHerrick@teleworm.us</span>
                        </li>
                        <li>
                          <span>Phone Number:</span>
                          <span> 903-382-0132</span>
                        </li>
                        <li>
                          <span>GUID:</span>
                          <span>82f25418-8281-45a2-9ad7-77ca8dd9adf2</span>
                        </li>
                      </ul>
                    </div>
                    <div className='review'>
                      <span>
                        <FaQuoteLeft />
                      </span>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                    <div>
                      <Link to='/contact'>
                        <span className='btn-shape-normal-outline'>
                          <span>Get In Touch</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* History & Skill */}
        <div className='history-skill'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <hr />
                  <h2>Working History &amp; Skill</h2>
                  <p>
                    Building construction is the process of adding structure to
                    real property. The vast majority of building construction
                    projects are small renovations, such as the addition of a
                    room, or renovation of a bathroom. Often, the owner of the
                    property acts as a laborer, paymaster, and design team for
                    the entire project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Activities */}
        <div className='activities'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='left-side'>
                  <div className='wrapper'>
                    <div className='heading-text'>
                      <h2>FAQ Ask For Me</h2>
                    </div>
                    <div className='accordion' id='accordionExample'>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingOne'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseOne'
                            aria-expanded='false'
                            aria-controls='collapseOne'
                          >
                            Physical Strength and Endurance.
                          </button>
                        </h2>
                        <div
                          id='collapseOne'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <p>
                              It should come as no surprise that construction is
                              a physically demanding job. Considerable strength
                              and stamina are essential for carrying out many
                              tasks on a job site. Almost 50 percent of
                              construction jobs will require heavy lifting work
                              and physical strength{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingTwo'>
                          <button
                            className='accordion-button'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'
                          >
                            What problem does your business solve?
                          </button>
                        </h2>
                        <div
                          id='collapseTwo'
                          className='accordion-collapse collapse show'
                          aria-labelledby='headingTwo'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <p>
                              It should come as no surprise that construction is
                              a physically demanding job. Considerable strength
                              and stamina are essential for carrying out many
                              tasks on a job site. Almost 50 percent of
                              construction jobs will require heavy lifting work
                              and physical strength.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingThree'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseThree'
                            aria-expanded='false'
                            aria-controls='collapseThree'
                          >
                            How does your business generate income?
                          </button>
                        </h2>
                        <div
                          id='collapseThree'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingThree'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <p>
                              It should come as no surprise that construction is
                              a physically demanding job. Considerable strength
                              and stamina are essential for carrying out many
                              tasks on a job site. Almost 50 percent of
                              construction jobs will require heavy lifting work
                              and physical strength{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingFour'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseFour'
                            aria-expanded='false'
                            aria-controls='collapseThree'
                          >
                            What are five examples of service industry?
                          </button>
                        </h2>
                        <div
                          id='collapseFour'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingFour'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <p>
                              It should come as no surprise that construction is
                              a physically demanding job. Considerable strength
                              and stamina are essential for carrying out many
                              tasks on a job site. Almost 50 percent of
                              construction jobs will require heavy lifting work
                              and physical strength{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='right-side'>
                  <div className='heading-text'>
                    <h2>Skill And Activities</h2>
                    <p>
                      Construction work also requires excellent eyesight.
                      Skilled workers must be able to read documents, examine
                      details at close and far range, and see gauges and dials
                      to operate equipment properly.
                    </p>
                  </div>
                  <div className='skill-bar'>
                    <div className='skill-list'>
                      <div className='intro'>
                        <h2>Building and Engineering Knowledge</h2>
                        <h2>
                          <span className='counter'>72</span>%
                        </h2>
                      </div>
                      <div
                        className='progress'
                        role='progressbar'
                        aria-label='Basic example'
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className='progress-bar wow slideInLeft animated'
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                    </div>
                    <div className='skill-list'>
                      <div className='intro'>
                        <h2>Strong Reading and Math Skills</h2>
                        <h2>
                          <span className='counter'>92</span>%
                        </h2>
                      </div>
                      <div
                        className='progress'
                        role='progressbar'
                        aria-label='Basic example'
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className='progress-bar wow slideInLeft animated'
                          style={{ width: "92%" }}
                        />
                      </div>
                    </div>
                    <div className='skill-list'>
                      <div className='intro'>
                        <h2>Experience with Technology</h2>
                        <h2>
                          <span className='counter'>60</span>%
                        </h2>
                      </div>
                      <div
                        className='progress'
                        role='progressbar'
                        aria-label='Basic example'
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className='progress-bar wow slideInLeft animated'
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                    <div className='skill-list'>
                      <div className='intro'>
                        <h2>Problem-Solving and Decision-Making Skills</h2>
                        <h2>
                          <span className='counter'>80</span>%
                        </h2>
                      </div>
                      <div
                        className='progress'
                        role='progressbar'
                        aria-label='Basic example'
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className='progress-bar wow slideInLeft animated'
                          style={{ width: "80%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Single Team Details Section version One end */}
    </>
  );
};

export default TeamDetailsInner;

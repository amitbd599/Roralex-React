import React from "react";
import { useState } from "react";
import {
  FaCommentAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPlay,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
const ProjectDetailsInner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Project Details Inner Section version One start */}
      <section className='project-details-inner-section-one bg-white py-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='left-side'>
                <div className='wrapper'>
                  <h2>
                    Basic Concepts in the Development of Construction Plans.
                  </h2>
                  <div className='main-img mt-20'>
                    <img
                      className='img-fluid'
                      src='./assets/img/project/project-15.png'
                      alt=''
                    />
                  </div>
                  <br />
                  <div className='d-flex gap-4 mt-10'>
                    <div>
                      <p>
                        Construction planning is a fundamental and challenging
                        activity in the management and execution of construction
                        projects. It involves the choice of technology, the
                        definition of work tasks, the estimation of the required
                        resources and durations for individual tasks, and the
                        identification of any interactions among the different
                        work tasks.
                      </p>
                    </div>
                  </div>
                  <div className='mt-10'>
                    <h3 className='theme-color'>Construction Plans</h3>
                    <p className='mt-10'>
                      Like a detective, a planner begins with a result (i.e. a
                      facility design) and must synthesize the steps required to
                      yield this result. Essential aspects of construction
                      planning include the generation of required activities,
                      analysis of the implications of these activities, and
                      choice among the various alternative means of performing
                      activities. In contrast to a detective discovering a
                      single train of events, however, construction planners
                      also face the normative problem of choosing the best among
                      numerous alternative plans. Moreover, a detective is faced
                      with an observable result, whereas a planner must imagine
                      the final facility as described in the plans and
                      specifications. Like a detective, a planner begins with a
                      result (i.e. a facility design) and must synthesize the
                      steps required to yield this result. Essential aspects of
                      construction planning include the generation of required
                      activities, analysis of the implications of these
                      activities, and choice among the various alternative means
                      of performing activities. In contrast to a detective
                      discovering a single train of events, however,
                      construction planners also face the normative problem of
                      choosing the best among numerous alternative plans.
                      Moreover, a detective is faced with an observable result,
                      whereas a planner must imagine the final facility as
                      described in the plans and specifications.
                    </p>
                  </div>
                  <div className='d-flex gap-4 mt-25'>
                    <div>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-16.png'
                        alt=''
                      />
                    </div>
                    <div>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-17.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='mt-20'>
                    <h3 className='theme-color'>Reporting and Cost Control</h3>
                    <p className='mt-10'>
                      Essential aspects of construction planning include the
                      generation of required activities, analysis of the
                      implications of these activities, and choice among the
                      various alternative means of performing activities. In
                      contrast to a detective discovering a single train of
                      events, however, construction planners also face the
                      normative problem of choosing the best among numerous
                      alternative plans. Moreover, a detective is faced with an
                      observable result, whereas a planner must imagine the
                      final facility as described in the plans and
                      specifications.
                    </p>
                  </div>
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
                        Aenean suscipit eget mi act fermentum phasellus
                        vulputate.
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
                          Residential buildings, like single and multi-family
                          homes. Commercial buildings, such as offices or
                          warehouses. Industrial facilities, like factories or
                          large-scale production facilities. Infrastructure
                          projects, such as roads, bridges, airports, or
                          wastewater systems. Essential aspects of construction
                          planning include the generation of required
                          activities, analysis of the implications of these
                          activities, and choice among the various alternative
                          means of performing activities.{" "}
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
                        Wooden frame buildings have been around for many years
                        and in fact.
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
                          Residential buildings, like single and multi-family
                          homes. Commercial buildings, such as offices or
                          warehouses. Industrial facilities, like factories or
                          large-scale production facilities. Infrastructure
                          projects, such as roads, bridges, airports, or
                          wastewater systems. Essential aspects of construction
                          planning include the generation of required
                          activities, analysis of the implications of these
                          activities, and choice among the various alternative
                          means of performing activities.
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
                        Once the plan is in hand, the finance and total cost is
                        estimated.
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
                          Residential buildings, like single and multi-family
                          homes. Commercial buildings, such as offices or
                          warehouses. Industrial facilities, like factories or
                          large-scale production facilities. Infrastructure
                          projects, such as roads, bridges, airports, or
                          wastewater systems. Essential aspects of construction
                          planning include the generation of required
                          activities, analysis of the implications of these
                          activities, and choice among the various alternative
                          means of performing activities.{" "}
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
                        Before starting a building construction, the owner must
                        make sure
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
                          Residential buildings, like single and multi-family
                          homes. Commercial buildings, such as offices or
                          warehouses. Industrial facilities, like factories or
                          large-scale production facilities. Infrastructure
                          projects, such as roads, bridges, airports, or
                          wastewater systems. Essential aspects of construction
                          planning include the generation of required
                          activities, analysis of the implications of these
                          activities, and choice among the various alternative
                          means of performing activities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mission-vision mt-40'>
                  <div className='mission'>
                    <h2>
                      <span>01.</span>
                      <span>Our Mission</span>
                    </h2>
                    <p>
                      Known as an IT managed services provider, an IT support
                      company is comprised of professional IT specialists who
                      make up the company's core IT team. The team provides
                      your. business with expert guidance and management for a
                      variety of information technology needs. A solution is an
                      implementation of people, processes.
                    </p>
                  </div>
                  <div className='vision mt-4 mt-sm-0'>
                    <h2>
                      <span>02.</span>
                      <span>Our Vision</span>
                    </h2>
                    <p>
                      Known as an IT managed services provider, an IT support
                      company is comprised of professional IT specialists who
                      make up the company's core IT team. The team provides
                      your. business with expert guidance and management for a
                      variety of information technology needs. A solution is an
                      implementation of people, processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              {/* Widget Section */}
              <div className='widget'>
                {/* Widget four */}
                <div className='widget-four'>
                  <div className='wrapper'>
                    <h3>Want To Tell Something</h3>
                    <div className='input-inner'>
                      <div className='input'>
                        <span>
                          <FaUserAlt />
                        </span>
                        <input type='text' placeholder='Enter Your Name' />
                      </div>
                      <div className='input'>
                        <span>
                          <FaEnvelope />
                        </span>
                        <input type='text' placeholder='Enter Your Email ID' />
                      </div>
                      <div className='text-area'>
                        <span>
                          <FaCommentAlt />
                        </span>
                        <textarea
                          name='comment'
                          rows={4}
                          cols={35}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <button className='btn-shape-normal-outline'>
                      <span>Get A Quote</span>
                    </button>
                  </div>
                </div>
                {/* Widget Two */}
                <div className='widget-two mt-40'>
                  <div className='wrapper'>
                    <h3>Watch Demo</h3>
                    <div className='img-file'>
                      <div className='pop-img'>
                        <div className='inner'>
                          <img src='./assets/img/widgets/img-1.png' alt='' />
                          <div className='vide-button'>
                            <span
                              className='popup-video'
                              onClick={() => setOpen(true)}
                            >
                              <FaPlay />
                            </span>
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
                  </div>
                </div>
                {/* Widget Five */}
                <div className='widget-five mt-40'>
                  <div className='wrapper'>
                    <h3>Project Details :</h3>
                    <ul>
                      <li>
                        <span>Client:</span>
                        Alex Johan
                      </li>
                      <li>
                        <span>Category:</span>
                        roadway rehabilitation
                      </li>
                      <li>
                        <span>Values:</span>$ 3,63,630.86
                      </li>
                      <li>
                        <span>Country:</span>
                        USA
                      </li>
                      <li>
                        <span>Total Worker:</span>
                        1205 Person
                      </li>
                      <li>
                        <span>Duration:</span>2 years
                      </li>
                      <li>
                        <span>Project Start:</span>
                        2-02-2020
                      </li>
                      <li>
                        <span>Project End:</span>
                        2-04-2022
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Details Inner Section version One End */}

      {/* Latest Projects Section version two start */}
      <section className='latest-project-version-two bg-gray py-60'>
        {/* Header Intro Version Two */}
        <div className='header-intro-version-two'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h2>More Latest Projects</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Inner Items Data */}
        <div className='project-body'>
          <div className='container'>
            {/* Start Project Filter Items Area */}
            <div id='project-version-two' className='row project-version-two'>
              <div className='col-xl-3 col-lg-4 col-md-6 pro5 pro2'>
                <div className='project-item'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-1.png'
                        alt=''
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <h2>construction site</h2>
                          <p>
                            civil engineer and construction worker manager
                            holding digital tablet and blueprints talking
                          </p>
                          <div className='location'>
                            <span>
                              <FaMapMarkerAlt />
                            </span>
                            <span>North America</span>
                          </div>
                        </div>
                      </div>
                      <div className='btn-section'>
                        <Link to='/project-details'>
                          <span className='btn-shape-normal-outline'>
                            <span>View Info</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 pro3 pro4'>
                <div className='project-item'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-2.png'
                        alt=''
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <h2>Integrating Digital</h2>
                          <p>
                            civil engineer and construction worker manager
                            holding digital tablet and blueprints talking
                          </p>
                          <div className='location'>
                            <span>
                              <FaMapMarkerAlt />
                            </span>
                            <span>Zappia Drive</span>
                          </div>
                        </div>
                      </div>
                      <div className='btn-section'>
                        <Link to='/project-details'>
                          <span className='btn-shape-normal-outline'>
                            <span>View Info</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 pro1 pro5 pro2'>
                <div className='project-item'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-3.png'
                        alt=''
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <h2>Building Plan</h2>
                          <p>
                            civil engineer and construction worker manager
                            holding digital tablet and blueprints talking
                          </p>
                          <div className='location'>
                            <span>
                              <FaMapMarkerAlt />
                            </span>
                            <span>Meadowcrest Lane</span>
                          </div>
                        </div>
                      </div>
                      <div className='btn-section'>
                        <Link to='/project-details'>
                          <span className='btn-shape-normal-outline'>
                            <span>View Info</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 pro4 pro3'>
                <div className='project-item'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-4.png'
                        alt=''
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <h2>Insurance Building</h2>
                          <p>
                            civil engineer and construction worker manager
                            holding digital tablet and blueprints talking
                          </p>
                          <div className='location'>
                            <span>
                              <FaMapMarkerAlt />
                            </span>
                            <span>Passaic Street</span>
                          </div>
                        </div>
                      </div>
                      <div className='btn-section'>
                        <Link to='/project-details'>
                          <span className='btn-shape-normal-outline'>
                            <span>View Info</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Project Filter Items Area */}
          </div>
        </div>
      </section>
      {/* Latest Projects Section version two End */}
    </>
  );
};

export default ProjectDetailsInner;

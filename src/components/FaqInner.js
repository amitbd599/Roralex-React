import React from "react";
import { useState } from "react";
import {
  FaEnvelopeOpen,
  FaPlay,
  FaTextHeight,
  FaUserAlt,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
const FaqInner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* FAQ Section version one Start */}
      <section className='faq-section-version-one bg-white py-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='left-side'>
                <div className='wrapper'>
                  <h2>
                    Frequently Asked <br />{" "}
                    <span className='theme-color'>Questions</span>
                  </h2>
                  <div className='mt-10'>
                    <div>
                      <p>
                        Building construction is the process of adding structure
                        to real property. The vast majority of building
                        construction projects are small renovations, such as
                        addition of a room, or renovation of a bathroom.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='intro mt-10'>
                  <h3>Architecture And Building</h3>
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
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingFive'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFive'
                        aria-expanded='false'
                        aria-controls='collapseFive'
                      >
                        Before starting a building construction, the owner must
                        make sure
                      </button>
                    </h2>
                    <div
                      id='collapseFive'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFive'
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
                <div className='d-md-flex gap-4 mt-30'>
                  <div>
                    <div className='intro'>
                      <h3>State Of Construction</h3>
                    </div>
                    <p>
                      Building construction is the process of adding structure
                      to real property. The vast majority of building
                      construction projects are small renovations, such as
                      addition of a room, or renovation of a bathroom.
                    </p>
                  </div>
                  <div>
                    <div className='intro'>
                      <h3>Illustrates The Basic Elements</h3>
                    </div>
                    <p>
                      Building construction is the process of adding structure
                      to real property. The vast majority of building
                      construction projects are small renovations, such as
                      addition of a room, or renovation of a bathroom.
                    </p>
                  </div>
                </div>
                <div className='intro mt-10'>
                  <h3>Evidence Of Composite Construction</h3>
                </div>
                <div className='accordion' id='accordionExample_1'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='heading_One'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse_One'
                        aria-expanded='false'
                        aria-controls='collapseOne'
                      >
                        Aenean suscipit eget mi act fermentum phasellus
                        vulputate.
                      </button>
                    </h2>
                    <div
                      id='collapse_One'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading_One'
                      data-bs-parent='#accordionExample_1'
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
                    <h2 className='accordion-header' id='heading_Two'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse_Two'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        Wooden frame buildings have been around for many years
                        and in fact.
                      </button>
                    </h2>
                    <div
                      id='collapse_Two'
                      className='accordion-collapse collapse show'
                      aria-labelledby='heading_Two'
                      data-bs-parent='#accordionExample_1'
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
                    <h2 className='accordion-header' id='heading_Three'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse_Three'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        Once the plan is in hand, the finance and total cost is
                        estimated.
                      </button>
                    </h2>
                    <div
                      id='collapse_Three'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading_Three'
                      data-bs-parent='#accordionExample_1'
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
                    <h2 className='accordion-header' id='heading_Four'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse_Four'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        Before starting a building construction, the owner must
                        make sure
                      </button>
                    </h2>
                    <div
                      id='collapse_Four'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading_Four'
                      data-bs-parent='#accordionExample_1'
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
                    <h2 className='accordion-header' id='heading_Five'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse_Five'
                        aria-expanded='false'
                        aria-controls='collapse_Five'
                      >
                        Before starting a building construction, the owner must
                        make sure
                      </button>
                    </h2>
                    <div
                      id='collapse_Five'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFive'
                      data-bs-parent='#accordionExample_1'
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
                <div className='mt-20'>
                  <p>
                    It was the cultures of the great river valleys—including the
                    Nile, the Tigris and Euphrates, the Indus, and the Huang
                    Ho—with their intensive agriculture based on irrigation—that
                    developed the first communities large enough to be called
                    cities. These cities were built with a new building
                    technology, based on the clay available on the riverbanks.
                    The packed clay walls of earlier times were replaced by
                    those constructed of prefabricated units: mud bricks. This
                    represented a major conceptual change from the free forms of
                    packed clay to the geometric modulation imposed by the
                    rectangular brick, and the building plans too became
                    strictly rectangular.
                  </p>
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
                          <FaEnvelopeOpen />
                        </span>
                        <input type='text' placeholder='Enter Your Email ID' />
                      </div>
                      <div className='text-area'>
                        <span>
                          <FaTextHeight />
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
        </div>
      </section>

      <section className='latest-project-version-two bg-gray py-60'>
        {/* Header Intro Version Two */}
        <div className='header-intro-version-two'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h2>Our Latest Projects</h2>
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
                              <i className='fa-sharp fa-solid fa-location-dot' />
                            </span>
                            <span>North America</span>
                          </div>
                        </div>
                      </div>
                      <div className='btn-section'>
                        <a href='project-details.html'>
                          <span className='btn-shape-normal-outline'>
                            <span>View Info</span>
                          </span>
                        </a>
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
                              <i className='fa-sharp fa-solid fa-location-dot' />
                            </span>
                            <span>Zappia Drive</span>
                          </div>
                        </div>
                      </div>
                      <div className='btn-section'>
                        <a href='project-details.html'>
                          <span className='btn-shape-normal-outline'>
                            <span>View Info</span>
                          </span>
                        </a>
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
                              <i className='fa-sharp fa-solid fa-location-dot' />
                            </span>
                            <span>Meadowcrest Lane</span>
                          </div>
                        </div>
                      </div>
                      <div className='btn-section'>
                        <a href='project-details.html'>
                          <span className='btn-shape-normal-outline'>
                            <span>View Info</span>
                          </span>
                        </a>
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
                              <i className='fa-sharp fa-solid fa-location-dot' />
                            </span>
                            <span>Passaic Street</span>
                          </div>
                        </div>
                      </div>
                      <div className='btn-section'>
                        <a href='project-details.html'>
                          <span className='btn-shape-normal-outline'>
                            <span>View Info</span>
                          </span>
                        </a>
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

      {/* FAQ Section version one End */}
    </>
  );
};

export default FaqInner;

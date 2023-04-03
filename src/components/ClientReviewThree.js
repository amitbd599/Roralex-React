import React, { useState } from "react";
import Isotope from "isotope-layout";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaQuoteLeft } from "react-icons/fa";
const ClientReviewThree = () => {
  const isotope = React.useRef(Isotope | null);
  const [active, setActive] = useState(1);

  const handleFilterKeyChange = (key, index) => {
    setActive(index);
    isotope.current?.arrange({ filter: `${key}` });
  };
  return (
    <>
      {/* Client Review Section version three Start */}
      <section className='client-review-version-three bg-white py-80'>
        {/* Header Intro Version Three */}
        <div className='header-intro-version-three'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>Client Review</h3>
                    <h2>
                      Many Satisfied Clients <br /> Say{" "}
                      <span className='theme-color'>About</span> Us
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cliner review version Three */}
        <div className='client-review-version-three '>
          <Tabs>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='left-side'>
                    <div className='review-filter'>
                      <TabList>
                        <div className='row'>
                          <div className='col-4'>
                            <div className='no-inner'>
                              <div className='inner-two'>
                                <Tab>
                                  <div
                                    className={
                                      active === 1
                                        ? "img-file active"
                                        : "img-file"
                                    }
                                    onClick={() =>
                                      handleFilterKeyChange(".pro1", 1)
                                    }
                                  >
                                    <span>
                                      <img
                                        className='img-fluid'
                                        src='./assets/img/client/profile-7.png'
                                        alt=''
                                      />
                                    </span>
                                  </div>
                                </Tab>
                                <Tab>
                                  <div
                                    className={
                                      active === 2
                                        ? "img-file active"
                                        : "img-file"
                                    }
                                    onClick={() =>
                                      handleFilterKeyChange(".pro2", 2)
                                    }
                                  >
                                    <span>
                                      <img
                                        className='img-fluid'
                                        src='./assets/img/client/profile-8.png'
                                        alt=''
                                      />
                                    </span>
                                  </div>
                                </Tab>
                              </div>
                            </div>
                          </div>
                          <div className='col-4'>
                            <div className='have-inner'>
                              <div className='inner'>
                                <Tab>
                                  <div
                                    className={
                                      active === 3
                                        ? "img-file active"
                                        : "img-file"
                                    }
                                    onClick={() =>
                                      handleFilterKeyChange(".pro3", 3)
                                    }
                                  >
                                    <span>
                                      <img
                                        className='img-fluid'
                                        src='./assets/img/client/profile-9.png'
                                        alt=''
                                      />
                                    </span>
                                  </div>
                                </Tab>
                                <Tab>
                                  <div
                                    className={
                                      active === 4
                                        ? "img-file active"
                                        : "img-file"
                                    }
                                    onClick={() =>
                                      handleFilterKeyChange(".pro4", 4)
                                    }
                                  >
                                    <span>
                                      <img
                                        className='img-fluid'
                                        src='./assets/img/client/profile-10.png'
                                        alt=''
                                      />
                                    </span>
                                  </div>
                                </Tab>
                                <Tab>
                                  <div
                                    className={
                                      active === 5
                                        ? "img-file active"
                                        : "img-file"
                                    }
                                    onClick={() =>
                                      handleFilterKeyChange(".pro5", 5)
                                    }
                                  >
                                    <span>
                                      <img
                                        className='img-fluid'
                                        src='./assets/img/client/profile-11.png'
                                        alt=''
                                      />
                                    </span>
                                  </div>
                                </Tab>
                              </div>
                            </div>
                          </div>
                          <div className='col-4'>
                            <div className='no-inner'>
                              <div className='inner-two'>
                                <Tab>
                                  <div
                                    className={
                                      active === 6
                                        ? "img-file active"
                                        : "img-file"
                                    }
                                    onClick={() =>
                                      handleFilterKeyChange(".pro6", 6)
                                    }
                                  >
                                    <span>
                                      <img
                                        className='img-fluid'
                                        src='./assets/img/client/profile-12.png'
                                        alt=''
                                      />
                                    </span>
                                  </div>
                                </Tab>
                                <Tab>
                                  <div
                                    className={
                                      active === 7
                                        ? "img-file active"
                                        : "img-file"
                                    }
                                    onClick={() =>
                                      handleFilterKeyChange(".pro7", 7)
                                    }
                                  >
                                    <span>
                                      <img
                                        className='img-fluid'
                                        src='./assets/img/client/profile-13.png'
                                        alt=''
                                      />
                                    </span>
                                  </div>
                                </Tab>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabList>
                    </div>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='right-side'>
                    <div className='intro-section '>
                      <h3>We’ve 536+ Clients</h3>
                      <h2>They Say About Solutions</h2>
                    </div>
                    <div
                      id='review-version-three'
                      className=' review-version-three filter-container'
                    >
                      <TabPanel>
                        <div className=' pro1 filter-item'>
                          <div className='image-container'>
                            <div className='icon-file'>
                              <span>
                                <FaQuoteLeft />
                              </span>
                            </div>
                            <div className='text-file'>
                              <p>
                                “Sed efficitur dapibus porta. Nulla porta, velit
                                eget porttitor aliquam, tellus tellus pharetra
                                mi, nec efficitur enim ex adipiscing euismod
                                urna consectetur adipiscing elit. Morbi aliquam
                                vestibulum turpis in vulputate. Etiam mi lorem,
                                fringilla a convallis.”
                              </p>
                            </div>
                            <div className='button-intro'>
                              <h3>Monisa Biswas</h3>
                              <p>Software Developer</p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className=' pro2 filter-item'>
                          <div className='image-container'>
                            <div className='icon-file'>
                              <span>
                                <FaQuoteLeft />
                              </span>
                            </div>
                            <div className='text-file'>
                              <p>
                                “Building construction is the process of adding
                                structure to real property. The vast majority of
                                building construction projects are small
                                renovations, such as the addition of a room, or
                                renovation of a bathroom.”
                              </p>
                            </div>
                            <div className='button-intro'>
                              <h3>Michael J. Barreto</h3>
                              <p>Administrative officer</p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className=' pro3 filter-item'>
                          <div className='image-container'>
                            <div className='icon-file'>
                              <span>
                                <FaQuoteLeft />
                              </span>
                            </div>
                            <div className='text-file'>
                              <p>
                                “Project will be considered as success when the
                                project is completed on time, within budget and
                                the quality is satisfied by all [7]. Success
                                also can defined as much better results than the
                                expected or normally obtained in term of cost,
                                schedule, quality, and safety..”
                              </p>
                            </div>
                            <div className='button-intro'>
                              <h3>Robert D. Simms</h3>
                              <p>Composing machine tender</p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className=' pro4 filter-item '>
                          <div className='image-container'>
                            <div className='icon-file'>
                              <span>
                                <FaQuoteLeft />
                              </span>
                            </div>
                            <div className='text-file'>
                              <p>
                                “Introduction to Construction is a course that
                                will offer hands-on activities and real world
                                experiences related to the skills essential in
                                residential, commercial and civil building
                                construction. Students will be introduced to the
                                history and traditions of construction trades.”
                              </p>
                            </div>
                            <div className='button-intro'>
                              <h3>Debbie J. Johnson</h3>
                              <p>Composing machine tender</p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className=' pro5 filter-item '>
                          <div className='image-container'>
                            <div className='icon-file'>
                              <span>
                                <FaQuoteLeft />
                              </span>
                            </div>
                            <div className='text-file'>
                              <p>
                                “Detailed and strategic planning is the most
                                important aspect of successful construction
                                project management. The more complex the
                                project, the more planning will be required. A
                                well-planned project maximizes efficiency and
                                provides a step by step roadmap for completing
                                the work on schedule and within budget. ”
                              </p>
                            </div>
                            <div className='button-intro'>
                              <h3>Aubrey S. Jensen</h3>
                              <p>Aircraft and avionics service technician</p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className=' pro6 filter-item '>
                          <div className='image-container'>
                            <div className='icon-file'>
                              <span>
                                <FaQuoteLeft />
                              </span>
                            </div>
                            <div className='text-file'>
                              <p>
                                “Foundation is broadly divided into two
                                categories: shallow foundation and deep
                                foundation. The foundation to be chosen depends
                                largely on the soil profile, as well as the size
                                and load of the structure to be constructed.
                                Shallow foundations are also known as spread
                                footings. ”
                              </p>
                            </div>
                            <div className='button-intro'>
                              <h3>Anthony S. Knight</h3>
                              <p>News camera operator</p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className=' pro7 filter-item '>
                          <div className='image-container'>
                            <div className='icon-file'>
                              <span>
                                <FaQuoteLeft />
                              </span>
                            </div>
                            <div className='text-file'>
                              <p>
                                “Building construction is a process or
                                techniques of adding structure to real property.
                                Its primary purpose is used to provide shelter,
                                though there are other purposes. Over the year,
                                building construction is one of the industrial
                                fields that has vastly changed due to the
                                advancement in technology.. ”
                              </p>
                            </div>
                            <div className='button-intro'>
                              <h3>Joshua S. Fisher</h3>
                              <p>Dredge operator</p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
      {/* Client Review Section version three End */}
    </>
  );
};

export default ClientReviewThree;

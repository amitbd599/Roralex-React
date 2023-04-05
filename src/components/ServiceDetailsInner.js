import React, { useState } from "react";
import {
  FaArrowRight,
  FaBuilding,
  FaDollarSign,
  FaFilePdf,
  FaMapMarkerAlt,
  FaPlay,
  FaRegCalendarAlt,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
const ServiceDetailsInner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Service Details Inner Section version One start */}
      <section className='service-details-inner-section-one bg-white py-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='left-side'>
                <div className='wrapper'>
                  <h2>
                    Include how the company began and the changes and
                    developments.
                  </h2>
                  <div className='main-img mt-20'>
                    <img
                      className='img-fluid'
                      src='./assets/img/service/service-1.png'
                      alt=''
                    />
                  </div>
                  <br />
                  <div className='d-md-flex gap-4 mt-10'>
                    <div>
                      <img src='./assets/img/service/service-2.png' alt='' />
                    </div>
                    <div className='mt-4 mt-md-0'>
                      <h3>Construction structures</h3>
                      <p>
                        Besides FAR, Maximum Ground Coverage (MGC) is also
                        another remarkable issue because any building code has a
                        chart of it. In the MGC, there are specified how much
                        land a builder can leave for constructing a building
                        according to the total size of the land area. Before
                        doing the construction works, the builder needs to
                        decide on his project following the legal steps like FAR
                        and MGC. Buildings are surrounded by the roads as per
                        the building code and any building.
                      </p>
                      <p>
                        Builder needs to decide on his project following the
                        legal steps like FAR
                      </p>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <h3 className='theme-color'>ABOUT PROJECT</h3>
                    <p className='mt-10'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo autem. Veritatis obcaecati tenetur iure
                      eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
                      quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                      quas aliquid. Reprehenderit, quia. Quo neque error
                      repudiandae fuga? Ipsa laudantium molestias eos sapiente
                      officiis modi at sunt excepturi expedita sint? Sed
                      quibusdam recusandae alias error harum maxime adipisci
                      amet laborum. Perspiciatis minima nesciunt dolorem!
                      Officiis iure rerum voluptates a cumque velit
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo
                    </p>
                  </div>
                  <div className='d-md-flex gap-4 mt-25'>
                    <div>
                      <img src='./assets/img/service/service-3.png' alt='' />
                    </div>
                    <div className='mt-3 mt-lg-0'>
                      <img src='./assets/img/service/service-4.png' alt='' />
                    </div>
                  </div>
                  <div className='mt-15'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              {/* Widget Section */}
              <div className='widget'>
                {/* Widget One */}
                <div className='widget-one'>
                  <div className='wrapper'>
                    <h3>Initial Documents</h3>
                    <ul>
                      <li>
                        <div>
                          <span>
                            <FaFilePdf />
                          </span>
                        </div>
                        <div>
                          <span className='d-block'>Company Information</span>
                          <button className='d-block'>Download</button>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span>
                            <FaFilePdf />
                          </span>
                        </div>
                        <div>
                          <span className='d-block'>
                            Established Information
                          </span>
                          <button className='d-block'>Download</button>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span>
                            <FaFilePdf />
                          </span>
                        </div>
                        <div>
                          <span className='d-block'>Physical address</span>
                          <button className='d-block'>Download</button>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span>
                            <FaFilePdf />
                          </span>
                        </div>
                        <div>
                          <span className='d-block'>About the company's</span>
                          <button className='d-block'>Download</button>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span>
                            <FaFilePdf />
                          </span>
                        </div>
                        <div>
                          <span className='d-block'>Working History</span>
                          <button className='d-block'>Download</button>
                        </div>
                      </li>
                    </ul>
                    <button className='btn-shape-normal-outline'>
                      <span>Download All</span>
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
                  <ModalVideo
                    channel='youtube'
                    autoplay
                    isOpen={isOpen}
                    videoId='XM6kTQPzzpQ'
                    onClose={() => setOpen(false)}
                  />
                </div>
                {/* Widget Three */}
                <div className='widget-three mt-40'>
                  <div className='wrapper'>
                    <h3>Company Details :</h3>
                    <ul>
                      <li>
                        <FaBuilding />
                        <span>Project Name:</span>
                        Inhouse Building
                      </li>
                      <li>
                        <FaMapMarkerAlt />
                        <span>Location:</span>
                        Twin House, new york
                      </li>
                      <li>
                        <FaRegCalendarAlt />
                        <span>Published Date:</span>
                        23-01-2023
                      </li>
                      <li>
                        <FaUserAlt />
                        <span>Architecture:</span>
                        Amit Biswas
                      </li>
                      <li>
                        <FaDollarSign />
                        <span>Value:</span>$ 596,52,360
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details Inner Section version One End */}

      {/* Service List Section version three start */}
      <section className='serviceList-section-version-three bg-gray py-80 '>
        {/* Header Intro Version Three */}
        <div className='header-intro-version-three'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h2>More Related Services</h2>
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
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div className='wrapper'>
                  <div className='inner'>
                    <div className='count-file'>
                      <div className='hip'>
                        <h2>01</h2>
                      </div>
                    </div>
                    <div className='text-file'>
                      <h3>Development and Planning Phase</h3>
                      <p>
                        The most critical phase of a commercial construction
                        project is the development and planning stage.
                      </p>
                    </div>
                    <div className='btn-hold'>
                      <Link to='/services-details'>
                        <span>Read More</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div className='wrapper'>
                  <div className='inner'>
                    <div className='count-file'>
                      <div className='hip'>
                        <h2>02</h2>
                      </div>
                    </div>
                    <div className='text-file'>
                      <h3>Planning the budget for construction</h3>
                      <p>
                        The most critical phase of a commercial construction
                        project is the development and planning stage.
                      </p>
                    </div>
                    <div className='btn-hold'>
                      <Link to='/services-details'>
                        <span>Read More</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div className='wrapper'>
                  <div className='inner'>
                    <div className='count-file'>
                      <div className='hip'>
                        <h2>03</h2>
                      </div>
                    </div>
                    <div className='text-file'>
                      <h3>The pre-design phase development</h3>
                      <p>
                        The most critical phase of a commercial construction
                        project is the development and planning stage.
                      </p>
                    </div>
                    <div className='btn-hold'>
                      <Link to='/services-details'>
                        <span>Read More</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div className='wrapper'>
                  <div className='inner'>
                    <div className='count-file'>
                      <div className='hip'>
                        <h2>04</h2>
                      </div>
                    </div>
                    <div className='text-file'>
                      <h3>Preparation actual construction turns</h3>
                      <p>
                        The most critical phase of a commercial construction
                        project is the development and planning stage.
                      </p>
                    </div>
                    <div className='btn-hold'>
                      <Link to='/services-details'>
                        <span>Read More</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service List Section version three End */}
    </>
  );
};

export default ServiceDetailsInner;

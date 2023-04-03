import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestProjectsTwo = () => {
  const isotope = React.useRef(Isotope | null);
  const [active, setActive] = useState(1);

  // handling filter key change
  useEffect(() => {
    const imgLoad = imagesLoaded(document.querySelectorAll(".image-container"));

    imgLoad.on("done", () => {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "masonry",
      });

      return () => isotope.current?.destroy();
    });

    return () => imgLoad.off("done");
  }, []);

  const handleFilterKeyChange = (key, index) => {
    setActive(index);
    isotope.current?.arrange({ filter: `${key}` });
  };

  return (
    <>
      {/* Latest Projects Section version two start */}
      <section className='latest-project-version-two bg-gray py-80'>
        {/* Header Intro Version Two */}
        <div className='header-intro-version-two'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>Our All Featured &amp; Running Projects</h3>
                    <h2>Latest Projects</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Inner Items Data */}
        <div className='project-body'>
          <div className='container'>
            <div className='row'>
              {/* Start Project Filter Area */}
              <div className='col-12'>
                <div className='text-center'>
                  <div className='project-filter mb-40'>
                    <button
                      className={active === 1 ? "active" : null}
                      onClick={() => handleFilterKeyChange("*", 1)}
                    >
                      All Projects
                    </button>
                    <button
                      className={active === 2 ? "active" : null}
                      onClick={() => handleFilterKeyChange(".pro1", 2)}
                    >
                      Bridge
                    </button>
                    <button
                      className={active === 3 ? "active" : null}
                      onClick={() => handleFilterKeyChange(".pro2", 3)}
                    >
                      Building
                    </button>
                    <button
                      className={active === 4 ? "active" : null}
                      onClick={() => handleFilterKeyChange(".pro3", 4)}
                    >
                      Home
                    </button>
                    <button
                      className={active === 5 ? "active" : null}
                      onClick={() => handleFilterKeyChange(".pro4", 5)}
                    >
                      School
                    </button>
                    <button
                      className={active === 6 ? "active" : null}
                      onClick={() => handleFilterKeyChange(".pro5", 6)}
                    >
                      Mill Factory
                    </button>
                  </div>
                </div>
              </div>
              {/* End Project Filter Area */}
            </div>
            {/* Start Project Filter Items Area */}
            <div
              id='project-version-two'
              className='row project-version-two filter-container'
            >
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro5 pro2'>
                <div className='project-item image-container'>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro3 pro4'>
                <div className='project-item image-container'>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro1 pro5 pro2'>
                <div className='project-item image-container'>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro4 pro3'>
                <div className='project-item image-container'>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro3 pro4'>
                <div className='project-item image-container'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-5.png'
                        alt=''
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <h2>Masonry Walls</h2>
                          <p>
                            civil engineer and construction worker manager
                            holding digital tablet and blueprints talking
                          </p>
                          <div className='location'>
                            <span>
                              <FaMapMarkerAlt />
                            </span>
                            <span>Avenue East</span>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro1 pro5'>
                <div className='project-item image-container'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-6.png'
                        alt=''
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <h2>Electric Water</h2>
                          <p>
                            civil engineer and construction worker manager
                            holding digital tablet and blueprints talking
                          </p>
                          <div className='location'>
                            <span>
                              <FaMapMarkerAlt />
                            </span>
                            <span>East Syracuse</span>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro4 pro2'>
                <div className='project-item image-container'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-7.png'
                        alt=''
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <h2>Plastering Eal</h2>
                          <p>
                            civil engineer and construction worker manager
                            holding digital tablet and blueprints talking
                          </p>
                          <div className='location'>
                            <span>
                              <FaMapMarkerAlt />
                            </span>
                            <span>Elk Avenue</span>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro1 pro4'>
                <div className='project-item image-container'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-8.png'
                        alt=''
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <h2>Contractor Pul</h2>
                          <p>
                            civil engineer and construction worker manager
                            holding digital tablet and blueprints talking
                          </p>
                          <div className='location'>
                            <span>
                              <FaMapMarkerAlt />
                            </span>
                            <span>Caldwell Road</span>
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

export default LatestProjectsTwo;

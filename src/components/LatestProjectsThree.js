import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestProjectsThree = () => {
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
      {/* Latest Projects Section version three start */}
      <section className='latest-project-version-three bg-gray py-80'>
        {/* Header Intro Version Three */}
        <div className='header-intro-version-three'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>Latest Projects</h3>
                    <h2>
                      Our All Featured And <br /> All Running{" "}
                      <span className='theme-color'>Projects</span>
                    </h2>
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
            <div
              id='project-version-three'
              className='row project-version-three'
            >
              <div className='col-lg-4 col-md-6'>
                <div className='project-item'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-9.png'
                        alt=''
                      />
                      <div className='date'>
                        <span>25 Jan</span>
                      </div>
                      <div className='location'>
                        <h3>
                          <FaMapMarkerAlt />
                          Kelly Drive Bridgeport
                        </h3>
                      </div>
                    </div>
                    <div className='text-file'>
                      <div className='header-intro'>
                        <h2>Integrating Digital</h2>
                        <span className='badge-group running'>Running</span>
                      </div>
                      <div className='des'>
                        <p>
                          Share your challenge with our team and we'll work with
                          youto deliver a revolutionary digital product.
                        </p>
                      </div>
                      <div className='btn-hold'>
                        <Link to='/blog-details'>
                          <span className='inner'>
                            <span>View Info</span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='project-item'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-10.png'
                        alt=''
                      />
                      <div className='date'>
                        <span>30 Jan</span>
                      </div>
                      <div className='location'>
                        <h3>
                          <FaMapMarkerAlt />
                          Lawman Washington
                        </h3>
                      </div>
                    </div>
                    <div className='text-file'>
                      <div className='header-intro'>
                        <h2>Insurance Building</h2>
                        <span className='badge-group pending'>Pending</span>
                      </div>
                      <div className='des'>
                        <p>
                          Share your challenge with our team and we'll work with
                          youto deliver a revolutionary digital product.
                        </p>
                      </div>
                      <div className='btn-hold'>
                        <Link to='/blog-details'>
                          <span className='inner'>
                            <span>View Info</span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='project-item'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-11.png'
                        alt=''
                      />
                      <div className='date'>
                        <span>12 Jan</span>
                      </div>
                      <div className='location'>
                        <h3>
                          <FaMapMarkerAlt />
                          Stockert Hollow
                        </h3>
                      </div>
                    </div>
                    <div className='text-file'>
                      <div className='header-intro'>
                        <h2>Contractor Pul</h2>
                        <span className='badge-group planning'>Planning</span>
                      </div>
                      <div className='des'>
                        <p>
                          Share your challenge with our team and we'll work with
                          youto deliver a revolutionary digital product.
                        </p>
                      </div>
                      <div className='btn-hold'>
                        <Link to='/blog-details'>
                          <span className='inner'>
                            <span>View Info</span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='project-item'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-12.png'
                        alt=''
                      />
                      <div className='date'>
                        <span>10 Feb</span>
                      </div>
                      <div className='location'>
                        <h3>
                          <FaMapMarkerAlt />
                          Southern Pines
                        </h3>
                      </div>
                    </div>
                    <div className='text-file'>
                      <div className='header-intro'>
                        <h2>Contractor Pul</h2>
                        <span className='badge-group planning'>Planning</span>
                      </div>
                      <div className='des'>
                        <p>
                          Share your challenge with our team and we'll work with
                          youto deliver a revolutionary digital product.
                        </p>
                      </div>
                      <div className='btn-hold'>
                        <Link to='/blog-details'>
                          <span className='inner'>
                            <span>View Info</span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='project-item'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-13.png'
                        alt=''
                      />
                      <div className='date'>
                        <span>18 Feb</span>
                      </div>
                      <div className='location'>
                        <h3>
                          <FaMapMarkerAlt />
                          Overland Park
                        </h3>
                      </div>
                    </div>
                    <div className='text-file'>
                      <div className='header-intro'>
                        <h2>Electric Water</h2>
                        <span className='badge-group running'>Running</span>
                      </div>
                      <div className='des'>
                        <p>
                          Share your challenge with our team and we'll work with
                          youto deliver a revolutionary digital product.
                        </p>
                      </div>
                      <div className='btn-hold'>
                        <Link to='/blog-details'>
                          <span className='inner'>
                            <span>View Info</span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='project-item'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-14.png'
                        alt=''
                      />
                      <div className='date'>
                        <span>21 Feb</span>
                      </div>
                      <div className='location'>
                        <h3>
                          <FaMapMarkerAlt />
                          Baton Rouge
                        </h3>
                      </div>
                    </div>
                    <div className='text-file'>
                      <div className='header-intro'>
                        <h2>Masonry Walls</h2>
                        <span className='badge-group pending'>Pending</span>
                      </div>
                      <div className='des'>
                        <p>
                          Share your challenge with our team and we'll work with
                          youto deliver a revolutionary digital product.
                        </p>
                      </div>
                      <div className='btn-hold'>
                        <Link to='/blog-details'>
                          <span className='inner'>
                            <span>View Info</span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Project Filter Items Area */}
            {/* Button Section */}
            <div className='row'>
              <div className='col-12'>
                <div className='btn-section'>
                  <Link to='/blog'>
                    <span className='btn-shape-normal-outline'>
                      <span>View All Project</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Projects Section version three End */}
    </>
  );
};

export default LatestProjectsThree;

import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { Link } from "react-router-dom";

const LatestProjectsOne = () => {
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
      {/* Latest Projects Section version one start */}

      <section className='latest-project-version-one bg-white py-80 position-relative'>
        {/* Header Intro Version One */}
        <div className='header-intro-version-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-10 col-xl-7'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>Latest Projects</h3>
                    <div className='shape-img'>
                      <img src='./assets/img/shape/Union-1.svg' alt='Roralex' />
                    </div>
                  </div>
                  <div className='inner-text'>
                    <h2>
                      our Latest All{" "}
                      <span className='theme-color'>Project</span> Show In This
                      Years
                    </h2>
                    <p>
                      Building construction is the process of adding structure
                      to real property. The vast majority of building
                      construction projects are small renovations, such as
                      addition of a room, or renovation of a bathroom.
                    </p>
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
              id='project-version-one'
              className='row project-version-one filter-container '
            >
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro1 pro2'>
                <div className='project-item image-container'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-1.png'
                        alt='Roralex'
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <span>Industry, Manufacturing</span>
                          <h2>Integrating Digital And Retail</h2>
                          <p>Zappia Drive Cincinnati, KY 45203</p>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro2 pro3'>
                <div className='project-item image-container'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-2.png'
                        alt='Roralex'
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <span>Industry, Manufacturing</span>
                          <h2>Preparation of Construction Site</h2>
                          <p>3696 Meadowcrest Lane Lexington</p>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro4 pro5'>
                <div className='project-item image-container'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-3.png'
                        alt='Roralex'
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <span>Industry, Manufacturing</span>
                          <h2>Developing the Building Plan</h2>
                          <p>3696 Meadowcrest Lane Lexington</p>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro3 pro2'>
                <div className='project-item image-container'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-4.png'
                        alt='Roralex'
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <span>Industry, Manufacturing</span>
                          <h2>Permits and Insurance Building </h2>
                          <p>2891 Passaic Street Newark Island</p>
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
                        src='./assets/img/project/project-5.png'
                        alt='Roralex'
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <span>Industry, Manufacturing</span>
                          <h2>Later finished masonry walls </h2>
                          <p>4335 Plainfield Avenue East Syracuse</p>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro3 pro2'>
                <div className='project-item image-container'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-6.png'
                        alt='Roralex'
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <span>Industry, Manufacturing</span>
                          <h2>Providing adequa electric water </h2>
                          <p>43 Fairfax Drive Fullerton, CA 93632</p>
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
              <div className='col-xl-3 col-lg-4 col-md-6 filter-item pro4 pro5'>
                <div className='project-item image-container'>
                  <div className='project-wrapper'>
                    <div className='img-file'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-7.png'
                        alt='Roralex'
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <span>Industry, Manufacturing</span>
                          <h2>Plastering and finishing the walls </h2>
                          <p>1443 Elk Avenue Lansing, MI 48933</p>
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
                        src='./assets/img/project/project-8.png'
                        alt='Roralex'
                      />
                      <div className='text-overlay'>
                        <div className='text'>
                          <span>Industry, Manufacturing</span>
                          <h2>Replaced by the contractor charge </h2>
                          <p>4392 Caldwell Road Belmont, NY 14813</p>
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
      {/* Latest Projects Section version one End */}
    </>
  );
};

export default LatestProjectsOne;

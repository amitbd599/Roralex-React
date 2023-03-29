import React from "react";
import { FaCircle } from "react-icons/fa";

const OurPlanPriceOne = () => {
  return (
    <>
      {/* Our Plan Price  version one Start */}
      <section className='price-section-version-one bg-gray py-80'>
        {/* Header Intro Version One */}
        <div className='header-intro-version-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-10 col-xl-7'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>Our Plan Price</h3>
                    <div className='shape-img'>
                      <img src='./assets/img/shape/Union-1.svg' alt='Roralex' />
                    </div>
                  </div>
                  <div className='inner-text'>
                    <h2>
                      Purchase Our All{" "}
                      <span className='theme-color'>Unique</span> Price
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
        {/* Price Card Items */}
        <div className='price-card-version-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper mt-40'>
                  <div className='inner'>
                    <div className='heading-intro'>
                      <h2>BASIC PLAN</h2>
                      <h1>
                        $300<span>/M</span>
                      </h1>
                    </div>
                    <div className='inner-list'>
                      <ul>
                        <li>
                          <FaCircle />
                          <span>Cement – Rs. 320 to 400 per 50kg.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>TMX Steel Price 55 Rs. Per Kg.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>Aggregate Price- 3300 Rs. Per Tonne.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>RMC Price- 7500 Rs. grade of Concrete.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>TMT Wires Price- 50 Rs. per Kg.</span>
                        </li>
                      </ul>
                      <div className='btn-section'>
                        <button className='btn-shape-normal-outline'>
                          <span>Purchase</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper'>
                  <div className='inner'>
                    <div className='heading-intro'>
                      <h2>PRO PLAN</h2>
                      <h1>
                        $500<span>/M</span>
                      </h1>
                    </div>
                    <div className='inner-list'>
                      <ul>
                        <li>
                          <FaCircle />
                          <span>Cement – Rs. 320 to 500 per 50kg.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>TMX Steel Price 85 Rs. Per Kg.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>Aggregate Price- 5300 Rs. Per Tonne.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>RMC Price- 9500 Rs. grade of Concrete.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>TMT Wires Price- 90 Rs. per Kg.</span>
                        </li>
                      </ul>
                      <div className='btn-section'>
                        <button className='btn-shape-normal-outline'>
                          <span>Purchase</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper mt-40'>
                  <div className='inner'>
                    <div className='heading-intro'>
                      <h2>PREMIUM PLAN</h2>
                      <h1>
                        $900<span>/M</span>
                      </h1>
                    </div>
                    <div className='inner-list'>
                      <ul>
                        <li>
                          <FaCircle />
                          <span>Cement – Rs. 320 to 900 per 50kg.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>TMX Steel Price 95 Rs. Per Kg.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>Aggregate Price- 8300 Rs. Per Tonne.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>RMC Price- 9500 Rs. grade of Concrete.</span>
                        </li>
                        <li>
                          <FaCircle />
                          <span>TMT Wires Price- 110 Rs. per Kg.</span>
                        </li>
                      </ul>
                      <div className='btn-section'>
                        <button className='btn-shape-normal-outline'>
                          <span>Purchase</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='overlay' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Plan Price  version one End */}
    </>
  );
};

export default OurPlanPriceOne;

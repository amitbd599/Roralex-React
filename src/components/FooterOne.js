import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaFax,
  FaGlobe,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterOne = () => {
  return (
    <>
      {/* Footer Section version one Start */}
      <section className='footer-section-version-one pt-100 mt-50'>
        {/* footer top */}
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='wrapper-left'>
                  <h2>
                    Looking For Best Partner <br />
                    For Your Next Construction Works?
                  </h2>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='wrapper-right'>
                  <button className='btn-shape-normal-outline'>
                    <span>More About</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer middle */}
        <div className='footer-middle'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper-one'>
                  <div className='img-file'>
                    <img
                      src='./assets/img/common/Logo_White.png'
                      alt='Roralex'
                    />
                  </div>
                  <div className='text-file'>
                    <h3>Building Construction</h3>
                    <p>
                      Loren ipsum dolor consectetur adipiscing elit sed do
                      eiusmod tempor incididunt know you labore et dolore magna
                      aliqua consectetur adipiscingLoren ipsum dolor consectetur
                      adipiscing elit sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                  <div className='social-icon'>
                    <ul>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 col-md-6'>
                <div className='wrapper-two'>
                  <div className='text-file'>
                    <h3>Important Links</h3>
                  </div>
                  <div className='list-items'>
                    <ul>
                      <li>
                        <a href='#'>Why Choose</a>
                      </li>
                      <li>
                        <a href='#'>Team</a>
                      </li>
                      <li>
                        <a href='#'>About Us</a>
                      </li>
                      <li>
                        <a href='#'>Green Building</a>
                      </li>
                      <li>
                        <a href='#'>Design and Build</a>
                      </li>
                      <li>
                        <a href='#'>Construction Management</a>
                      </li>
                      <li>
                        <a href='#'>Pre-Construction &amp; Planning </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='wrapper-three'>
                  <div className='text-file'>
                    <h3>Gallery Items</h3>
                  </div>
                  <div className='items'>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-1.png'
                        alt='Roralex'
                      />
                    </div>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-2.png'
                        alt='Roralex'
                      />
                    </div>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-3.png'
                        alt='Roralex'
                      />
                    </div>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-4.png'
                        alt='Roralex'
                      />
                    </div>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-5.png'
                        alt='Roralex'
                      />
                    </div>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-6.png'
                        alt='Roralex'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='wrapper-four'>
                  <div className='text-file'>
                    <h3>Contact Us</h3>
                  </div>
                  <div className='items'>
                    <ul>
                      <li>
                        <span>
                          <FaGlobe />
                        </span>
                        <span>Canis, New York, United States</span>
                      </li>
                      <li>
                        <span>
                          <FaEnvelope />
                        </span>
                        <span>demo@support.com</span>
                      </li>
                      <li>
                        <span>
                          <FaPhoneAlt />
                        </span>
                        <span>+88 01888 001122</span>
                      </li>
                      <li>
                        <span>
                          <FaFax />
                        </span>
                        <span>222 89 6320</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <hr />
              <p>
                2023 © Copyright RORALEX Construction Building React Template.
                All rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section version one End */}
    </>
  );
};

export default FooterOne;

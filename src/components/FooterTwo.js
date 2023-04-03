import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaFax,
  FaGlobe,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterTwo = () => {
  return (
    <>
      {/* Footer Section version two Start */}
      <section className='footer-section-version-two  mt-50'>
        {/* footer top */}
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='wrapper-one'>
                  <div className='img-file'>
                    <img src='./assets/img/common/Logo_White.png' alt='' />
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
                </div>
              </div>
              <div className='col-lg-2 col-md-6'>
                <div className='wrapper-two'>
                  <div className='text-file'>
                    <h3>Our Service</h3>
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
                        <a href='#'>Construction</a>
                      </li>
                      <li>
                        <a href='#'>Pre-Construction </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='wrapper-three'>
                  <div className='text-file'>
                    <h3>Update Information</h3>
                  </div>
                  <div className='input-section'>
                    <input type='email' placeholder='Enter You Email' />
                    <button className='btn-shape-normal-outline'>
                      <span>Submit</span>
                    </button>
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
              <div className='col-lg-3 col-md-6'>
                <div className='wrapper-four'>
                  <div className='text-file'>
                    <h3>Contact Us</h3>
                  </div>
                  <div className='items'>
                    <ul>
                      <li>
                        <span>
                          <FaLocationArrow />
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
              <div className='inner'>
                <p>
                  2023 © Copyright RORALEX Construction Building React Template.
                  All rights Reserved.
                </p>
                <ul>
                  <li>
                    <a href='#'>Contact Us</a>
                  </li>
                  <li>
                    <a href='#'>FAQ</a>
                  </li>
                  <li>
                    <a href='#'>Privacy</a>
                  </li>
                  <li>
                    <a href='#'>Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section version two End */}
    </>
  );
};

export default FooterTwo;

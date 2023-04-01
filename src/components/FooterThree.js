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

const FooterThree = () => {
  return (
    <>
      {/* Footer Section version three Start */}
      <section className='footer-section-version-three '>
        {/* footer middle */}
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
                  <hr />
                  <div className='social-icon'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fab fa-facebook-f' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-twitter' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-youtube' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-linkedin' />
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
                        <a href='#'>
                          <i className='fa-solid fa-circle-small' />
                          Why Choose
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-solid fa-circle-small' />
                          Team
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-solid fa-circle-small' />
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-solid fa-circle-small' />
                          Green Building
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-solid fa-circle-small' />
                          Design and Build
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-solid fa-circle-small' />
                          Management
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-solid fa-circle-small' />
                          Pre-Construction{" "}
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
                          Washington, in Yolo County, <br />
                          California
                        </span>
                      </li>
                      <li>
                        <span>Phone : +99 236 002 55 </span>
                      </li>
                      <li>
                        <span>Email : demo@admin.com</span>
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
                        alt=''
                      />
                    </div>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-2.png'
                        alt=''
                      />
                    </div>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-3.png'
                        alt=''
                      />
                    </div>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-4.png'
                        alt=''
                      />
                    </div>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-5.png'
                        alt=''
                      />
                    </div>
                    <div className='img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/project/project-6.png'
                        alt=''
                      />
                    </div>
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
                2023 © Copyright RORALEX Construction Building. All rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section version three End */}
    </>
  );
};

export default FooterThree;

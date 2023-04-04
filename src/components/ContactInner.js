import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { FaEnvelopeOpen, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const ContactInner = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_yipk4xg", //YOUR_SERVICE_ID
        "template_71bgc2q", //YOUR_TEMPLATE_ID
        form.current,
        "cwf8kROl5o3__96Ti" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
            form.current[4].value = "";
            form.current[5].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.error("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      <Toaster position='bottom-center' reverseOrder={false} />
      {/* Contact version one start */}
      <section className='contact-version-one bg-white pt-80'>
        {/* Header Intro Version One */}
        <div className='header-intro-version-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-10 col-xl-7'>
                <div className='wrapper'>
                  <div className='pop-text'>
                    <h3>GET IN TOUCH</h3>
                    <div className='shape-img'>
                      <img src='./assets/img/shape/Union-1.svg' alt='' />
                    </div>
                  </div>
                  <div className='inner-text'>
                    <h2>
                      We would like to meet you <br /> free{" "}
                      <span className='theme-color'>to get in touch</span>
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
        {/* Inner Card Items */}
        <div className='contact-inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='wrapper'>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className='input-field'>
                      <div className='field'>
                        <div className='wrapper'>
                          <div className='input-inner'>
                            <div className='d-md-flex access gap-3'>
                              <input
                                name='user_name'
                                type='text'
                                placeholder='Your Name : '
                                required
                                title='Field must be a number.'
                                aria-required='true'
                              />
                              <input
                                name='user_email'
                                type='email'
                                placeholder='Email ID :  '
                                required
                              />
                            </div>
                            <div className='d-md-flex access gap-3 mt-15'>
                              <input
                                name='country'
                                type='text'
                                placeholder='Country : '
                                required
                              />
                              <input
                                name='phone'
                                type='text'
                                placeholder='Phone No :  '
                                required=''
                              />
                            </div>
                            <div className=' mt-15'>
                              <input
                                name='website'
                                type='text'
                                placeholder='Website Link : '
                              />
                            </div>
                            <div className='mt-15'>
                              <textarea
                                name='message'
                                id='test'
                                rows={4}
                                cols={50}
                                placeholder='Enter Details...'
                                required
                                defaultValue={""}
                              />
                            </div>
                            <div className='main-btn'>
                              <button
                                type='submit'
                                className='btn-shape-normal-outline'
                              >
                                <span>Send Massage</span>
                              </button>
                            </div>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='right-side'>
                  <div className='intro'>
                    <h2>Get in touch with us</h2>
                    <p>
                      The present state of construction is complex. There is a
                      wide range of building products and systems which are
                      aimed primarily.{" "}
                    </p>
                  </div>
                  <div className='list-data'>
                    <ul>
                      <li>
                        <div>
                          <span>
                            <FaPhoneAlt />
                          </span>
                        </div>
                        <div>
                          <h4>Have any question?</h4>
                          <p>Call 996-963-55-025</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span>
                            <FaEnvelopeOpen />
                          </span>
                        </div>
                        <div>
                          <h4>Need to email?</h4>
                          <p>demo@info.com</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span>
                            <FaMapMarkedAlt />
                          </span>
                        </div>
                        <div>
                          <h4>Need location?</h4>
                          <p>
                            1072 Poling Farm Road Pender, <br /> NE 68047
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Map Data */}
        <div className='contact-g-map'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team Section version three End */}
    </>
  );
};

export default ContactInner;

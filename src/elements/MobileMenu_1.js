import React, { useEffect } from "react";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaLocationArrow,
  FaSearch,
  FaTimes,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileMenu_1 = ({ mobileNavActive }) => {
  console.log(mobileNavActive);
  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
  }, []);

  return (
    <div>
      {/*=======  offcanvas mobile menu  =======*/}
      <div
        className={`offcanvas-mobile-menu ${
          mobileNavActive === true ? "active" : ""
        } `}
        id='mobile-menu-overlay'
      >
        <div className='sidebar__logo mb-20'>
          <div>
            <a href='index-1.html'>
              <img src='./assets/img/common/Logo_Black.png' alt='logo' />
            </a>
            <p>Trusted Contraction service!</p>
          </div>

          <div className='sidebar__close'>
            <button className='sidebar__close-btn' id='sidebar__close-btn'>
              <FaTimes />
            </button>
          </div>
        </div>
        <div className='sidebar__search mb-25'>
          <form action='#'>
            <input type='text' placeholder='Find A Construction Service!' />
            <button type='submit'>
              <FaSearch />
            </button>
          </form>
        </div>
        <div className='offcanvas-wrapper'>
          <div className='offcanvas-inner-content'>
            <nav className='offcanvas-navigation' id='offcanvas-navigation'>
              <ul>
                <li className='menu-item-has-children'>
                  <Link to={`/home-one`}>HOME</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to={`/home-one`}>Home One</Link>
                    </li>
                    <li>
                      <Link to={`/home-two`}>Home Two</Link>
                    </li>
                    <li>
                      <Link to={`/home-three`}>Home Three</Link>
                    </li>
                  </ul>
                </li>

                <li className='menu-item-has-children'>
                  <Link to={`/services`}>Services</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to={`/services`}>Service Page</Link>
                    </li>
                    <li>
                      <Link to={`/services-details`}>Services Details</Link>
                    </li>
                  </ul>
                </li>

                <li className='menu-item-has-children'>
                  <Link to={`/about`}>Pages</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to={`/about`}>About Us</Link>
                    </li>
                    <li>
                      <Link to={`/team`}>Team</Link>
                    </li>
                    <li>
                      <Link to={`/team-details`}>Team Details</Link>
                    </li>
                    <li>
                      <Link to={`/project`}>Projects</Link>
                    </li>
                    <li>
                      <Link to={`/project-details`}>Projects Details</Link>
                    </li>
                    <li>
                      <Link to={`/pricing`}>Pricing Page</Link>
                    </li>
                    <li>
                      <Link to={`/faq`}>FAQ Page</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link to={`/blog`}>Blog</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to={`/blog`}>Blog</Link>
                    </li>
                    <li>
                      <Link to={`/blog-details`}>Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={`/contact`}>CONTACT</Link>{" "}
                </li>
              </ul>
            </nav>

            <div className='sidebar__contact  mb-20'>
              <h4>Contact With US</h4>
              <div className='sidebar__social'>
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
              <div className='location-email-intro mobile'>
                <div className='inner-location-email-intro pr-30'>
                  <div className='inner'>
                    <span>
                      <FaLocationArrow />
                    </span>
                    <span className='text'>Location</span>
                  </div>
                  <h5 className='text'>4043 Riverside Augusta</h5>
                </div>
                <div className='inner-location-email-intro pt-5'>
                  <div className='inner'>
                    <span>
                      <FaEnvelope />
                    </span>
                    <span className='text'>Get In Touch</span>
                  </div>
                  <h5 className='text'>info@roralex.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=======  End of offcanvas mobile menu  =======*/}
    </div>
  );
};

export default MobileMenu_1;

import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <>
      {/* Bread Crumb Start */}
      <section
        className='bread-crumb'
        style={{
          backgroundImage: "url('assets/img/bg-overlay/bg-overlay-7.png')",
        }}
      >
        <div className=' container'>
          <div className='row'>
            <div className='col-12'>
              <div className='wrapper'>
                <h2>{title}</h2>
                <p>
                  <Link to='/index-1'>Home</Link> / <span>{title}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bread Crumb End */}
    </>
  );
};

export default BreadCrumb;

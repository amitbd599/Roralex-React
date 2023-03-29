import React from "react";

const Preloader = () => {
  return (
    <>
      {/* Preloader Start*/}
      <div className='preloader'>
        <div className='swapping-squares-spinner'>
          <div className='square' />
          <div className='square' />
          <div className='square' />
          <div className='square' />
        </div>
      </div>
      {/* Preloader End */}
    </>
  );
};

export default Preloader;

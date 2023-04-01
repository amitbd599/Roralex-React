import React from "react";

const ProjectBackgroundOverlayTwo = () => {
  return (
    <>
      {/* Project Background Overlay Section version two start */}
      <section
        className='projectBackgroundOverlay-version-two bg-white '
        style={{
          backgroundImage: "url('assets/img/bg-overlay/bg-overlay-3.png')",
        }}
      >
        <div className=' container'>
          <div className='row'>
            <div className='col-12'>
              <div className='wrapper'>
                <h3>AWESOME FACTS </h3>
                <h2>Targeting Multiple Markets</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                  metus pellentesque, scelerisque ex sed, volutpat nisi.
                  Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta
                  purus quis iaculis ultrices. Proin aliquam sem at nibh
                  hendrerit sagittis. Nullam ornare odio eu lacus tincidunt
                  malesuada.
                </p>
                <div className='btn-section'>
                  <button className='btn-shape-normal-outline'>
                    <span>View More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Background Overlay Section version two End */}
    </>
  );
};

export default ProjectBackgroundOverlayTwo;

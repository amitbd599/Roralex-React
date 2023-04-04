import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const BreadCrumb = React.lazy(() => import("../elements/BreadCrumb"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const WhyChooseUsFour = React.lazy(() =>
  import("../components/WhyChooseUsFour")
);
const ProjectBackgroundOverlayOne = React.lazy(() =>
  import("../components/ProjectBackgroundOverlayOne")
);
const OurTeamThree = React.lazy(() => import("../components/OurTeamThree"));
const OurClientOne = React.lazy(() => import("../components/OurClientOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const About = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header One */}
          <HeaderOne />

          {/* Bread Crumb */}
          <BreadCrumb title={"About Us"} />

          {/* About One */}
          <section className='about-section-version-one  py-80'>
            <AboutOne />
          </section>

          {/* Why Choose Us Four */}
          <WhyChooseUsFour />

          {/* Project Background Overlay One */}
          <section
            className='projectBackgroundOverlay bg-white mb-100'
            style={{
              backgroundImage: "url('assets/img/bg-overlay/bg-overlay-1.png')",
            }}
          >
            <ProjectBackgroundOverlayOne />
          </section>

          {/* Our Team Three */}
          <section className='ourTeam-section-version-three bg-gray py-100'>
            <OurTeamThree />
          </section>

          {/* Our Client One */}
          <section className='ourclient-section-version-one bg-white py-100'>
            <OurClientOne />
          </section>

          {/* Footer One */}
          <FooterOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default About;

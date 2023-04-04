import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const BreadCrumb = React.lazy(() => import("../elements/BreadCrumb"));

const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const ServicesInner = React.lazy(() => import("../components/ServicesInner"));
const OurTeamThree = React.lazy(() => import("../components/OurTeamThree"));
const OurClientOne = React.lazy(() => import("../components/OurClientOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));

const Services = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header One */}
          <HeaderOne />

          {/* Bread Crumb */}
          <BreadCrumb title={"Services"} />

          {/* ServicesInner */}
          <ServicesInner />

          {/* OurTeamThree */}
          <section className='ourTeam-section-version-three bg-gray py-80'>
            <OurTeamThree />
          </section>

          {/* Our Client One */}
          <section className='ourclient-section-version-one bg-white py-80'>
            <OurClientOne />
          </section>

          {/* Footer One */}
          <FooterOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Services;

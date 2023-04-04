import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const BlogSectionOne = React.lazy(() => import("../components/BlogSectionOne"));
const ClientReviewOne = React.lazy(() =>
  import("../components/ClientReviewOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const LatestProjectsOne = React.lazy(() =>
  import("../components/LatestProjectsOne")
);
const NewsLetterOne = React.lazy(() => import("../components/NewsLetterOne"));
const OurClientOne = React.lazy(() => import("../components/OurClientOne"));
const OurPlanPriceOne = React.lazy(() =>
  import("../components/OurPlanPriceOne")
);
const OurTeamOne = React.lazy(() => import("../components/OurTeamOne"));
const ProjectBackgroundOverlayOne = React.lazy(() =>
  import("../components/ProjectBackgroundOverlayOne")
);
const ServiceListOne = React.lazy(() => import("../components/ServiceListOne"));
const SliderOne = React.lazy(() => import("../components/SliderOne"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const HomeOne = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header One */}
          <HeaderOne />
          {/* Slider One */}
          <SliderOne />
          {/* About One */}
          <section className='about-section-version-one  pt-40 pb-80'>
            <AboutOne />
          </section>
          {/* Service List One */}
          <ServiceListOne />
          {/* Why Choose Us */}
          <WhyChooseUs />
          {/* Project Background Overlay One */}
          <section
            className='projectBackgroundOverlay bg-white '
            style={{
              backgroundImage: "url('assets/img/bg-overlay/bg-overlay-1.png')",
            }}
          >
            <ProjectBackgroundOverlayOne />
          </section>
          {/* Our Team One */}
          <OurTeamOne />
          {/* Latest Projects One */}
          <LatestProjectsOne />
          {/* Client Review One */}
          <ClientReviewOne />
          {/* Blog Section One */}
          <BlogSectionOne />
          {/* Our Plan Price One */}
          <OurPlanPriceOne />
          {/* News Letter One */}
          <NewsLetterOne />
          {/* Our Client One */}
          <section className='ourclient-section-version-one py-80'>
            <OurClientOne />
          </section>
          {/* Footer One */}
          <FooterOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOne;

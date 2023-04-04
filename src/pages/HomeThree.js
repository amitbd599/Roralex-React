import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const AboutThree = React.lazy(() => import("../components/AboutThree"));
const BlogSectionThree = React.lazy(() =>
  import("../components/BlogSectionThree")
);
const ClientReviewThree = React.lazy(() =>
  import("../components/ClientReviewThree")
);
const FooterThree = React.lazy(() => import("../components/FooterThree"));
const HeaderThree = React.lazy(() => import("../components/HeaderThree"));
const LatestProjectsThree = React.lazy(() =>
  import("../components/LatestProjectsThree")
);
const NewsLetterThree = React.lazy(() =>
  import("../components/NewsLetterThree")
);
const OurClientThree = React.lazy(() => import("../components/OurClientThree"));
const OurPlanPriceThree = React.lazy(() =>
  import("../components/OurPlanPriceThree")
);
const ProjectBackgroundOverlayThree = React.lazy(() =>
  import("../components/ProjectBackgroundOverlayThree")
);
const ServiceListThree = React.lazy(() =>
  import("../components/ServiceListThree")
);
const SliderThree = React.lazy(() => import("../components/SliderThree"));
const WhyChooseUsThree = React.lazy(() =>
  import("../components/WhyChooseUsThree")
);
const OurTeamThree = React.lazy(() => import("../components/OurTeamThree"));
const HomeThree = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header Three */}
          <HeaderThree />

          {/* Slider Three */}
          <SliderThree />

          {/* About Three */}
          <AboutThree />

          {/* Service List Three */}
          <ServiceListThree />

          {/* Why Choose Us Three */}
          <WhyChooseUsThree />

          {/* Project Background Overlay Three */}
          <ProjectBackgroundOverlayThree />

          {/* Our Team Three */}
          <section className='ourTeam-section-version-three bg-white pt-200 pb-60'>
            <OurTeamThree />
          </section>

          {/* Latest Projects Three */}
          <LatestProjectsThree />

          {/* Client Review Three */}
          <ClientReviewThree />

          {/* Blog Section Three */}
          <BlogSectionThree />

          {/* Our Plan Price Three */}
          <OurPlanPriceThree />

          {/* News Letter Three */}
          <NewsLetterThree />

          {/* Our Client Three */}
          <OurClientThree />

          {/* Footer Three */}
          <FooterThree />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeThree;

import React, { Fragment, Suspense } from "react";

import Preloader from "../elements/Preloader";

const AboutTwo = React.lazy(() => import("../components/AboutTwo"));
const BlogSectionTwo = React.lazy(() => import("../components/BlogSectionTwo"));
const ClientReviewTwo = React.lazy(() =>
  import("../components/ClientReviewTwo")
);
const FooterTwo = React.lazy(() => import("../components/FooterTwo"));
const HeaderTwo = React.lazy(() => import("../components/HeaderTwo"));
const LatestProjectsTwo = React.lazy(() =>
  import("../components/LatestProjectsTwo")
);
const NewsLetterTwo = React.lazy(() => import("../components/NewsLetterTwo"));
const OurClientTwo = React.lazy(() => import("../components/OurClientTwo"));
const OurPlanPriceTwo = React.lazy(() =>
  import("../components/OurPlanPriceTwo")
);
const OurTeamTwo = React.lazy(() => import("../components/OurTeamTwo"));
const ProjectBackgroundOverlayTwo = React.lazy(() =>
  import("../components/ProjectBackgroundOverlayTwo")
);
const ServiceListTwo = React.lazy(() => import("../components/ServiceListTwo"));
const SliderTwo = React.lazy(() => import("../components/SliderTwo"));
const WhyChooseUsTwo = React.lazy(() => import("../components/WhyChooseUsTwo"));
const HomeTwo = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header Two */}
          <HeaderTwo />

          {/* Slider Two */}
          <SliderTwo />

          {/* About Two */}
          <AboutTwo />

          {/* Service List Two */}
          <ServiceListTwo />

          {/* Why Choose Us Two */}
          <WhyChooseUsTwo />

          {/* Why Choose Us Two */}
          <ProjectBackgroundOverlayTwo />

          {/* Our Team Two */}
          <OurTeamTwo />

          {/* Latest Projects Two */}
          <LatestProjectsTwo />

          {/* Client Review Two */}
          <ClientReviewTwo />

          {/* Blog Section Two */}
          <BlogSectionTwo />

          {/* Our Plan Price Two */}
          <OurPlanPriceTwo />

          {/* News Letter Two */}
          <NewsLetterTwo />

          {/* Our Client Two */}
          <OurClientTwo />

          {/* Footer Two */}
          <FooterTwo />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeTwo;

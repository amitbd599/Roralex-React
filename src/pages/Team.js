import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const BreadCrumb = React.lazy(() => import("../elements/BreadCrumb"));

const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const TeamInner = React.lazy(() => import("../components/TeamInner"));
const OurClientOne = React.lazy(() => import("../components/OurClientOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const ProjectBackgroundOverlayFour = React.lazy(() =>
  import("../components/ProjectBackgroundOverlayFour")
);
const ClientReviewThree = React.lazy(() =>
  import("../components/ClientReviewThree")
);

const Team = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header One */}
          <HeaderOne />

          {/* Bread Crumb */}
          <BreadCrumb title={"Team"} />

          {/* TeamInner */}
          <TeamInner />

          {/* ProjectBackgroundOverlayFour */}
          <ProjectBackgroundOverlayFour />

          {/* ClientReviewThree */}
          <ClientReviewThree />

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

export default Team;

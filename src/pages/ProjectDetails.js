import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const BreadCrumb = React.lazy(() => import("../elements/BreadCrumb"));

const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const ProjectDetailsInner = React.lazy(() =>
  import("../components/ProjectDetailsInner")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const OurClientOne = React.lazy(() => import("../components/OurClientOne"));

const ProjectDetails = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header One */}
          <HeaderOne />

          {/* Bread Crumb */}
          <BreadCrumb title={"Project Details"} />

          {/* Project Details Inner */}
          <ProjectDetailsInner />

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

export default ProjectDetails;

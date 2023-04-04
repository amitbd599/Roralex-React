import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const BlogDetailsInner = React.lazy(() =>
  import("../components/BlogDetailsInner")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const BreadCrumb = React.lazy(() => import("../elements/BreadCrumb"));
const BlogDetails = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header One */}
          <HeaderOne />

          {/* Bread Crumb */}
          <BreadCrumb title={"Blog Details"} />

          {/* Bread Crumb */}
          <BlogDetailsInner />

          {/* Footer One */}
          <FooterOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default BlogDetails;

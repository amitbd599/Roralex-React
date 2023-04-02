import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import BlogDetailsInner from "../components/BlogDetailsInner";
import FooterOne from "../components/FooterOne";

const BlogDetails = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Blog Details"} />

      {/* Bread Crumb */}
      <BlogDetailsInner />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default BlogDetails;

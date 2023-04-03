import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Pricing from "./pages/Pricing";
import ProjectDetails from "./pages/ProjectDetails";
import Project from "./pages/Project";
import ServicesDetails from "./pages/ServicesDetails";
import Services from "./pages/Services";
import TeamDetails from "./pages/TeamDetails";
import Team from "./pages/Team";
import Demo from "./demo/Demo";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* Standard Version */}
        <Route exact path='/' element={<Demo />} />
        <Route exact path='/index-1' element={<HomeOne />} />
        <Route exact path='/index-2' element={<HomeTwo />} />
        <Route exact path='/index-3' element={<HomeThree />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/faq' element={<Faq />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route exact path='/pricing' element={<Pricing />} />
        <Route exact path='/project' element={<Project />} />
        <Route exact path='/project-details' element={<ProjectDetails />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/services-details' element={<ServicesDetails />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/team-details' element={<TeamDetails />} />
        {/* RTL Version */}
      </Routes>
      <ScrollToTop smooth color='#DE2021' />
    </BrowserRouter>
  );
}

export default App;

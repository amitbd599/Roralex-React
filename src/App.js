import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import About from "./pages/About";
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
        <Route exact path='/index-1' element={<HomeOne />} />
        <Route exact path='/index-2' element={<HomeTwo />} />
        <Route exact path='/index-3' element={<HomeThree />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
      <ScrollToTop smooth color='#DE2021' />
    </BrowserRouter>
  );
}

export default App;

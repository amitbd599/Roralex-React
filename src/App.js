import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
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
      </Routes>
      <ScrollToTop smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;

import Layout from "./components/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Cells from "./components/cells/Cells";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Data from "./components/sessions/data/Data";
import Training from "./components/sessions/training/Training";
import MLOps from "./components/sessions/mlops/MLOps";
import NotFound from "./components/notfound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/shared/scrolltotop/ScrollToTop";
// import updateAnalytics from "./hooks/updateAnalytics";

import "./App.css";

function App() {

  // if (sessionStorage.getItem("visited") === null) {
  //   updateAnalytics("visits");
  //   sessionStorage.setItem("visited", "true");
  // } else {
  //   updateAnalytics("views");
  // }

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cells" element={<Cells />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/data" element={<Data />} />
              <Route path="/training" element={<Training />} />
              <Route path="/mlops" element={<MLOps />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

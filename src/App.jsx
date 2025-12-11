import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DevBanner from "./components/DevBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const Layout = () => (
  <>
    <DevBanner />
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div
        className="min-h-screen w-full relative flex flex-col bg-black"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

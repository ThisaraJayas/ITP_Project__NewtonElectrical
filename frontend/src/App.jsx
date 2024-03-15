import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

// homepage
import Home from "./pages/Home";

// user accounts
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";

// about
import About from "./pages/About";

// online store
import Orders from "./pages/Orders";
import BuyOnline from "./pages/BuyOnline";

// scheduling services
import Schedule from "./pages/Schedule";
import Appointments from "./pages/Appointments";

// services
import AirConditioning from "./pages/AirConditioning";
import HouseWiring from "./pages/HouseWiring";
import CameraInstall from "./pages/CameraInstall";
import LightningProtect from "./pages/LightningProtect";
import ServicePackages from "./pages/ServicePackages";

// careers
import Technicians from "./pages/Technicians";
import ApplyNow from "./pages/ApplyNow";
import JobOps from "./pages/JobOps";

// projects
import Projects from "./pages/Projects";

// header
import Header from "./components/HeaderV2";

export default function App() {
  const header = useRef(null);
  const [hHeight, setHeight] = useState(0);

  useEffect(() => {
    function handleLoad() {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setHeight(entry.contentRect.height);
        }
      });
      // observe header height
      resizeObserver.observe(header.current);
    }
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <BrowserRouter>
      {/* get a reference to header */}
      <Header headerRef={header} />
      <Routes>
        {/* top padding of all pages => header height + 24px */}
        <Route path="/" element={<Home paddingTop={hHeight} />} />

        <Route path="/log-in" element={<LogIn paddingTop={hHeight} />} />
        <Route path="/sign-up" element={<SignUp paddingTop={hHeight} />} />
        <Route path="/my/profile" element={<Profile paddingTop={hHeight} />} />
        <Route
          path="/my/messages"
          element={<Messages paddingTop={hHeight} />}
        />
        <Route
          path="/my/account/settings"
          element={<Settings paddingTop={hHeight} />}
        />

        <Route path="/about" element={<About paddingTop={hHeight} />} />

        <Route path="/my/orders" element={<Orders paddingTop={hHeight} />} />
        <Route path="/buy" element={<BuyOnline paddingTop={hHeight} />} />

        <Route
          path="/appointments/schedule"
          element={<Schedule paddingTop={hHeight} />}
        />
        <Route
          path="/my/appointments"
          element={<Appointments paddingTop={hHeight} />}
        />

        <Route
          path="/services/air-conditioning"
          element={<AirConditioning paddingTop={hHeight} />}
        />
        <Route
          path="/services/electrical-wiring"
          element={<HouseWiring paddingTop={hHeight} />}
        />
        <Route
          path="/services/cctv-installation"
          element={<CameraInstall paddingTop={hHeight} />}
        />
        <Route
          path="/services/lightning-protection"
          element={<LightningProtect paddingTop={hHeight} />}
        />
        <Route
          path="/services/packages"
          element={<ServicePackages paddingTop={hHeight} />}
        />

        <Route
          path="/careers/technicians"
          element={<Technicians paddingTop={hHeight} />}
        />
        <Route
          path="/careers/apply"
          element={<ApplyNow paddingTop={hHeight} />}
        />
        <Route
          path="/careers/opportunities"
          element={<JobOps paddingTop={hHeight} />}
        />

        <Route path="/projects" element={<Projects paddingTop={hHeight} />} />
      </Routes>
    </BrowserRouter>
  );
}

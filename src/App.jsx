import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import SummaryCards from "./components/dashboard/summarycards/summaryCards";
import NetworkDetailsPage from "./components/dashboard/network_details/networkDetails";
import ProcessDetailsPage from "./components/dashboard/processDetails/processDetails";
import ConnectedDevicesPage from "./components/dashboard/connectedDevices.jsx/connectedDevices";
import Home from "./components/home/home";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<BaseLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/summarycards/:ipAddress" element={<SummaryCards />} />
            <Route path="/network-details/:ipAddress" element={<NetworkDetailsPage />} />
            <Route path="/process-details/:ipAddress" element={<ProcessDetailsPage />} />
            <Route path="/connected-devices/:ipAddress" element={<ConnectedDevicesPage />} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;

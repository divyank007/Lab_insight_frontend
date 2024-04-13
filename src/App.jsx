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
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Login from "./components/login/login";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    const fetchConnectedDevices = () => {
      fetch('/connected_devices')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Response data:', data); // Log the response data
  
          if (data.message === 'Secondary device detected') {
            console.log(`Secondary device detected on IP address ${data.ipAddress}`);
          } else {
            console.log('No secondary device detected');
          }
        })
        .catch(error => console.error('Error fetching connected devices:', error));
    };
  
    fetchConnectedDevices();
  
    // Set a timer to fetch connected devices every 60 seconds
    const timerId = setInterval(fetchConnectedDevices, 60000);
  
    // Clean up function to clear the timer when the component unmounts
    return () => clearInterval(timerId);
  }, []);
  
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
          <Route path="/login" element={<Login/>} />
          <Route element={<BaseLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/summarycards/:ipAddress" element={<SummaryCards />} />
            <Route path="/network-details/:ipAddress" element={<NetworkDetailsPage />} />
            <Route path="/process-details/:ipAddress" element={<ProcessDetailsPage />} />
            <Route path="/connected-devices/:ipAddress" element={<ConnectedDevicesPage />} />
            
          </Route>
        </Routes>

        {/* <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button> */}
      </Router>
    </>
  );
}

export default App;

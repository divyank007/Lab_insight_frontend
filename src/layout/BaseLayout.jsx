import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import {ToastContainer} from "react-toastify"
const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Outlet />
      </div>
      <ToastContainer />

    </main>
  );
};

export default BaseLayout;

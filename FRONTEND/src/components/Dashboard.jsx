import Header from "./Header";
import Loader from "./Loader";
// import Page_header from "./Page_header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Loader />
      <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box" />
        <div className="pcoded-container navbar-wrapper">
          <Header />
          <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
              <Sidebar />
              <div className="pcoded-content">
                {/* <Page_header /> */}
                <div className="pcoded-inner-content">
                  <div className="main-body">
                    <div className="page-wrapper">
                      <div className="page-body">
                        <div className="row">
                          <Outlet />
                        </div>
                      </div>
                    </div>
                    <div id="styleSelector"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

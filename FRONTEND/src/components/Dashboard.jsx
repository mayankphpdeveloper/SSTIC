import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
// import Loader from "./Loader"; // Uncomment if you want to use the Loader component
// import Page_header from "./Page_header"; // Uncomment if you want to use the Page_header component

const Dashboard = () => {
  return (
    <div id="pcoded" className="pcoded">
      <div className="pcoded-overlay-box" />

      <div className="pcoded-container navbar-wrapper">
        {/* Header component */}
        <Header />
        <div className="pcoded-main-container">
          <Sidebar />
          <div className="pcoded-wrapper">
            <div className="pcoded-content">
              {/* Page Header can be added if needed */}
              {/* <Page_header /> */}

              <div className="pcoded-inner-content">
                <div className="main-body">
                  <div className="page-wrapper">
                    <div className="page-body">
                      <div className="row">
                        {/* Outlet for rendering child routes/components */}
                        <Outlet />
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { Link } from "react-router-dom";
import userProfileImg from "/assets/images/avatar-4.jpg";
// import { useContext } from "react";
// import UserContext from "../context/UserContext";

const Sidebar = () => {
  // const { user } = useContext(UserContext); // Use the context
  // console.log("user", user);


  return (
    <nav className="pcoded-navbar">
      <div className="sidebar_toggle">
        <a href="#">
          <i className="icon-close icons" />
        </a>
      </div>
      
      <div className="pcoded-inner-navbar main-menu">
        {/* User Profile Section */}
        <div className="main-menu-header">
          <img
            className="img-80 img-radius"
            src={userProfileImg}
            alt="User-Profile-Image"
          />
          <div className="user-details">
            <span id="more-details">
              {/* {user.UserName} */}
              <i className="fa fa-caret-down" />
            </span>
          </div>
        </div>

        <div className="main-menu-content">
          <ul>
            <li className="more-details">
              <a href="#">
                <i className="ti-user" />
                View Profile
              </a>
              <a href="#!">
                <i className="ti-settings" />
                Settings
              </a>
              <a href="#">
                <i className="ti-layout-sidebar-left" />
                Logout
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Section */}
        <div className="pcoded-navigation-label">Navigation</div>
        
        {/* Dashboard Link */}
        <ul className="pcoded-item pcoded-left-item">
          <li className="active">
            <Link to="/Dashboard" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-home" />
                <b>D</b>
              </span>
              <span className="pcoded-mtext">Dashboard</span>
              <span className="pcoded-mcaret" />
            </Link>
          </li>
        </ul>

        {/* Basic Menu */}
        <ul className="pcoded-item pcoded-left-item">
          <li className="pcoded-hasmenu waves-effect waves-dark">
            <Link className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-layout-grid2-alt" />
                <b>BC</b>
              </span>
              <span className="pcoded-mtext">Basic</span>
              <span className="pcoded-mcaret" />
            </Link>
            <ul className="pcoded-submenu">
              <li>
                <Link to="Admission" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right" />
                  </span>
                  <span className="pcoded-mtext">Breadcrumbs</span>
                  <span className="pcoded-mcaret" />
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Charts Link */}
        <ul className="pcoded-item pcoded-left-item">
          <li>
            <Link to="Admission" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-bar-chart-alt" />
                <b>C</b>
              </span>
              <span className="pcoded-mtext">Charts</span>
            </Link>
          </li>
        </ul>

        {/* Maps Link */}
        <ul className="pcoded-item pcoded-left-item">
          <li>
            <Link to="Fees" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-map-alt" />
                <b>M</b>
              </span>
              <span className="pcoded-mtext">Maps</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;

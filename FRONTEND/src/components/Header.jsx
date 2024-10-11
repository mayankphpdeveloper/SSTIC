import logo from "/assets/images/logo.png";
import userProfileImg from "/assets/images/avatar-4.jpg";
const Header = () => {
  return (
    <>
      <nav className="navbar header-navbar pcoded-header">
        <div className="navbar-wrapper">
          <div className="navbar-logo">
            <a
              className="mobile-menu waves-effect waves-light"
              id="mobile-collapse"
              href="#!"
            >
              <i className="ti-menu" />
            </a>
            <div className="mobile-search waves-effect waves-light">
              <div className="header-search">
                <div className="main-search morphsearch-search">
                  <div className="input-group">
                    <span className="input-group-prepend search-close">
                      <i className="ti-close input-group-text" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Keyword"
                    />
                    <span className="input-group-append search-btn">
                      <i className="ti-search input-group-text" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <a href="">
              <img className="img-fluid" src={logo} alt="Theme-Logo" />
            </a>
            <a className="mobile-options waves-effect waves-light">
              <i className="ti-more" />
            </a>
          </div>
          <div className="navbar-container container-fluid">
            <ul className="nav-left">
              <li>
                <div className="sidebar_toggle">
                  <a href="#">
                    <i className="ti-menu" />
                  </a>
                </div>
              </li>
              <li>
                <a
                  href="#!"
                  //   onclick="javascript:toggleFullScreen()"
                  className="waves-effect waves-light"
                >
                  <i className="ti-fullscreen" />
                </a>
              </li>
            </ul>
            <ul className="nav-right">
              <li className="header-notification">
                <a href="#!" className="waves-effect waves-light">
                  <i className="ti-bell" />
                  <span className="badge bg-c-red" />
                </a>
                <ul className="show-notification">
                  <li>
                    <h6>Notifications</h6>
                    <label className="label label-danger">New</label>
                  </li>

                  <li className="waves-effect waves-light">
                    <div className="media">
                      <img
                        className="d-flex align-self-center img-radius"
                        src="assets/images/avatar-3.jpg"
                        alt="Generic placeholder image"
                      />
                      <div className="media-body">
                        <h5 className="notification-user">Sara Soudein</h5>
                        <p className="notification-msg">
                          Lorem ipsum dolor sit amet, consectetuer elit.
                        </p>
                        <span className="notification-time">
                          30 minutes ago
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="user-profile header-notification">
                <a href="#!" className="waves-effect waves-light">
                  <img
                    src={userProfileImg}
                    className="img-radius"
                    alt="User-Profile-Image"
                  />
                  <span>John Doe</span>
                  <i className="ti-angle-down" />
                </a>
                <ul className="show-notification profile-notification">
                  <li className="waves-effect waves-light">
                    <a href="#!">
                      <i className="ti-settings" /> Settings
                    </a>
                  </li>
                  <li className="waves-effect waves-light">
                    <a href="">
                      <i className="ti-user" /> Profile
                    </a>
                  </li>
                  <li className="waves-effect waves-light">
                    <a href="">
                      <i className="ti-email" /> My Messages
                    </a>
                  </li>
                  <li className="waves-effect waves-light">
                    <a href="">
                      <i className="ti-lock" /> Lock Screen
                    </a>
                  </li>
                  <li className="waves-effect waves-light">
                    <a href="">
                      <i className="ti-layout-sidebar-left" /> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

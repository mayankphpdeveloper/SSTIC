import { Link} from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { userLogin, error } = useContext(UserContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    
    try {
      const response = await userLogin(username, password); 
      console.log("Redirecting to Dashboard", response);
      if (response.token) {
        window.location.href = "/Dashboard";
      }else {
        console.log("Token Not Recieved");
      }
    } catch (err) {
      console.error("Login Error:", err); 
    }
  };

  return (
    <section className="login-block">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form className="md-float-material form-material" onSubmit={handleSubmit}>
              <div className="text-center">
                <img src="assets/images/logo.png" alt="logo.png" />
              </div>
              <div className="auth-box card">
                <div className="card-block">
                  <div className="row m-b-20">
                    <div className="col-md-12">
                      <h3 className="text-center">SECUTRAK</h3>
                    </div>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <span className="form-bar" />
                    <label className="float-label">Your Email Address</label>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="form-bar" />
                    <label className="float-label">Password</label>
                  </div>
                  <div className="row m-t-30">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20"
                      >
                        {isLoading ? 'Logging in...' : 'Login'}
                      </button>
                      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                    </div>
                  </div>
                  <hr />
                  <Link to="/dashboard">Dashboard</Link>
                  <div className="row">
                    <div className="col-md-10">
                      <p className="text-inverse text-left m-b-0">
                        Thank you.
                      </p>
                      <p className="text-inverse text-left">
                        <a href="#">
                          <b>Back to website</b>
                        </a>
                      </p>
                    </div>
                    <div className="col-md-2">
                      <img
                        src="assets/images/auth/Logo-small-bottom.png"
                        alt="small-logo.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

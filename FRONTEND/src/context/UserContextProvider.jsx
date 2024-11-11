import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import UserContext from "./UserContext";
import { loginUser } from "../api/authService";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  // Login function that authenticates the user
  const userLogin = async (username, password) => {
    try {
      const userData = await loginUser(username, password);
      console.log("User DATA:", userData);
      
      // Set user data in the context state
      setUser(userData);
      return userData;
      // Optionally, you could save the user data in localStorage if needed
      // localStorage.setItem('user', JSON.stringify(userData));

    } catch (err) {
      console.error("Login Error:", err);
      setError(err.message); // Set error message on login failure
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin, error }}>
      {children}
    </UserContext.Provider>
  );
};

// Add prop types validation
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

export default UserContextProvider;

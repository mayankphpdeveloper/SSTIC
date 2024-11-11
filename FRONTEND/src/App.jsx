import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Tile1 from "./components/Tile1";
import Tile2 from "./components/Tile2";
import Tile3 from "./components/Tile3";
import Admission from "./components/Admission";
import Fees from "./components/Fees";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        {/* Protected Dashboard Route */}
        <Route path="/Dashboard" element={<Dashboard />}>
          {/* Index route for Dashboard */}
          <Route index element={
            <>
              <Tile1 />
              <Tile2 />
              <Tile3 />
            </>
          } />

          {/* Nested routes for Dashboard */}
          <Route path="admission" element={<Admission />} />
          <Route path="fees" element={<Fees />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;

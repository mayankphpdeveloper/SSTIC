import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Tile1 from "./components/Tile1";
import Tile2 from "./components/Tile2";
import Tile3 from "./components/Tile3";
import Admission from "./components/Admission";
import Fees from "./components/Fees";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<><Tile1 /><Tile2 /><Tile3 /></>} />
          <Route path="Admission" element={<Admission />} />
          <Route path="Fees" element={<Fees />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

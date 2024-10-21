import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Avtorizatia from "./pages/Authorization";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="avtor" element={<Avtorizatia />} />
    </Routes>
  );
}

export default App;

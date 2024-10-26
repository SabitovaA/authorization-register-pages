import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import Authorization from "./pages/Authorization";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="avtor" element={<Authorization />} />
    </Routes>
  );
}

export default App;

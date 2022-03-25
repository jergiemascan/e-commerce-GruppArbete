import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/User/Profile";
import History from "./components/User/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ErrorPage />} />
        {/* <Route path="/user" element={""}> */}
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/history" element={<History />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;

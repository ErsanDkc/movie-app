import Nav from "./components/Navbar";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
    <Nav />
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Header />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<DetailMovie />} />

      </Routes>
    </>
  );
}

export default App;

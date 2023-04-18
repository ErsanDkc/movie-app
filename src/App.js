import Nav from "./components/Navbar";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DetailMovie from "./pages/Login/DetailMovie";

function App() {
  return (
    <>
    <Nav />
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Header />} />
        <Route path="/:id" element={<DetailMovie />} />

      </Routes>
    </>
  );
}

export default App;

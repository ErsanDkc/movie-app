import Nav from "./components/Navbar";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Header />} />
          <Route path="/:id" element={<DetailMovie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

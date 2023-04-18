import Nav from "./components/Navbar";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import Register from "./pages/Register/Register";
import ProductedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProductedRoute />}>
          <Route path="/home" element={<Header />} />
          <Route path="/:id" element={<DetailMovie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

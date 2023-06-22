import Nav from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import React from "react";


const Header = React.lazy(() => import("./components/Header"))
const DetailMovie = React.lazy(() => import("./pages/DetailMovie/DetailMovie"))
const Login = React.lazy(() => import("./pages/Login/Login"))

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

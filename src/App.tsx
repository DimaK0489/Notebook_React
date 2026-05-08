import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutApp } from "./pages/AboutApp/AboutApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Navigate to="about" replace />} />
        <Route path="about" element={<AboutApp />} />
      </Route>{" "}
    </Routes>
  );
}

export default App;

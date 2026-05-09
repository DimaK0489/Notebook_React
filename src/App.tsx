import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutApp } from "./pages/AboutApp/AboutApp";
import { ROUTES } from "./constants/routes";
import { ProjectStructure } from "./pages/ProjectStructure/ProjectStructure";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Navigate to={ROUTES.about} replace />} />
        <Route path={ROUTES.about} element={<AboutApp />} />
        <Route path={ROUTES.structure} element={<ProjectStructure />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutApp } from "./pages/AboutApp/AboutApp";
import { ROUTES } from "./constants/routes";
import { ProjectStructure } from "./pages/ProjectStructure/ProjectStructure";
import { Components } from "./pages/Components/Components";
import { VirtualDom } from "./pages/virtualDom/virtualDom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Navigate to={ROUTES.about} replace />} />
        <Route path={ROUTES.about} element={<AboutApp />} />
        <Route path={ROUTES.structure} element={<ProjectStructure />} />
        <Route path={ROUTES.virtualDom} element={<VirtualDom />} />
        <Route path={ROUTES.components} element={<Components />} />
      </Route>
    </Routes>
  );
}

export default App;

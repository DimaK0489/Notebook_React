import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutApp } from "./pages/AboutApp/AboutApp";
import { ROUTES } from "./constants/routes";
import { ProjectStructure } from "./pages/ProjectStructure/ProjectStructure";
import { ComponentsPage } from "./pages/ComponentsPage/ComponentsPage";
import { VirtualDom } from "./pages/virtualDom/virtualDom";
import { PropsPage } from "./pages/PropsPage/PropsPage";
import { UseStatePage } from "./pages/UseStatePage/UseStatePage";
import { LifeCyclePage } from "./pages/LifeCyclePage/LifeCyclePage";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import { RefFragmentPage } from "./pages/RefFragmentPage/RefFragmentPage";
import { MemoPage } from "./pages/MemoPage/MemoPage";
import { UseCallbackPage } from "./pages/UseCallbackPage/UseCallbackPage";
import { ContextPage } from "./pages/ContextPage/ContextPage";
import { RouterPage } from "./pages/RouterPage/RouterPage";
import { FormsPage } from "./pages/FormsPage/FormsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Navigate to={ROUTES.about} replace />} />
        <Route path={ROUTES.about} element={<AboutApp />} />
        <Route path={ROUTES.structure} element={<ProjectStructure />} />
        <Route path={ROUTES.rVirtualDom} element={<VirtualDom />} />
        <Route path={ROUTES.rComponents} element={<ComponentsPage />} />
        <Route path={ROUTES.rProps} element={<PropsPage />} />
        <Route path={ROUTES.rState} element={<UseStatePage />} />
        <Route path={ROUTES.rLifeCycle} element={<LifeCyclePage />} />
        <Route path={ROUTES.rEvents} element={<EventsPage />} />
        <Route path={ROUTES.rRef} element={<RefFragmentPage />} />
        <Route path={ROUTES.rMemo} element={<MemoPage />} />
        <Route path={ROUTES.rCallback} element={<UseCallbackPage />} />
        <Route path={ROUTES.rContext} element={<ContextPage />} />
        <Route path={ROUTES.rRouter} element={<RouterPage />} />
        <Route path={ROUTES.rForms} element={<FormsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

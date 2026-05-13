import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import s from "./HomePage.module.css";
import { Footer } from "../../components/Footer/Footer";

export const HomePage = () => {
  return (
    <div className={s.layout}>
      <Sidebar />
      <div className={s.layout__content}>
        <Header />
        <main className={s.mainContent}>
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

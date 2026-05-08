import { NavLink } from "react-router-dom";
import { menuItems } from "../../constants/menuItems";
import s from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.sidebarNav}>
        {menuItems.map((el) => (
          <NavLink
            key={el.id}
            to={el.path}
            className={({ isActive }) =>
              `${s.sidebarItem} ${isActive ? s.active : ""}`
            }
          >
            {el.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

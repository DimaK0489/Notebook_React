import { useContext, useState } from "react";
import s from "./DropdownMenu.module.css";
import { ThemeContext } from "../../context/ThemeContext";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) return null;
  const { toggleTheme } = themeCtx;

  const openMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={s.container}>
      <button className={s.btnIcon} onClick={openMenu} onBlur={closeMenu}>
        ⚙️
      </button>
      {isOpen && (
        <ul className={s.menuList}>
          <li className={s.menuItem} onMouseDown={() => toggleTheme("light")}>
            ☀️ Светлая
          </li>
          <li className={s.menuItem} onMouseDown={() => toggleTheme("dark")}>
            🌙 Тёмная
          </li>
          <li className={s.menuItem} onMouseDown={() => toggleTheme("system")}>
            🖥️ Системная
          </li>
        </ul>
      )}
    </div>
  );
};

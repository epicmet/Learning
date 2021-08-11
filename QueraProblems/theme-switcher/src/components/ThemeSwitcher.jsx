import React, { useContext } from "react";
import { THEME_TYPE } from "../constants";
import { ThemeContext } from "../providers/ThemeProvider";

const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on context
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    e.preventDefault();
    let newTheme =
      themeMode === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT;
    setThemeMode(newTheme);
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;

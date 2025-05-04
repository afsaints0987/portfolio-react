// ThemeToggle.jsx
import { useTheme } from "../../context/ThemeContext";
import * as FaIcons from "react-icons/fa";
import "./theme.scss";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { FaRegSun, FaRegMoon } = FaIcons;

  return (
    <div className="form-check form-switch">
      <div className="d-flex justify-content-center">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={darkMode}
          onChange={toggleTheme}
        />
        <label
          className="form-check-label mx-2"
          htmlFor="flexSwitchCheckChecked"
        >
          {darkMode ? <FaRegMoon /> : <FaRegSun />}
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;

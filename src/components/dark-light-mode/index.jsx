import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNewLocalStorage } from "../../hooks/useLocalStorage";

import { Navbar } from "./component/navbar";
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { Page3 } from "./pages/page3";

import styles from "./index.module.css";

export const DarkLightTheme = () => {
  const [theme, toggleTheme] = useNewLocalStorage();

  return (
    <BrowserRouter>
      <div className={styles.navWrapper}>
        <Navbar />
        <div className={styles.mode_switch}>
          <label>
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
};

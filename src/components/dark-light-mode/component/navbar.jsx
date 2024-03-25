import { Link } from "react-router-dom";

import styles from "../index.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to="/">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
      </div>
    </nav>
  );
};

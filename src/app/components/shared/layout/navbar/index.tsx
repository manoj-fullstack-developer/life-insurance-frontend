import React from "react";
import styles from "./index.module.css";
import Container from "../../container";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.brand}>Life Insurance Recommendations</div>
      </Container>
    </nav>
  );
};

export default Navbar;

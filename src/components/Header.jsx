import React from "react";
import Styles from "assets/styles/HeaderStyles.module.css";

const Header = () => {
  return (
      <header className={Styles.header}>
        <p className={Styles.headerAyah}>
          وأعدوا لهم ما استطعتم من قوة
          <br />
          ومن رباط الخيل ترهبون به عدو الله وعدوكم
        </p>
      </header>
  );
};

export default Header;

import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Weekly to do list</h1>
      <div className={styles.background}></div>
    </div>
  );
};

export default Header;

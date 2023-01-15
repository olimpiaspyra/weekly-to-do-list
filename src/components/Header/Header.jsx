import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.titleTop}>Weekly to do list</h1>
      <h1 className={styles.titleBottom}>Weekly to do list</h1>
    </div>
  );
};

export default Header;

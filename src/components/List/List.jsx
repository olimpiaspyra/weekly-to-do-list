import React from 'react';

import Column from '../Column/Column';

import styles from './List.module.scss';

const List = () => {
  return (
    <div className={styles.list}>
      <div className={styles.background}></div>
      <h2 className={styles.subtitle}>Day of the week</h2>
      <section className={styles.column}>
        <Column name='Monday'></Column>
        <Column name='Tuesday'></Column>
        <Column name='Wednesday'></Column>
      </section>
    </div>
  );
};

export default List;

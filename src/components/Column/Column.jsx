import React from 'react';

import PropTypes from 'prop-types';

import styles from './Column.module.scss';

const Column = ({name}) => {
  return (
    <article className={styles.column}>
      <p className={styles.title}>{name}</p>
    </article>
  );
};

Column.propTypes = {
  name: PropTypes.string,
};

export default Column;

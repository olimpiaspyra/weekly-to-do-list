import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Card = ({title}) => {
  return <li className={styles.card}>{title}</li>;
};

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;

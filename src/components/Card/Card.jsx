import React from 'react';
import PropTypes from 'prop-types';

import IsImportantButton from '../IsImportantButton/IsImportantButton';
import RemoveButton from '../RemoveButton/RemoveButton';

import styles from './Card.module.scss';

const Card = ({title, isImportant, cardId}) => {
  return (
    <li className={styles.card}>
      {title}
      <IsImportantButton cardId={cardId} isImportant={isImportant} />
      <RemoveButton cardId={cardId} />
    </li>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  isImportant: PropTypes.bool,
  cardId: PropTypes.string,
};

export default Card;

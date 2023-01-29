import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {useDispatch} from 'react-redux';

import {toggleCardImportant} from '../../redux/cardsReducer';

import styles from './IsImportantButton.module.scss';

const IsImportantButton = ({cardId, isImportant}) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleCardImportant(cardId));
  };

  return (
    <button className={styles.isImportantButton} onClick={handleClick}>
      <span
        className={clsx(
          'fa fa-star-o',
          isImportant === true ? styles.isActive : styles.inActive
        )}
      />
    </button>
  );
};

IsImportantButton.propTypes = {
  cardId: PropTypes.string,
  isImportant: PropTypes.bool,
};

export default IsImportantButton;

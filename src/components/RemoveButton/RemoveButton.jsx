import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {removeCard} from '../../redux/cardsReducer';

import styles from './RemoveButton.module.scss';

const RemoveButton = ({cardId}) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };

  return (
    <button className={styles.removeButton} onClick={handleClick}>
      <span className={'fa fa-trash-o'} />
    </button>
  );
};

RemoveButton.propTypes = {
  cardId: PropTypes.string,
};

export default RemoveButton;

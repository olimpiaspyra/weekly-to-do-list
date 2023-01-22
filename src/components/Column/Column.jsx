import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import {getCardsById} from '../../redux/cardsReducer';

import styles from './Column.module.scss';

const Column = ({title, id}) => {
  const cards = useSelector(state => getCardsById(state, id));

  return (
    <article className={styles.column}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} title={card.title} cardId={card.id} />
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

export default Column;

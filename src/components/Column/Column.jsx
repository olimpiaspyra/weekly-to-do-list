import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';

const Column = ({title, cards, action, id}) => {
  return (
    <article className={styles.column}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
      <CardForm action={action} columnId={id} />
    </article>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
  action: PropTypes.func,
  id: PropTypes.number,
};

export default Column;

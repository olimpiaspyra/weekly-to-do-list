import React from 'react';
import {useSelector} from 'react-redux';

import Card from '../Card/Card';
import {getImportantCard} from '../../redux/cardsReducer';

import styles from './Important.module.scss';

const Important = () => {
  const importantCard = useSelector(getImportantCard);

  if (importantCard.length === 0)
    return <p className={styles.important}>You do not have any important cards</p>;

  return (
    <div className={styles.important}>
      <p>Your important things</p>
      <article className={styles.column}>
        <ul className={styles.card}>
          {importantCard.map(card => (
            <Card
              key={card.id}
              cardId={card.id}
              title={card.title}
              isImportant={card.isImportant}
            />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Important;

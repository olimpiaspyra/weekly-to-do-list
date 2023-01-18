import React, {useState} from 'react';
import shortid from 'shortid';

import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import initialState from '../../data/data';

import styles from './List.module.scss';

const List = () => {
  const [columns, setColumns] = useState(initialState.columns);

  const addColumn = newColumn => {
    setColumns([...columns, {id: shortid(), title: newColumn.title, cards: []}]);
  };

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map(column => {
      if (column.id === columnId) {
        return {
          ...column,
          cards: [...column.cards, {id: shortid(), title: newCard.title}],
        };
      } else return column;
    });
    setColumns(columnsUpdated);
  };

  return (
    <div className={styles.list}>
      <p className={styles.background}></p>
      <p className={styles.subtitle}>Day of the week</p>
      <section className={styles.columns}>
        {columns.map(column => (
          <Column key={column.id} {...column} action={addCard} />
        ))}
      </section>
      <ColumnForm action={addColumn} />
    </div>
  );
};

export default List;

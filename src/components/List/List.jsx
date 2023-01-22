import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import Search from '../Search/Search';
import {getColumnsById} from '../../redux/columnsReducer';
import {getListsById} from '../../redux/listsReducer';

import styles from './List.module.scss';

const List = () => {
  const {listId} = useParams();
  const listData = useSelector(state => getListsById(state, listId));
  const columns = useSelector(state => getColumnsById(state, listId));

  return (
    <div className={styles.list}>
      <div className={styles.background}></div>
      <h2 className={styles.listTitle}>{listData.title}</h2>
      <h3 className={styles.listDescription}>{listData.description}</h3>
      <Search />
      <section className={styles.columns}>
        {columns.map(column => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;

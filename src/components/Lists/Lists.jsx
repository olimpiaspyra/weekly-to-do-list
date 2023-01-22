import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import ListForm from '../ListForm/ListForm';
import {getAllLists} from '../../redux/listsReducer';

import styles from './Lists.module.scss';

const Lists = () => {
  const lists = useSelector(getAllLists);

  return (
    <div className={styles.lists}>
      <p className={styles.title}>Day of the week</p>
      {lists.map(list => (
        <Link key={list.id} to={'/list/' + list.id} className={styles.listLink}>
          <h2 className={styles.listTitle}>{list.title}</h2>
          <h3 className={styles.listDescription}>{list.description}</h3>
        </Link>
      ))}
      <ListForm />
    </div>
  );
};

export default Lists;

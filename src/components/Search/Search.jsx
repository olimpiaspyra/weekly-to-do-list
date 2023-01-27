import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Button from '../Button/Button';

import {updateSearch} from '../../redux/searchReducer';

import styles from './Search.module.scss';

const Search = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearch(search));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearch(search));
    setSearch('');
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Search...'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default Search;

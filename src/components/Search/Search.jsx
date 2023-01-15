import React from 'react';

import Button from '../Button/Button';

import styles from './Search.module.scss';

const Search = () => {
  return (
    <form className={styles.search}>
      <input className={styles.input} type='text' placeholder='Search...' />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default Search;

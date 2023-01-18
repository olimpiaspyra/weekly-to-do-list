import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

import styles from './ColumnForm.module.scss';

const ColumnForm = ({action}) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    action({title});
    setTitle('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <p className={styles.inputTitle}>Title:</p>
      <TextInput type='text' value={title} onChange={e => setTitle(e.target.value)} />
      <Button className={styles.button}>Add column</Button>
    </form>
  );
};

ColumnForm.propTypes = {
  action: PropTypes.func,
};

export default ColumnForm;

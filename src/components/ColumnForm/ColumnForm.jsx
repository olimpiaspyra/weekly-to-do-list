import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import {addColumn} from './../../redux/columnsReducer';

import styles from './ColumnForm.module.scss';

const ColumnForm = ({id, listId}) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({id, listId, title}));
    setTitle('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label className={styles.inputTitle}>Title:</label>
      <TextInput
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Type name for new column'
      />
      <Button className={styles.button}>Add column</Button>
    </form>
  );
};

ColumnForm.propTypes = {
  listId: PropTypes.string,
  id: PropTypes.string,
};

export default ColumnForm;

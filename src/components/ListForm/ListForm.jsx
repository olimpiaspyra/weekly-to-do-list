import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import Button from './../Button/Button';
import TextInput from '../TextInput/TextInput';
import {addList} from '../../redux/listsReducer';

import styles from './ListForm.module.scss';

const ListForm = ({id}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({id, title, description}));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <label className={styles.inputTitle}> Title:</label>
      <TextInput
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Type name for new list'
      />
      <label className={styles.inputTitle}> Description:</label>
      <TextInput
        type='text'
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder='Type description for new list'
      />
      <Button className={styles.button}>Add list</Button>
    </form>
  );
};

ListForm.propTypes = {
  id: PropTypes.string,
};

export default ListForm;

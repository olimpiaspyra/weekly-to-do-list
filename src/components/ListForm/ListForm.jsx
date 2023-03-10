import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import Button from './../Button/Button';
import TextInput from '../TextInput/TextInput';
import {addList} from '../../redux/listsReducer';

import styles from './ListForm.module.scss';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title.length === 0) {
      alert('Input fields cannot be empty');
      return;
    } else {
      dispatch(addList({title, description}));
      setTitle('');
      setDescription('');
    }
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

export default ListForm;

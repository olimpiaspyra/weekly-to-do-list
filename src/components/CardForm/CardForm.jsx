import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import {addCard} from '../../redux/cardsReducer';

import styles from './CardForm.module.scss';

const CardForm = ({columnId}) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title.length === 0) {
      alert('Input fields cannot be empty');
      return;
    } else {
      dispatch(addCard({columnId, title}));
      setTitle('');
    }
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Type new task'
      />
      <Button className={styles.button}>Add card</Button>
    </form>
  );
};

CardForm.propTypes = {
  columnId: PropTypes.string,
};

export default CardForm;

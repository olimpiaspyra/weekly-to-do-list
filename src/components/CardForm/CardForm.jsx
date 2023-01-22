import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import {addCard} from '../../redux/cardsReducer';

import styles from './CardForm.module.scss';

const CardForm = ({columnId, id}) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({id, columnId, title}));
    setTitle('');
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
  id: PropTypes.string,
};

export default CardForm;

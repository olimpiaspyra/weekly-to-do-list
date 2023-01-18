import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

import styles from './CardForm.module.scss';

const CardForm = ({action, columnId}) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    action({title}, columnId);
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button className={styles.button}>Add card</Button>
    </form>
  );
};

CardForm.propTypes = {
  action: PropTypes.func,
  columnId: PropTypes.number,
};

export default CardForm;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.module.scss';

const TextInput = ({onChange, value}) => {
  return (
    <input type='text' className={styles.input} onChange={onChange} value={value}  placeholder='Type task'/>
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default TextInput;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.module.scss';

const TextInput = ({onChange, value, placeholder}) => {
  return (
    <input
      type='text'
      className={styles.input}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;

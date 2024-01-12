import React from 'react';
import styles from './MyInput.module.css';

const MyInput = (props) => {
  return <input {...props} className={styles.myInp} />;
};

export default MyInput;

import React from 'react';

import styles from './Button.module.css';

const Button = props => {
  console.log(styles.button);
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

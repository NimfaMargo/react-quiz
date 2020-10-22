import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const {
    disabled, children, type, onClick,
  } = props;

  const cls = [
    classes.Button,
    classes[type],
  ];

  return (
    <div
      onClick={onClick}
      disabled={disabled}
      className={cls.join(' ')}
    >
      {children}
    </div>
  );
};

export default Button;

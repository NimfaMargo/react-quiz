import React from 'react';
import cn from 'classnames';
import classes from './Button.module.css';

export const Button = ({
 disabled, children, type, onClick,
}) => (
	<div
		role="button"
		aria-hidden="true"
		onClick={onClick}
		disabled={disabled}
		className={cn({ [classes.Button]: true, [classes[type]]: true })}
	>
      {children}
	</div>
);

export default Button;

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
// eslint-disable-next-line jsx-a11y/click-events-have-key-events

import React from 'react';
import cn from 'classnames';
import classes from './AnswerItem.module.css';

const AnswerItem = ({ state, answer: { id, text }, onAnswerClick }) => (
    <li
		className={cn({ [classes.AnswerItem]: true, [classes[state]]: state })}
		onClick={() => onAnswerClick(id)}
    >
      {text}
    </li>
);

export default AnswerItem;

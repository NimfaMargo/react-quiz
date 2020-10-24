import React from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = ({ answers, state, onAnswerClick }) => (
  <ul className={classes.AnswersList}>
    {answers.map((answer) => (
      <AnswerItem
        state={state ? state[answer.id] : null}
        onAnswerClick={onAnswerClick}
        key={answer.id}
        answer={answer}
      />
    ))}
  </ul>
);

export default AnswersList;

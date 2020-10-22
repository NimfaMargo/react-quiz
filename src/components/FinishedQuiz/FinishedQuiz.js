import React from 'react';
import { Link } from 'react-router-dom';
import classes from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';

const FinishedList = (props) => {
  const { quiz, results, onRetry } = props;

  const numberOfRightResults = Object.values(results).reduce((acc, value) => (value === 'success' ? acc + 1 : acc), 0);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[results[quizItem.id]],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>
&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          );
        })}
      </ul>
      <p>{`Правильно ${numberOfRightResults} из ${quiz.length}`}</p>
      <div>
        <Button type="primary" onClick={onRetry}>Повторить</Button>
        <Link to="/">
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedList;

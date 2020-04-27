import React from 'react';
import classes from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button'
const FinishedList = (props) => {
    const { quiz, results, onRetry } = props;
    console.log(quiz, results);
    
    return(
        <div className={classes.FinishedQuiz}>
           <ul>
               {quiz.map((quizItem, index) => {
                   const cls = [
                        "fa",
                        results[quizItem.id] === "error" ? "fa-times" : "fa-check",
                        classes[results[quizItem.id]],
                   ];
                   return (
                     <li key={index}>
                       <strong>{index + 1}</strong>&nbsp;
                       {quizItem.question}
                       <i className={cls.join(' ')} />
                     </li>
                   );
               })}  
           </ul>
           {/* <p>Правильно 4 из 10</p> */}
           <div>
               <Button type='primary' onClick={onRetry}>
                   Повторить
               </Button>
               <Button type='success'>
                   Перейти в список тестов
               </Button>
           </div>
        </div>
    )
}

export default FinishedList;
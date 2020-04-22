import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedList = (props) => {
    const { quiz, results } = props;
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
                       {quizItem}
                       <i className={cls.join(' ')} />
                     </li>
                   );
               })}  
           </ul>
           <p>Правильно 4 из 10</p>
           <div>
               <button>Повторить</button>
           </div>
        </div>
    )
}

export default FinishedList;
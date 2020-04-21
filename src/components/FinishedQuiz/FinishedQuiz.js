import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedList = (props) => {
    return(
        <div className={classes.FinishedQuiz}>
           <ul>
               <li>
                   <strong>1. </strong>
                   Text
               </li>
                <li>
                    <strong>2. </strong>
                    Text
                </li>
           </ul>

           <p>Правильно 4 из 10</p>
           <div>
               <button>Повторить</button>
           </div>
        </div>
    )
}

export default FinishedList;
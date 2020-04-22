import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedList = (props) => {
    return(
        <div className={classes.FinishedQuiz}>
           <ul>
               <li>
                   <strong>1. </strong>
                   gg
                   <i className={'fa fa-times ' + classes.error} />
               </li>
                <li>
                    <strong>2. </strong>
                    bb  
                    <i className={'fa fa-check ' + classes.success} />
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
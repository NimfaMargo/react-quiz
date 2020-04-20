import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Какое О большое у линейного поиска?',
                rightAnswerId: 3, 
                answers: [
                    { id: 1, text: 'O(1)' },
                    { id: 2, text: 'О(2n)'},
                    { id: 3, text: 'О(n)' },
                    { id: 4, text: 'O(n^2)'},
                ],
            }
        ]
    }

    clickHandler = (id) => {
        console.log('Answer Id:', id);
    }
    
    render() {
        return (
            <div className={classes.Quiz}>
                
                <div className={classes.QuizWrapper}>
                    <h1>Ответь на вопросы</h1>
                    <ActiveQuiz 
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}
                        onAnswerClick={this.clickHandler}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;
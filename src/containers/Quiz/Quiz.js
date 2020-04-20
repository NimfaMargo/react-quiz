import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {   
                id: 1,
                question: 'Какое О большое у линейного поиска?',
                rightAnswerId: 3, 
                answers: [
                    { id: 1, text: 'O(1)' },
                    { id: 2, text: 'О(2n)'},
                    { id: 3, text: 'О(n)' },
                    { id: 4, text: 'O(n^2)'},
                ],
            },
            {
                id: 2,
                question: 'Какой алгоритм сортировки наиболее эффективен при больших n?',
                rightAnswerId: 1,
                answers: [
                    { id: 1, text: 'Сортировка слиянием' },
                    { id: 2, text: 'Быстрая сортировка' },
                    { id: 3, text: 'Сортировка пузырьком' },
                    { id: 4, text: 'Сортировка вставками' },
                ],
            }
        ]
    }

    clickHandler = (id) => {
        console.log('Answer Id:', id);
        this.setState({activeQuestion: this.state.activeQuestion + 1 })
    }
    
    render() {
        return (
            <div className={classes.Quiz}>
                
                <div className={classes.QuizWrapper}>
                    <h1>Ответь на вопросы</h1>
                    <ActiveQuiz 
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.clickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;
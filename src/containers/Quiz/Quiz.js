import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null,  
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
        const {quiz, activeQuestion, answerState } = this.state;
        if(answerState) {
            const key = Object.keys(answerState)[0];
            if(answerState[key] === 'success') {
                return;
            }
        }
        const question = quiz[activeQuestion];

        if (question.rightAnswerId === id) {
            this.setState({ 
                answerState: {[id]: 'success' }
            });
            const timeout = window.setTimeout(()=> {
                if(this.isQuizFinished()) {
                    console.log('finish');
                } else {
                    this.setState({ activeQuestion: activeQuestion + 1 });
                    this.setState({ answerState: null });
                }
                window.clearTimeout(timeout);
            }, 1000)
        } else {
            this.setState({ 
                answerState: { [id]: 'error' } 
            });
        }
    }
    
    isQuizFinished = () => this.state.activeQuestion + 1 === this.state.quiz.length;

    render() {
        const { quiz, activeQuestion, answerState } = this.state;
        return (
            <div className={classes.Quiz}>
                
                <div className={classes.QuizWrapper}>
                    <h1>Ответь на вопросы</h1>
                    <ActiveQuiz 
                        question={quiz[activeQuestion].question}
                        answers={quiz[activeQuestion].answers}
                        onAnswerClick={this.clickHandler}
                        quizLength={quiz.length}
                        answerNumber={activeQuestion + 1}
                        state={answerState}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;
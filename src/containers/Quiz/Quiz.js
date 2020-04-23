import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz.js'

class Quiz extends Component {
    state = {
        results: {}, // {[id]: 'success' / 'error'}
        isFinished: false,
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
        const {quiz, activeQuestion, answerState, results } = this.state;
        if(answerState) {
            const key = Object.keys(answerState)[0];
            if(answerState[key] === 'success') {
                return;
            }
        }
        const question = quiz[activeQuestion];

        if (question.rightAnswerId === id) {
            if (!results[question.id]) {
              results[question.id] = "success";
            }
            this.setState({
                answerState: { [id]: "success" },
                results,
            });
            const timeout = window.setTimeout(()=> {
                if(this.isQuizFinished()) {
                    this.setState({ isFinished: true });
                } else {
                    this.setState({ activeQuestion: activeQuestion + 1 });
                    this.setState({ answerState: null });
                }
                window.clearTimeout(timeout);
            }, 1000)
        } else {
            results[question.id] = "error";
            this.setState({ 
                answerState: { [id]: 'error' },
                results
            });
        }
    }
    
    onRetryHandler = () => {

    }
    
    isQuizFinished = () => this.state.activeQuestion + 1 === this.state.quiz.length;

    render() {
        const { quiz, activeQuestion, answerState, isFinished, results } = this.state;
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответь на вопросы</h1>
                    {isFinished 
                        ? <FinishedQuiz 
                            results={results}
                            quiz={quiz}
                            onRetry={onRetryHandler}
                        />
                        : <ActiveQuiz 
                            question={quiz[activeQuestion].question}
                            answers={quiz[activeQuestion].answers}
                            onAnswerClick={this.clickHandler}
                            quizLength={quiz.length}
                            answerNumber={activeQuestion + 1}
                            state={answerState}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default Quiz;
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
                question: 'Кем был персонаж по имени Бегомот в романе Мастер и Маргарита?',
                rightAnswerId: 3, 
                answers: [
                    { id: 1, text: 'Бегемотом' },
                    { id: 2, text: 'Трубочистом'},
                    { id: 3, text: 'Котом' },
                    { id: 4, text: 'Бродягой'},
                ],
            },
            {
                id: 2,
                question: 'Какие цветы несла в руках Маргарита перед встречей с Мастером?',
                rightAnswerId: 1,
                answers: [
                    { id: 1, text: 'Вербу' },
                    { id: 2, text: 'Сирень' },
                    { id: 3, text: 'Акацию' },
                    { id: 4, text: 'Тюльпаны' },
                ],
            },
             {
                id: 3,
                question: 'Кто такая Гелла?',
                rightAnswerId: 2,
                answers: [
                    { id: 1, text: 'Ведьма' },
                    { id: 2, text: 'Служанка Воланда' },
                    { id: 3, text: 'Хозяйка бала у Сатаны' },
                    { id: 4, text: 'Заклинательница' },
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
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        });
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
                            onRetry={this.onRetryHandler}
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
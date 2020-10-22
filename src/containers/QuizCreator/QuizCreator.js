import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import { Button } from '../../components/UI/Button/Button';
import createControl from '../../form/formFramework';

function createOptionControl(number) {
	return createControl(
		{
			id: number,
			label: `Введите вопрос ${number}`,
			errorMessage: 'Вопрос не может быть пустым',
		},
		{ required: true },
	);
}

function createFormControls() {
	return {
		quiz: [],
		formControls: {
			question: createControl({ label: 'Введите вопрос', errorMessage: 'Вопрос не может быть пустым' }, { required: true }),
			option1: createOptionControl(1),
			option2: createOptionControl(2),
			option3: createOptionControl(3),
			option4: createOptionControl(4),
		},
	}
}
class QuizCreator extends Component {
	constructor(props) {
		super(props);
		this.state = createFormControls();
	}

	submitHandler = (e) => e.preventDefault();

	addQuestionHandler = () => { };

	createQuizHandler = () => { };

	render() {
		return (
			<div className={classes.QuizCreator}>
				<div>
					<h1>Создание теста</h1>
					<form onSubmit={this.submitHandler}>
						<input type="text" />
						<hr />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<Button
							type="primary"
							onClick={this.addQuestionHandler}
						>
							Добавить вопрос
						</Button>
						<Button
							type="success"
							onClick={this.createQuizHandler}
						>
							Создать тест
						</Button>
					</form>
				</div>

			</div>
		);
	}
}

export default QuizCreator;

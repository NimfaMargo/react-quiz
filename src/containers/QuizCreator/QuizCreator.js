import React, { useState, Fragment } from 'react';
import classes from './QuizCreator.module.css';
import { Button } from '../../components/UI/Button/Button';
import { createControl, validate } from '../../form/formFramework';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';

function createOptionControl(number) {
	return createControl(
		{
			id: number,
			label: `Вариант ${number}`,
			errorMessage: 'Вариант не может быть пустым',
		},
		{ required: true },
	);
}

function createFormControls() {
	return {
		question: createControl({ id: 0, label: 'Введите вопрос', errorMessage: 'Вопрос не может быть пустым' }, { required: true }),
		option1: createOptionControl(1),
		option2: createOptionControl(2),
		option3: createOptionControl(3),
		option4: createOptionControl(4),
	};
}

const QuizCreator = () => {
	const [quiz, setQuiz] = useState([]);
	const [isFormValid, setFormValid] = useState(false);
	const [formControls, setFormControls] = useState(createFormControls());
	const [rightAnswerId, setRightAnswerId] = useState(1);
	const submitHandler = (e) => e.preventDefault();
	const addQuestionHandler = () => { };
	const createQuizHandler = () => { };

	const changeHandler = (e, controlName) => {
		e.preventDefault();
		const control = { ...formControls[controlName] };
		control.touched = true;
		control.value = e.target.value;
		control.valid = validate(control.value, control.validation);
		console.log(control, 'change');
		formControls[controlName] = control;
		console.log(formControls, 'formControls');
		setFormControls(formControls);
	};
	const selectChangeHandler = (e) => setRightAnswerId(e.target.value);

	const renderControls = () => Object.keys(formControls).map((controlName, index) => {
			const control = formControls[controlName];

			return (
				<Fragment key={control.id}>
					<Input
						label={control.label}
						value={control.value}
						valid={control.valid}
						shouldValidate={!control.validation}
						touched={control.touched}
						errorMessage={control.errorMessage}
						onChange={(e) => changeHandler(e, controlName)}
					/>
					{ index === 0 ? <hr /> : null}
				</Fragment>
			);
		});

	return (
		<div className={classes.QuizCreator}>
			<div>
				<h1>Создание теста</h1>
				<form onSubmit={submitHandler}>
					{renderControls()}
					<Select
						label="Выберите правильный ответ"
						value={rightAnswerId}
						options={[
							{ id: 0, text: 1, value: 1 },
							{ id: 1, text: 2, value: 2 },
							{ id: 2, text: 3, value: 3 },
							{ id: 3, text: 4, value: 4 },
						]}
						onChange={selectChangeHandler}
					/>
					<Button
						type="primary"
						onClick={addQuestionHandler}
					>
						Добавить вопрос
					</Button>
					<Button
						type="success"
						onClick={createQuizHandler}
					>
						Создать тест
					</Button>
				</form>
			</div>

		</div>
	);
};

export default QuizCreator;

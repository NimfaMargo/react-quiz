import React, { Component } from 'react';
import is from 'is_js';
import classes from './Auth.module.css';
import { Button } from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
            isFormValid: false,
            formControls: {
                email: {
					id: 1,
                    value: '',
                    type: 'email',
                    label: 'Email',
                    errorMessage: 'Введите корректный Email',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        email: true,
                    },
                },
                password: {
					id: 2,
                    value: '',
                    type: 'password',
                    label: 'Пароль',
                    errorMessage: 'Пароль слишком короткий',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 6,
                    },
                },
            },
        };
    }

	registerHandler = () => {};

	loginHandler = () => {};

	submitHandler = (e) => e.preventDafault();

	onChangeHandler = (e, controlName) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.value = e.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControls[controlName] = control;
        let isFormValid = true;
        Object.keys(formControls).forEach((name) => {
            isFormValid = formControls[name].valid && isFormValid;
        });
        this.setState({ formControls, isFormValid });
    }

	validateControl(value, validation) {
		if (!validation) {
			return true;
		}
		let isValid = true;
		if (validation.required) {
			isValid = value.trim() !== '' && isValid;
		}
		if (validation.email) {
			isValid = is.email(value) && isValid;
		}
		if (validation.minLength) {
			isValid = value.trim().length >= validation.minLength && isValid;
		}
		return isValid;
	}

	renderInputs() {
		const { formControls } = this.state;
		return Object.keys(formControls).map((controlName) => {
			const control = formControls[controlName];
			return (
				<Input
					key={controlName + control.id}
					type={control.type}
					value={control.value}
					label={control.label}
					errorMessage={control.errorMessage}
					valid={control.valid}
					touched={control.touched}
					shouldValidate={!!control.validation}
					onChange={(e) => this.onChangeHandler(e, controlName)}
				/>
			);
		});
	}

	render() {
		const { isFormValid } = this.state;
		return (
			<div className={classes.Auth}>
				<div>
				<h1>Авторизация</h1>
				<form className={classes.AuthForm} onSubmit={this.submitHandler}>
					{this.renderInputs()}
					<Button
						type="success"
						onClick={this.loginHandler}
						disabled={!isFormValid}
					>
					Войти
					</Button>
					<Button
						type="primary"
						onClick={this.registerHandler}
						disabled={!isFormValid}
					>
					Зарегестрироваться
					</Button>
				</form>
				</div>
			</div>
		);
	}
}

export default Auth;

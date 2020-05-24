import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Auth extends Component {
	state = {
		formControls: {
			email: {
				value: '',
				type: 'email',
				label: 'Email',
				errorMessage: 'Введите корректный Email',
				valid: false,
				touched: false, 
				validation: {
					required: true, 
					email: true,
				}
			},
			password: {
				value: '',
				type: 'email',
				label: 'Email',
				errorMessage: 'Введите корректный Email',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6,
				}
			},
		}
	}
	registerHandler = () => {};
	loginHandler = () => {};
	submitHandler = (e) => {
		e.preventDafault();
	}
	onChangeHandler = (e, controlName) => {
		console.log(`${controlName}: `, e.target.value);
		
	}
	renderInputs() {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName];
			return (
				<Input
					key={controlName + index}
					type={control.type}
					value={control.value}
					label={control.label}
					errorMessage={control.errorMessage}
					valid={control.valid}
					touched={control.touched}
					shouldValidate={!!control.validation}
					onChange={e => this.onChangeHandler(e, controlName)}
				/>
			)
		});
	}
	render() { 
		return (
			<div className={classes.Auth}>
				<div>
					<h1>Авторизация</h1>
					<form className={classes.AuthForm} onSubmit={this.submitHandler}>
						{this.renderInputs()}
						<Button 
							type='success'
							onClick={this.loginHandler}
						>
							Войти
						</Button>
						<Button
							type='primary'
							onClick={this.registerHandler}
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

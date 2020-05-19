import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';

class Auth extends Component {
	registerHandler = () => {};
	loginHandler = () => {};
	submitHandler = (e) => {
		e.preventDafault();
	}
	render() { 
		return (
			<div className={classes.Auth}>
				<div>
					<h1>Авторизация</h1>
					<form className={classes.AuthForm} onSubmit={this.submitHandler}>
						<input type='text'/>
						<input type='text'/>
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

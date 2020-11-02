export function createControl(config, validation) {
	return {
		...config,
		validation,
		valid: !validation,
		touched: false,
		value: '',
	};
}

export function validate(value, rules = null) {
	if (!rules) {
		return true;
	}
	let isValid = true;
	if (rules.required) {
		isValid = value.trim() !== '' && isValid;
	}
	return isValid;
}

export function validateForm(controls) {

}

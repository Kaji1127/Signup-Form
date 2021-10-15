//|| lastName === '' ||  || password === '' !email.match(mailValidate)
const btnSubmit = document.querySelector('.form__submit');

btnSubmit.addEventListener('click', (e) => {
	/*======================== Variables ========================*/
	const firstName = document.querySelector('.firstname');
	const lastName = document.querySelector('.lastname');
	const email = document.querySelector('.email');
	const password = document.querySelector('.password');

	const mailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	e.preventDefault();

	/*============= First Name ============*/
	const errFirstname = document.querySelectorAll('.error-firstname');
	if (firstName.value === '') {
		errFirstname.forEach((err) => err.classList.add('validate'));
		firstName.style.borderColor = 'hsl(0, 100%, 74%)';
	} else {
		errFirstname.forEach((err) => err.classList.remove('validate'));
		firstName.style.borderColor = 'hsl(0, 0%, 87%)';
	}

	/*============= Last Name =============*/
	const errLastname = document.querySelectorAll('.error-lastname');
	if (lastName.value === '') {
		errLastname.forEach((err) => err.classList.add('validate'));
		lastName.style.borderColor = 'hsl(0, 100%, 74%)';
	} else {
		errLastname.forEach((err) => err.classList.remove('validate'));
		lastName.style.borderColor = 'hsl(0, 0%, 87%)';
	}

	/*=============== Email ===============*/
	const errEmail = document.querySelectorAll('.error-email');
	if (email.value === '' || !email.value.match(mailRegex)) {
		errEmail.forEach((err) => err.classList.add('validate'));
		email.style.borderColor = 'hsl(0, 100%, 74%)';
	} else {
		errEmail.forEach((err) => err.classList.remove('validate'));
		email.style.borderColor = 'hsl(0, 0%, 87%)';
	}

	/*=============== Password ============*/
	const errPassword = document.querySelectorAll('.error-password');
	if (password.value === '') {
		errPassword.forEach((err) => err.classList.add('validate'));
		password.style.borderColor = 'hsl(0, 100%, 74%)';
	} else {
		errPassword.forEach((err) => err.classList.remove('validate'));
		password.style.borderColor = 'hsl(0, 0%, 87%)';
	}
});

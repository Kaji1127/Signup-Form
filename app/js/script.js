//|| lastName === '' ||  || password === '' !email.match(mailValidate)
const btnSubmit = document.querySelector('.form__submit');

btnSubmit.addEventListener('click', (e) => {
	/*======================== Variables ========================*/
	const firstName = document.querySelector('.firstname');
	const lastName = document.querySelector('.lastname');
	const email = document.querySelector('.email');
	const password = document.querySelector('.password');

	const mailValidate = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	e.preventDefault();

	/*============= First Name ============*/
	const errFirstname = document.querySelectorAll('.error-firstname');
	if (firstName.value === '') {
		errFirstname.forEach((err) => err.classList.add('validate'));
	} else {
		errFirstname.forEach((err) => err.classList.remove('validate'));
	}

	/*============= Last Name =============*/
	const errLastname = document.querySelectorAll('.error-lastname');
	if (lastName.value === '') {
		errLastname.forEach((err) => err.classList.add('validate'));
	} else {
		errLastname.forEach((err) => err.classList.remove('validate'));
	}

	/*=============== Email ===============*/
	const errEmail = document.querySelectorAll('.error-email');
	if (email.value === '' || !email.value.match(mailValidate)) {
		errEmail.forEach((err) => err.classList.add('validate'));
	} else {
		errEmail.forEach((err) => err.classList.remove('validate'));
	}

	/*=============== Password ============*/
	const errPassword = document.querySelectorAll('.error-password');
	if (password.value === '') {
		errPassword.forEach((err) => err.classList.add('validate'));
	} else {
		errPassword.forEach((err) => err.classList.remove('validate'));
	}
});

const exclamationMark = document.querySelectorAll('.exclamation-mark');
const formControl = document.querySelectorAll('.form-control');
const small = document.querySelectorAll('small');
const form = document.querySelector('form');
const forename = document.getElementById('forename');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitButton = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // log value to console of inputs
    console.log(forename.value);
    console.log(surname.value);
    console.log(email.value);
    console.log(password.value);
    checkInputs();
});

// form.addEventListener('submit', logSubmit);

// function logSubmit(e) {
//     // This stops the page from refreshing!
//     e.preventDefault();
//     console.log('form submitted');
// }

function checkInputs () {
    // trim to remove the whitespaces
	const firstNameValue = forename.value.trim();
	const secondNameValue = surname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

    if(firstNameValue === '') {
        setErrorFor(forename, 'First name cannot be empty')
    } else {
        setSuccessFor(forename);
    }

    if(secondNameValue === '') {
        setErrorFor(surname, 'Last name cannot be empty')
    } else {
        setSuccessFor(surname);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be empty')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email')
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty')
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.classList.remove('hidden');
    const exclamationMark = formControl.querySelector('.exclamation-mark');
    exclamationMark.classList.remove('hidden');
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const exclamationMark = formControl.querySelector('.exclamation-mark');
    exclamationMark.classList.add('hidden');
    const small = formControl.querySelector('small');
    small.classList.add('hidden');
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
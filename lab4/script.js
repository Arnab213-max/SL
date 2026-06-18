const form = document.getElementById('signupForm');
const button = document.getElementById('signupButton');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //erroe elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    //input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    //reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    let isValid = true;
    //name validation
    if (name === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else if (name.length < 3 || name.length > 100) {
        nameError.textContent = 'Name must be between 3 and 100 characters.';
        isValid = false;
    }
    //email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    }   
    else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }
    //password validation
    if (password === '') {     
        passwordError.textContent = 'Password is required.';
        isValid = false;
    }
    else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }
    else if (password !== confirmPassword){
passwordError.textContent = 'Passwords do not match.';
        isValid = false;
   
    }
    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();   
    }
    });
// Function to toggle password visibility
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

// Function to validate the form
function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var dobInput = document.getElementById('dob');
    var phoneInput = document.getElementById('phone');

    // Check if name, email, password, confirm password, dob, and phone are not empty
    if (!nameInput.value || !emailInput.value || !passwordInput.value || !confirmPasswordInput.value || !dobInput.value || !phoneInput.value) {
        alert('Please fill out all fields.');
        return false;
    }

    // Check if the email is in a valid format using a regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Check if the password meets minimum requirements (e.g., at least 8 characters, containing letters and numbers)
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        alert('Password must be at least 8 characters long and contain both letters and numbers.');
        return false;
    }

    // Check if the password and confirm password fields match
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match.');
        return false;
    }

    // Check if the date of birth is a valid date and not in the future
    var dobValue = new Date(dobInput.value);
    var currentDate = new Date();
    if (isNaN(dobValue.getTime()) || dobValue > currentDate) {
        alert('Please enter a valid date of birth that is not in the future.');
        return false;
    }

    // Check if the phone number is 8 digits long
    var phonePattern = /^\d{8}$/;
    if (!phonePattern.test(phoneInput.value)) {
        alert('Phone number must be 8 digits long.');
        return false;
    }

    return true;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
        var userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            dob: document.getElementById('dob').value,
            phone: document.getElementById('phone').value,
            mazeCompletionTime: 0 // Initialize the maze completion time to 0

        };

        // Store the user data in local storage
        var allUserDetails = JSON.parse(localStorage.getItem('allUserDetails')) || {};
        allUserDetails[userData.email] = userData;
        localStorage.setItem('allUserDetails', JSON.stringify(allUserDetails));

        alert('Registration successful! Redirecting to login page...');

        // Redirect to the login page
        window.location.href = 'login.html';
    }
}

// Add an event listener to the form
var signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', handleFormSubmit);

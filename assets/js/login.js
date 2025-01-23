// Function to check if the user is already logged in
function checkLoggedIn() {
    var currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
        // User is already logged in, hide the login form and show the sign-off button
        document.getElementById('container').style.display = 'none';
        document.getElementById('signOffButton').style.display = 'block';
    }
}

// Function to validate the form
function loginUser() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Retrieve user data from local storage
    var allUserDetails = JSON.parse(localStorage.getItem("allUserDetails")) || {};

    if (allUserDetails[email] && allUserDetails[email].password === password) {
        console.log('Login successful, setting session storage'); // Debug log

        // Store the logged-in user's email in session storage
        sessionStorage.setItem('currentUser', email);
        

        alert('Login successful!');
        window.location.href = 'game.html'; // Redirect to game page 
        console.log('Login failed: Invalid email or password'); // Debug log
        // alert('Invalid email or password');
    }
}
checkLoggedIn();

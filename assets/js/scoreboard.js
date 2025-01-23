
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve allUserDetails from local storage
    var allUserDetails = JSON.parse(localStorage.getItem("allUserDetails")) || {};

    // Create an array to store user data with completion times
    var userDataArray = [];

    // Convert user data into an array with completion times
    for (var email in allUserDetails) {
        var user = allUserDetails[email];
        if (user.mazeCompletionTime !== undefined) {
            userDataArray.push({
                email: email,
                name: user.name,
                mazeCompletionTime: user.mazeCompletionTime
            });
        }
    }

    // Sort user data array by mazeCompletionTime in ascending order
    userDataArray.sort(function (a, b) {
        return a.mazeCompletionTime - b.mazeCompletionTime;
    });

    // Get the scoreboard table body
    var scoreTableBody = document.getElementById('scoreBody');

    // Iterate through sorted user data and populate the table
    for (var i = 0; i < userDataArray.length; i++) {
        var userData = userDataArray[i];
        var rank = i + 1;
        var userRow = `
            <tr>
                <td>${rank}</td>
                <td>${userData.name}</td>
                <td>${userData.mazeCompletionTime.toFixed(2)}</td>
            </tr>
        `;
        scoreTableBody.innerHTML += userRow;
    }
});
// Function to log out the user
function signOffUser() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}


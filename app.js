// Init GitHub
const github = new GitHub();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (event) => {
    // Get input text
    const userText = event.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(response => {
                // console.log(response.profileData.message);
                if (response.profileData.message === 'Not Found') {
                    // Show alert
                    console.log('Alert');
                } else {
                    // Show profile
                    console.log('Profile');
                }
            });
    } else {
        // Clear profile
    }
});
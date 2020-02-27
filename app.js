// Init GitHub
const github = new GitHub();
// Init UI class
const ui = new UI();

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
                if (response.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(response.profile);
                    ui.showRepos(response.repos);
                }
            });
    } else {
        ui.clearProfile();
    }
});
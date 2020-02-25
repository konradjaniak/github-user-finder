class GitHub {
    constructor() {
        this.client_id = '0c0ed4afd2aabc1da9f7';
        this.client_secret = '1a8f5a6f189cdda42636f5df82e0191959ab92ce';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        return {
            profileData
        }
    }
}
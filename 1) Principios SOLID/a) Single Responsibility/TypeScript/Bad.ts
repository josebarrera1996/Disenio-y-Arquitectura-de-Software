class UserSettings {
    constructor(private readonly user: User) {
    }

    changeSettings(settings: UserSettings) {
        if (this.verifyCredentials()) {
            // ...
        }
    }

    verifyCredentials() {
        // ...
    }
}
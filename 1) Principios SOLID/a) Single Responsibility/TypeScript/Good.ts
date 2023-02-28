class UserAuth {
    constructor(private readonly user: User) {
    }

    verifyCredentials() {
        // ...
    }
}


class UserSettings {
    private readonly auth: UserAuth;

    constructor(private readonly user: User) {
        this.auth = new UserAuth(user);
    }

    changeSettings(settings: UserSettings) {
        if (this.auth.verifyCredentials()) {
            // ...
        }
    }
}
class GuildedUserSummary {
    constructor(userData) {
        if (userData.id) {
            this.id = userData.id;
        } else {
            this.id = null;
        }
        if (userData.type) {
            this.userType = userData.type;
        } else {
            this.userType = null;
        }
        if (userData.name) {
            this.name = userData.name;
        } else {
            this.name = null;
        }
    }
}

module.exports.GuildedUserSummary = GuildedUserSummary;
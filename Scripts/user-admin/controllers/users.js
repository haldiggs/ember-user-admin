UserAdmin.UsersController = Ember.ArrayController.extend({
    loadUsers: function () {
        var q = this.get("searchTerm");
        this.set("model", this.store.find("user", { q: q, limit: 3 }));
    },
    title: function () {
        var q = this.get("searchTerm");
        if (q) {
            return "Searching for " + q;
        } else {
            return "Last 50 Users";
        }
    }.property("searchTerm"),
    searchTerm: "",
    actions: {
        searchForUser: function () {
            this.loadUsers();
        }
    }
});

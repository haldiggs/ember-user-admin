UserAdmin.UserController = Ember.ObjectController.extend({
    fullName: function () {
        return this.get("first") + " " + this.get("last");
    }.property("first", "last")
});
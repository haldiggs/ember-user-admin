UserAdmin.UserChangerolesController = Ember.Controller.extend({
    needs: ["user"],
    roles: function () {
        return this.store.find("role");
    }.property()
});
UserAdmin.UsersRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        controller.loadUsers();
    }
});
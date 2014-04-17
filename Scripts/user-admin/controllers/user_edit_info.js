UserAdmin.UserEditinfoController = Ember.ObjectController.extend({
    needs: ['user'],
    actions: {
        saveUser: function () {
            var user = this.get("controllers.user.model");
            user.save();
        }
    }
});

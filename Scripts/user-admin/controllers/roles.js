UserAdmin.RolesController = Ember.ArrayController.extend({
    needs: ["user"],
    itemController: "role"
});
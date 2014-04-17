UserAdmin.RoleController = Ember.ObjectController.extend({
    needs: ["user"],
    user: Ember.computed.alias("controllers.user"),
    assignments: Ember.computed.alias("controllers.user.membership"),
    userIsAssigned: function () {
        //ROBIN IS AWESOME
        return this.get("assignments").filterProperty("role.id", this.get("id"));
    }.property("assignments.@each"),
    actions: {
        removeRole: function () {
            //ROBIN! Love you :)
            var membership = this.get("userIsAssigned")[0];
            if (membership) {
                //flags for delete
                membership.deleteRecord();
                //saves
                membership.save();
            }

        },
        assignRole: function () {
            var roleId = this.get("id");
            var user = this.get("user.model");
            var role = this.get("model");
            var newAssignment = this.store.createRecord("membership", {
                user: user,
                role: role
            });
            newAssignment.save();
        }
    }
});
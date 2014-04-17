window.UserAdmin = Ember.Application.create({
    rootElement: '#user-admin-app',
    LOG_TRANSITIONS: true
});

UserAdmin.ApplicationAdapter = DS.RESTAdapter.extend({
    host: "http://localhost:41109",
    namespace: "api"  
});
UserAdmin.GravatarImageComponent = Ember.Component.extend({
    email: "",
    size: 120,
    gravatarUrl: function () {
        var email = this.get("email");
        var size = this.get("size");
        var hashed = "http://www.gravatar.com/avatar/" + hex_md5(email) + "?s=" + size;
        return hashed
    }.property("email", "size")

});
UserAdmin.UserAddnoteController = Ember.Controller.extend({
    needs: ["user"],
    actions: {
        saveNote: function () {
            //Don't do this it should be an explicit property
            //this is for demo only...
            var note = $("#new-note").val();
            var user = this.get("controllers.user");
            var newNote = this.store.createRecord("note", { note: note, created_at: new Date() });
            user.get("notes").pushObject(newNote);
            newNote.save();
        }
    }
});
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
UserAdmin.RolesController = Ember.ArrayController.extend({
    needs: ["user"],
    itemController: "role"
});
UserAdmin.UserController = Ember.ObjectController.extend({
    fullName: function () {
        return this.get("first") + " " + this.get("last");
    }.property("first", "last")
});
UserAdmin.UserChangerolesController = Ember.Controller.extend({
    needs: ["user"],
    roles: function () {
        return this.store.find("role");
    }.property()
});
UserAdmin.UserEditinfoController = Ember.ObjectController.extend({
    needs: ['user'],
    actions: {
        saveUser: function () {
            var user = this.get("controllers.user.model");
            user.save();
        }
    }
});

UserAdmin.UserIndexController = Ember.ObjectController.extend({
    needs: ['user']
});
UserAdmin.UserNotesController = Ember.ArrayController.extend({
    sortProperties: ["created_at"],
    sortAscending: false
});
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

Ember.Handlebars.registerBoundHelper('fromDate', function (theDate) {
    var today = moment();
    var target = moment(theDate);
    return target.from(today);
});

UserAdmin.Log = DS.Model.extend({
    entry: DS.attr("string"),
    user: DS.belongsTo("user"),
    created_at: DS.attr("date")
});
UserAdmin.Membership = DS.Model.extend({
    user: DS.belongsTo("user"),
    role: DS.belongsTo("role")
});
UserAdmin.Note = DS.Model.extend({
    note: DS.attr("string"),
    user: DS.belongsTo("user"),
    created_at: DS.attr("date")
});
UserAdmin.Role = DS.Model.extend({
    name: DS.attr("string"),
    membership: DS.hasMany("membership")
});
UserAdmin.User = DS.Model.extend({
    email: DS.attr("string"),
    userName: DS.attr("string"),
    first: DS.attr("string"),
    last: DS.attr("string"),
    bio: DS.attr("string"),
    twitter: DS.attr("string"),
    created_at: DS.attr("date"),
    logs: DS.hasMany("log", { async: true }),
    notes: DS.hasMany("note", { async: true }),
    membership: DS.hasMany("membership")
});
UserAdmin.Router.map(function () {
    this.resource("users");
    this.resource("user", { path: "users/:user_id" }, function () {
        this.route("editinfo", { path: "edit" });
        this.route("changepassword", { path: "change-password" });
        this.route("changeroles", { path: "edit-roles" });
        this.route("addnote", { path: "add-note" });
    });
});
UserAdmin.UsersRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        controller.loadUsers();
    }
});
UserAdmin.BreadcrumbView = Ember.View.extend({
    templateName: "breadcrumbs",
    pageTitle: "",
    showPageLink: Ember.computed.any("pageTitle")
});
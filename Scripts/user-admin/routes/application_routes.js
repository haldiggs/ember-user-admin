UserAdmin.Router.map(function () {
    this.resource("users");
    this.resource("user", { path: "users/:user_id" }, function () {
        this.route("editinfo", { path: "edit" });
        this.route("changepassword", { path: "change-password" });
        this.route("changeroles", { path: "edit-roles" });
        this.route("addnote", { path: "add-note" });
    });
});
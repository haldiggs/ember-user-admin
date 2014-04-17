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
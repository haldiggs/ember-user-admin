UserAdmin.Membership = DS.Model.extend({
    user: DS.belongsTo("user"),
    role: DS.belongsTo("role")
});
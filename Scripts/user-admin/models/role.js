UserAdmin.Role = DS.Model.extend({
    name: DS.attr("string"),
    membership: DS.hasMany("membership")
});
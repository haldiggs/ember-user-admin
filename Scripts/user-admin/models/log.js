UserAdmin.Log = DS.Model.extend({
    entry: DS.attr("string"),
    user: DS.belongsTo("user"),
    created_at: DS.attr("date")
});
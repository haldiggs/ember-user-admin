UserAdmin.Note = DS.Model.extend({
    note: DS.attr("string"),
    user: DS.belongsTo("user"),
    created_at: DS.attr("date")
});
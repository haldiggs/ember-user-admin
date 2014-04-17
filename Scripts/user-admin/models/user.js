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
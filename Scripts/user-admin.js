window.UserAdmin = Ember.Application.create({
    rootElement: '#user-admin-app',
    LOG_TRANSITIONS: true
});

UserAdmin.ApplicationAdapter = DS.RESTAdapter.extend({
    host: "http://localhost:41109",
    namespace: "api"  
});
UserAdmin.BreadcrumbView = Ember.View.extend({
    templateName: "breadcrumbs",
    pageTitle: "",
    showPageLink: Ember.computed.any("pageTitle")
});
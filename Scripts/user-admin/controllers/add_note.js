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
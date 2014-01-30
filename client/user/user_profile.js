Template.userProfileUpdate.events({
    'submit form': function(e, tmpl) {
        e.preventDefault();


        var userProfile = {
            name: $(e.target).find('[name=name]').val(),
            email: $(e.target).find('[name=email]').val(),
            description: $(e.target).find('[name=description]').val(),
            fileName: $(e.target).find('[name=file]').val().split('\\').pop()
            //var file = event.currentTarget.files[0];

        };


        /*var file = e.target.files[0];
        //for (var i = 0, f; f = files[i]; i++) {
            ContactsFS.storeFile(file);
        //}
        */
        var fileInput = tmpl.find('input[type=file]');
        var form = e.currentTarget;
        var file = fileInput.files[0];
        console.log("event calling upload file");
        MeteorFile.read(file, function(err, meteorFile) {
            Meteor.call("uploadFile", meteorFile, function(err) {
                if (err) {
                    throw err;
                } else {
                    form.reset();
                }
            });
        });
        /*var file = $(e.target).files[0];
        var reader = new FileReader();
        reader.onload = function(fileLoadEvent) {
            Meteor.call('file_upload', file, reader.result);
        };
        reader.readAsBinaryString(file);*/

        Meteor.call('update_profile', userProfile, function(error, id) {
            if (error) {
                // display the error to the user
                throwError(error.reason);
            } else {
                Router.go('gwall', {
                    _id: id
                });
            }
        });

    }
});

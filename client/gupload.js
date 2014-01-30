
Template.gupload.events({
    'click a': function(e, tmpl) {
        e.preventDefault();

        //var divId = e.target.id.split(",");

        var image = {
            /*locationX: divId[0],
            locationY: divId[1],*/
            locationX: $(e.target).find('[name=locationX]').val(),
            locationY: $(e.target).find('[name=locationY]').val(),
            fileName: $(e.target).find('[name=file]').val().split('\\').pop()

        };

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


        Meteor.call('uploadWallImage', image, function(error, id) {
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
Template.greserve.events({
    'submit form': function(e, tmpl) {//click a
        e.preventDefault();

        var divId = e.target.id.split(",");

        var image = {
            /*name: $(e.target).find('[name=name]').val(),
            email: $(e.target).find('[name=email]').val(),
            description: $(e.target).find('[name=description]').val(),
            fileName: $(e.target).find('[name=file]').val().split('\\').pop()*/
            //var file = event.currentTarget.files[0];
            locationX: parseInt(divId[0]),
            locationY: parseInt(divId[1])
            //locationX: $(e.target).find('[name=locationX]').val(),
            //locationY: $(e.target).find('[name=locationY]').val()

        };


        Meteor.call('reserveLocation', image, function(error, id) {
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
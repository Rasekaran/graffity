Images = new Meteor.Collection('Images');
Meteor.methods({
    reserveLocation: function(postAttributes) {
        var user = Meteor.user();

            // ensure the user is logged in
        if (!user)
            throw new Meteor.Error(401, "You need to login to post new stories");
        if (!postAttributes.locationX)
            throw new Meteor.Error(422, 'Please fill in a headline');
        if (!postAttributes.locationY)
            throw new Meteor.Error(422, 'Please fill in a headline');
        var updatingImage = Images.findOne({ locationX:postAttributes.locationX, locationY:postAttributes.locationY });
        if(updatingImage.status!= "NotReserved") {
        	throw new Meteor.Error(422, 'Please fill in a headline');
        }
        
        updatingImage.status = "Reserved";
        updatingImage.autherId = user._id;
        // pick out the whitelisted keys
        /*var image = _.extend(_.pick(postAttributes, 'locationX', 'locationY'), {
            autherId: user._id,
            voters: {},
            status: "reserved",
            imageName: ""
        });
        var imageId = Images.insert(image);*/
        var imageId = Images.update(updatingImage._id,updatingImage);
        //return postId;
    },

    uploadWallImage: function(postAttributes) {
        var user = Meteor.user();

            // ensure the user is logged in
        if (!user)
            throw new Meteor.Error(401, "You need to login to post new stories");
        if (!postAttributes.locationX)
            throw new Meteor.Error(422, 'Please fill in a headline');
        if (!postAttributes.locationY)
            throw new Meteor.Error(422, 'Please fill in a headline');
        var recerved = Images.findOne({ locationX:postAttributes.locationX, locationY:postAttributes.locationY });;
        if( !recerved || recerved.autherId != user._id ) {
        	throw new Meteor.Error(422, 'Please fill in a headline');
        }
        
        recerved.imageName = postAttributes.fileName;
        recerved.status = "Uploaded";
        var imageId = Images.update(recerved._id,recerved);
        //var imageId = Images.update(recerved._id,{imageName: postAttributes.fileName },{status: "Uploaded"});
        //return postId;
    }

});
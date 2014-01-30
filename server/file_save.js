//if (Meteor.isServer) {
  Meteor.methods({
    'uploadFile': function (file) {
    	console.log("calling upload file");
      return file.save('/home/rasi/graffity/public/profile_images');
    },
    'uploadWallImageFile': function (file) {
    	console.log("calling upload file");
      return file.save('/home/rasi/graffity/public/wall_images');
    }
  });
//}
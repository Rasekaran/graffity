//if (Meteor.isServer) {
  Meteor.methods({
    'uploadFile': function (file) {
    	console.log("calling upload file");
      return file.save('/home/rasi/uploads');
    }
  });
//}
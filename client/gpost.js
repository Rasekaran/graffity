Template.gpostrollover.events({
    'click .lovebtn': function(e) {
        e.preventDefault();
        Meteor.call('upvote', {locationX:this.locationX, locationY:this.locationY});
    }
});

Template.gpostrollover.helpers({
    userProfile: function() {
        var uProfile = UserProfiles.findOne({userId:this.autherId});
        return uProfile;
    },

    level: function() {
    	var uProfile = UserProfiles.findOne({userId:this.autherId});
        var lev="Expert";
        if(uProfile.votes < 10) {
        	lev = "Stater";
        } else {
        	if (uProfile.votes > 100) {
        		lev = "Medium";
        	} else {
        		lev = "Expert";
        	}
        }
        return lev;
    },

});

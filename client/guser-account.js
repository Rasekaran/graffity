Template.guserAccount.helpers({
    userProfileData: function() {
    	var user = Meteor.user();
    	//return UserProfiles.find({userId: user._id})
    	var userProfile = UserProfiles.findOne({userId: user._id});
    	//console.log("Test" + userProfile.name);
    	//this.name = userProfile.name;
    	return userProfile;
    },

    level: function() {
    	var user = Meteor.user();
    	var uProfile = UserProfiles.findOne({userId:user._id});
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

    facebookShareLink : function () {
		
		return 'http://www.facebook.com/sharer/sharer.php?u=' + Router.routes['gwall'].url();
	},

	twitterShareLink : function () {
		return 'http://twitter.com/intent/tweet?text=' + this.title + ' ' + Router.routes['gwall'].url();
	},

	linkedinShareLink : function () {

		return 'http://www.linkedin.com/shareArticle?mini=true&url=' + Router.routes['gwall'].url();

	},

	gplusShareLink : function () {
		return 'https://plus.google.com/share?url=' + Router.routes['gwall'].url({_id: this._id });
	}
});
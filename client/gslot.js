Template.gslot.helpers({
    isReserved: function() {
        
        return this.status == "reserved";
    }
    isUploaded: function() {
        
        return this.status == "uploaded";
    }
    isOwnSlot: function(){
    	return this.ownerId == Meteor.user()._id;
    }
});
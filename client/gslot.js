Template.gslot.helpers({
    isReserved: function() {
        console.log("Test" + this.status);
        return this.status == "Reserved";
    },
    isUploaded: function() {
        console.log("Test2" + this.status);
        return this.status == "Uploaded";
    },
    isOwnSlot: function(){
    	return this.autherId == Meteor.user()._id;
    }
});
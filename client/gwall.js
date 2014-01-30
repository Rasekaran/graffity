Template.gwall.helpers({
    imageRaws: function() {
    	RawImages = new Meteor.Collection(null);
        for (var i = 0; i < 3; i++) {
            var rawData = Images.find({
                locationX: (i + 1)
            }, {
                sort: {
                    locationY: 1
                }
            });
            RawImages.insert({
                rawData: rawData
            });
        }
        return RawImages.find();
    }
});


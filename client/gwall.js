Template.gwall.helpers({
    imageRaws: function() {
        /*RawImages = new Meteor.Collection(null);
        
        for (var i = 1; i < 4; i++) {
            var rawData = Images.find({
                locationX: i
            }, {
                sort: { locationY: -1 }
            });
            RawImages.insert({
                order: i,
                rawData: rawData
            });
        }
        return RawImages.find();*/

        rawImages=new Array();

        for (var i = 1; i < 4; i++) {
            var rawData = Images.find({
                locationX: i
            }, {
                sort: { locationY: -1 }
            });
            RawImages.insert({
                order: i,
                rawData: rawData
            });
        }
        return RawImages.find();
    }
});

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

        //

        var rawImages=[];

        /*var hasMore = true;
        var row = 1;
        while ( hasMore ){
        	var rowData = Images.find({locationY: row},{$sort: { locationX: -1 }});
        	rawImages[row-1] = rowData;

        	row++;
        	hasMore = (Images.findOne({locationY: row}) != undefined)
        }*/

        for (var i = 1; i < 5; i++) {
            var rawData = Images.find({
                locationX: i
            }, {
                sort: { locationY: -1 }
            });
            rawImages[i-1] = {order: i, rawData:rawData};
        }
        return rawImages;
    }
});

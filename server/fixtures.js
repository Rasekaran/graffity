// Fixture data
if (Images.find().count() === 0) {

    for (var i = 1; i < 4; i++) {
        for (var j = 1; j < 5; j++) {
            Images.insert({
                locationX: i,
                locationY: j,
                autherId: '-1',
                voters: {},
                status: "NotReserved",
                imageName: ""

            });
        } //db.collection.find().sort( { age: -1 } );
    }
}

// Fixture data
if (Images.find().count() === 0) {

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; i++) {
            Images.insert({
                locationX: i,
                locationY: j,
                autherId: '-1',
                voters: [],
                status: "notReserved",
                imageName: ""

            });
        } //db.collection.find().sort( { age: -1 } );
    }
}

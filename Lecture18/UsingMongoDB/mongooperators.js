/**
 * Created by championswimmer on 26/04/17.
 */


students.insertMany([
    {
        name: "First Last",
        age: 13,
        grade: 4
    },
    {
        name: "Another Student",
        age: 14,
        grade: 5
    }
])

students.find({
    age: {
        $gt: 12,
        $lt: 15,
        $ne: 13
    },
})

students.find({
    grade: {
        $or: {
            $lt: 5,
            $gt: 7
        }
    }
})

students.update({
    age: 13
}, {
    age: {
        $mul: 4
    }
}, function (err, result) {

})
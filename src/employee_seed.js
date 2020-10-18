var faker = require('faker');
var moment = require('moment');
module.exports = function populateTab() {
    var employeesOriginal = [];
    for (let i = 1; i < 25; i++) {

        employeesOriginal.push({
            id: i,
            name: faker.name.findName(), // Rowan Nikolaus
            email: faker.internet.email(), // Kassandra.Haley@erich.biz
            phone: faker.phone.phoneNumberFormat(),
            dob: moment().set({
            'year':(moment().get('year')-Math.floor(Math.random()*47)-18),
            'month':Math.floor(Math.random()*12), 
            'date':Math.floor(Math.random()*30)}).format("YYYY-MM-DD"),
            image: faker.image.avatar()
        })
        
    }
    return employeesOriginal
}

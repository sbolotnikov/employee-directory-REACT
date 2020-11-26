var faker = require('faker');
var moment = require('moment');
module.exports = function populateTab() {
    var employeesOriginal = [];
    for (let i = 1; i < 25; i++) {
// pulling 24 records name, email, phone, image url taken from faker.js
// dob taken randomly between 18 and 65 years old currently
        employeesOriginal.push({
            id: i,
            name: faker.name.findName(), 
            email: faker.internet.email(),  
            phone: faker.phone.phoneNumberFormat(),
            dob: moment().set({
            'year':(moment().get('year')-Math.floor(Math.random()*47)-18),
            'month':Math.floor(Math.random()*12), 
            'date':Math.floor(Math.random()*30)}).format("YYYY-MM-DD"),
            image: faker.random.image()
        })
        
    }
    return employeesOriginal
}

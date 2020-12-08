const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        //Gets the employee properties
        super(name, id, email);
        
        //Adds the employee properties
        this.school = school;   
    };

    //Returns the employee's school
    getSchool() {
        return this.school;
    };

    //Returns the employee's role
    getRole() {
        return "Intern";
    };
};

module.exports = Intern;
<<<<<<< HEAD
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

=======
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

>>>>>>> 866ee999730e044a84a7a324277cd1ff4ee9338d
module.exports = Intern;
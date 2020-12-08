<<<<<<< HEAD
const Employee = require("./employee");
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name, id, email);
    
        this.officeNumber = officeNumber;
    };


    getOfficeNumber() 
    {
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };

};
=======
const Employee = require("./employee");
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name, id, email);
    
        this.officeNumber = officeNumber;
    };


    getOfficeNumber() 
    {
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };

};
>>>>>>> 866ee999730e044a84a7a324277cd1ff4ee9338d
module.exports = Manager;
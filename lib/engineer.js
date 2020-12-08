<<<<<<< HEAD
const Employee = require("./employee");
class Engineer extends Employee {

    constructor(name, id, email, github) 
    {
        super(name, id, email);
        this.github = github;
    };

    //Returns GitHub
    getGithub() {
        return this.github;
    };

    //Returns Employee
    getRole() {
        return "Engineer";
    };
};
=======
const Employee = require("./employee");
class Engineer extends Employee {

    constructor(name, id, email, github) 
    {
        super(name, id, email);
        this.github = github;
    };

    //Returns GitHub
    getGithub() {
        return this.github;
    };

    //Returns Employee
    getRole() {
        return "Engineer";
    };
};
>>>>>>> 866ee999730e044a84a7a324277cd1ff4ee9338d
module.exports = Engineer;
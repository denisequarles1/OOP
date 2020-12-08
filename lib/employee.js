//Creates Employee object with name, id, email
class Employee {
  
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    };

    //Returns Name
    getName() {
      return this.name;
    };
  
    //Returns ID
    getId() {
      return this.id;
    };
    
    //Returns Email
    getEmail() {
      return this.email;
    };
    
    //Returns 'Employee'
    getRole() {
      return "Employee";
    };
  };
  
  module.exports = Employee;
<<<<<<< HEAD
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
  
=======
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
  
>>>>>>> 866ee999730e044a84a7a324277cd1ff4ee9338d
  module.exports = Employee;
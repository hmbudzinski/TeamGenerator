class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    //rather than printInfo, use a GET and SET function
    getName(){
      return this.name;
    };
    setName(newName){
      this.name = newName;
    };
    getId(){
      return this.id;
    };
    setId(newId){
      this.id = newId;
    };
    getEmail(){
      return this.email;
    };
    setEmail(newEmail){
      this.email = newEmail;
    };
    getTitle(){
      return "Employee";
  };
  };

module.exports=Employee;

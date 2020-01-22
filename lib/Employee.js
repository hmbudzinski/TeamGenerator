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
    getID(){
      return this.ID;
    };
    
    setID(newID){
      this.ID = newID;
    };

    getemail(){
      return this.email;
    };
    setemail(newEmail){
      this.email = newEmail;
    };
  };

module.exports=Employee;

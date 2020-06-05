const ConterAddorReset = (function(){
    let counter = 0;
    return{
    Incriment: function(){
       counter +=1;
       return counter;
    },
    Reset: function(){
         counter=0;
         return counter;
    }
   }
})();



ConterAddorReset.Incriment();//  0 +1 = 1
ConterAddorReset.Incriment();// 1 + 1 = 2
console.log(ConterAddorReset.Incriment());// 2 + 1 = 3
console.log(ConterAddorReset.Reset()); // 0  -- reseted
console.log(ConterAddorReset.Incriment()); // 0 + 1 = 1


//----------------------------------------------------------------//----------------------------------------------------------------

const MakeAdder = (function(){
    let counter = 0;
    return  function(inc){
            counter+=inc;
            return counter;
        }
    
})();

console.log(MakeAdder(5)); // 0 + 5 = 5
console.log(MakeAdder(5)); // 5 + 5 = 10
console.log(MakeAdder(5)); // 5 + 5 = 10


//-----------------------------------------------------------//-------------------------------------------------------------------

const EmployeeObjectModel = (function(){

    let name ="";
    let age = 0;
    let salary = 0;

    const setName = function(fName){
        name = fName;
    }
 
    const setAge = function(newAge){
        age = newAge;
    }
    const setSalary = function(newSalary){
        salary = newSalary;

    }
    const getAge = function(){
        return age;
    }
    const getSalary = function(){
        return salary;
    }
    const getName = function(){
        return name;
    }
    const increaseSalary = function(percentile){
        newSalary = getSalary() + (percentile * getSalary()); 
        setSalary(newSalary);
    
    }
    const incrementAge = function(){
        newAge = getAge()+1;
        setAge(newAge);

    }

    return{
        setAge: setAge,
        setSalary:setSalary,
        setName:setName,
        increaseSalary: increaseSalary,
        incrementAge:incrementAge,


        printAll: function(){
            console.log(`Name: ${name}, Age: ${age}, Salary: ${salary}`) ;
        }

    }
})();
EmployeeObjectModel.setName("Robel");
EmployeeObjectModel.setAge(29);
EmployeeObjectModel.setSalary(120,000);
EmployeeObjectModel.increaseSalary(20);
EmployeeObjectModel.incrementAge(4);
EmployeeObjectModel.printAll();


//---------------------------------------------------------------------//---------------------------------------------------------------

EmployeeObjectModel.address ="";
EmployeeObjectModel.setAddress = function(newAddress){
    EmployeeObjectModel.address = newAddress;
}
EmployeeObjectModel. getAddress = function(){
    return EmployeeObjectModel.address;
}
EmployeeObjectModel.setAddress("Astana, Kazakhstan");
console.log(EmployeeObjectModel.getAddress());



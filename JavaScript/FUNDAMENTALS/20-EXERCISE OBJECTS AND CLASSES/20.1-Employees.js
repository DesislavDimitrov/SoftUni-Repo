function employeesNumber(input) {

  const employees = {};

input.forEach(name => {
    employees[name] = name.length
});

   for(const name in employees){
       console.log(`Name: ${name} -- Personal Number: ${employees[name]}` );
   }
    
    // "Name: {employeeName} -- Personal Number: {personalNum}" 
}
employeesNumber([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
// Write your solution in this file!
let employee = {
    name: 'John',
    streetAddress: '123 Main Street'
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}
  
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    if (employee.hasOwnProperty(key)) {
      employee[key] = value;
    } else {
      employee[key] = value;
    }
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
  
    if (newEmployee.hasOwnProperty(key)) {
      delete newEmployee[key];
    }
  
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    if (employee.hasOwnProperty(key)) {
    delete employee[key];
    }
    return employee;
  }
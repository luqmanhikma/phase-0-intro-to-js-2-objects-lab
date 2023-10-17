// Write your solution in this file!

// Function 1: Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Creating a new object by spreading the original employee and adding the new key-value pair
  return {
      ...employee,
      [key]: value
  };
}

// Function 2: Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Modifying the original employee and returning it
  employee[key] = value;
  return employee;
}

// Function 3: Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  // Creating a new object by spreading the original employee and excluding the specified key
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function 4: Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Deleting the specified key from the original employee and returning it
  delete employee[key];
  return employee;
}

// Example usage
const employee = {
  name: 'John',
  age: 30,
  role: 'Developer'
};

console.log(updateEmployeeWithKeyAndValue(employee, 'age', 31));
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'role', 'Senior Developer'));

const newEmployee = deleteFromEmployeeByKey(employee, 'age');
console.log(newEmployee);

const updatedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'role');
console.log(updatedEmployee);

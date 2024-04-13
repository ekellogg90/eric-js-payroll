// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = {
    firstName: [],
    lastname: [],
    salary: [],
  };
// Collect employee data - First Name, Last Name, Salary, prompt to add another employee
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
//   const employeesArray = [];

//   const lastName = [];
//   const salary = [];

  while (addEmployeesBtn) {
    // employeesArray.push(window.prompt("First Name:"), window.prompt("Last Name:"), window.prompt("Salary:"));

    employeesArray.firstName.push(window.prompt("First Name:"));
    employeesArray.lastname.push(window.prompt("Last Name"));
    employeesArray.salary.push(window.prompt("Salary:"));

    let again = window.confirm("Add Another Employee?");
    if (again == true) {
        continue;
    } else {
        console.log(employeesArray);
        // console.log(employeeList);
        return employeesArray;
    }
}
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {  // I changed the function input from employeesArray to collectEmployees.  is that okay?
  // TODO: Calculate and display the average salary
  let salTotal = 0;
  for (let i = 0; i < employeesArray.salary.length; i++) {
    salTotal += parseInt(employeesArray.salary[i]);
  }

  let avgSal = salTotal / employeesArray.salary.length;
  console.log(`The average employee salary between our ${employeesArray.salary.length} employee(s) is $${avgSal}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    // probably use options[employeesArray.firstName[i]] and grab corresponding last name some how.  or maybe loop and grab a random i?
    const randomName = Math.floor(Math.random() * employeesArray.firstName.length);
    console.log(`Congratulations to ${employeesArray.firstName[randomName]} ${employeesArray.lastname[randomName]}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    //console.log(`Current Employee: ${currentEmployee}`); // This isn't appearing in console.  unsure why

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

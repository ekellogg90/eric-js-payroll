// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = {
    firstName: [],
    lastName: [],
    salary: [],
  };
// Collect employee data - First Name, Last Name, Salary, prompt to add another employee
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  while (addEmployeesBtn) {
    //First Name window prompt + cancel button functionality
    let answerFirst = window.prompt("First Name:");
    if (answerFirst === null) {
        // Confirms the cancel 
        let checkFirst = window.confirm("Are you sure?", "Yes");
            if (checkFirst === true) {
                alert("Self Destructing");
                return;
            } else {
                continue;
            }
    } else {
        employeesArray.firstName.push(answerFirst);
    }
    /*employeesArray.firstName.push(window.prompt("First Name:")); */
   
    //Last Name window prompt + cancel button functionality
    let answerLast = window.prompt("Last Name:");
    if (answerLast === null) {
        // Confirms the cancel
        let checkLast = window.confirm("Are you sure?", "Yes");
        if (checkLast === true) {
            alert("Self Destructing");
            return;
        } else {
            //If they cancel the cancel, removes the most recent First Name from the array
            employeesArray.firstName.pop();
            continue;
        }
    } else {
        employeesArray.lastName.push(answerLast);
    }
    /*employeesArray.lastName.push(window.prompt("Last Name")); */
   
    //Salary window prompt + cancel button functionality
    let answerSalary = window.prompt("Salary:");
    if (answerSalary === null) {
        // Confirms the cancel
        let checkSalary = window.confirm("Are you sure?", "Yes");
        if (checkSalary === true) {
            alert("Self Destructing");
            return;
        } else {
            //If they cancel the cancel, removes the most recent First and Last Name from the array
            employeesArray.firstName.pop();
            employeesArray.lastName.pop();
            continue;
        }
    } else {
        employeesArray.salary.push(answerSalary);
    }
    /*employeesArray.salary.push(window.prompt("Salary:")); */

    let again = window.confirm("Add Another Employee?");
    if (again == true) {
        continue;
    } else {
        console.log(employeesArray);
        return employeesArray;  // why does returning employeesArray make this work?
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
    console.log(`Congratulations to ${employeesArray.firstName[randomName]} ${employeesArray.lastName[randomName]}, our random drawing winner!`);
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

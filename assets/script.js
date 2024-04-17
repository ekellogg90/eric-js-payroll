// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data - First Name, Last Name, Salary, prompt to add another employee
const collectEmployees = function() {
  // xTODO: Get user input to create and return an array of employee objects
const employeesArray = [];

let again = true;
  while (again) {
    const employee = {
        firstName: "",
        lastName: "",
        salary: 0,
    };
    //First Name window prompt 
    let answerFirst = window.prompt("First Name:");
    if (answerFirst === null) {
        let checkFirst = window.confirm("Are you sure?");
        if (checkFirst) {
            alert("Goodbye");
            return;
        } else {
            continue;
        }
    } else {
        employee.firstName = answerFirst;
    }

    //Last Name window prompt
    let answerLast = window.prompt("Last Name:");
    if (answerLast === null) {
        let checkLast = window.confirm("Are you sure?");
        if (checkLast) {
            alert("Goodbye");
            return;
        } else {
            continue;
        }
    } else {
        employee.lastName = answerLast;
    }

    //Salary window prompt
    let answerSalary = window.prompt("Salary:");
    if (answerSalary === null) {
        let checkSal = window.confirm("Are you sure?");
        if (checkSal) {
            alert("Goodbye");
            return;
        } else {
            continue;
        }
    }
   else {
    while (isNaN(answerSalary)) {
        alert("Enter a Number");
        answerSalary = window.prompt("Salary:");
        //continue;  //sends back to the start of the while loop.. any way to just ask the salary question again instead?
    }   
    employee.salary = parseInt(answerSalary, 10);

    again = window.confirm("Add Another Employee?");
    if (again) {
        employeesArray.push(employee);
        continue;
    } else {
        employeesArray.push(employee);
    }
    }
    }
return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // xTODO: Calculate and display the average salary
  let salTotal = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    const curEmp = employeesArray[i];
    const curEmpSal = Number(curEmp.salary);
    // console.log(`CurEmp is ${curEmpSal}`); 
    // console.log(typeof(curEmpSal));
    empSal = curEmp.salary;
    salTotal += curEmpSal;
  }
 // console.log(`Total Salary: ${salTotal}`);  logs total salary

  // Avg Salary
  const avgSal = salTotal / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${avgSal}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // xTODO: Select and display a random employee
    const randomizeEmp = Math.floor(Math.random() * employeesArray.length);
    const randomEmp = employeesArray[randomizeEmp];
    console.log(`Congratulations to ${randomEmp.firstName} ${randomEmp.lastName}, our random drawing winner!`);
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

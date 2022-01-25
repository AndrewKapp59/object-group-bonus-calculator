$(Document).

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  { 
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function employeesObject(employee) {
  let bonus = calculateBonus(employee);
  let numberSalary = Number(employee.annualSalary);
  let bonusMoney = bonus * numberSalary;

  let employeeObject = {
    name: employee.name,
    bonusPercentage: parseInt(bonus * 100) + '%',
    totalCompensation: parseInt(numberSalary) + bonusMoney,
    totalBonus: parseInt(bonusMoney),
  };
  return employeeObject;
}

function loopThroughEmployees() {
  for (let i of employees) {
    console.log(employeesObject(i));
  }
}

loopThroughEmployees()

function calculateBonus( employee ) {
  let bonus;

  let employeeSalary = Number(employee.annualSalary);

  if (employee.reviewRating <= 2) {
    bonus = 0;
  }
  else if (employee.reviewRating === 3) {
    bonus = 0.04;
  }
  else if (employee.reviewRating === 4) {
    bonus = 0.06;
  }
  else if (employee.reviewRating === 5) {
    bonus = 0.10;
  }
  if (employee.employeeNumber.length === 4) {
    bonus += 0.05;
  }
  if (employeeSalary > 65000) {
    bonus -= 0.01;
  }

  return bonus < 0 ? 0 : bonus > .16 ? .16 : bonus;
}


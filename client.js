// var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
// var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
// var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
// var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
// var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
// var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };
//

class Employee {

  constructor(name, employeeNumber, annualSalary, reviewRating) {
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  }



}

var atticus = new Employee('Atticus', '2405', '47000', 3);
var jem = new Employee('Jem', '62347', '63500', 4);
var boo = new Employee('Boo', '11435', '54000', 3);
var scout = new Employee('Scout', '6243', '74750', 5);
var robert = new Employee('Robert', '26835', '66000', 1);
var mayella = new Employee('Mayella', '89068', '35000', 2);

var employees = [ atticus, jem, boo, scout, robert, mayella ];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

function bonusCalculation (employee) {
  var newObject = {
      name: employee.name,
  };

  // Bonus Percentage
  var bonusPercentage;

  if (employee.reviewRating <= 2){
    bonusPercentage = 0;
  } else if (employee.reviewRating == 3){
    bonusPercentage = 0.04;
  } else if (employee.reviewRating == 4) {
    bonusPercentage = 0.06;
  } else {
    bonusPercentage = 0.1;
  }

  if (employee.employeeNumber.length == 4) {
    bonusPercentage += 0.05;
  }

  if (employee.annualSalary >= 65000) {
    bonusPercentage -= 0.01;
  }

  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
  newObject.bonusPercentage = bonusPercentage;
  newObject.totalBonus = Math.round(bonusPercentage * employee.annualSalary);

  // Total Compensation
  newObject.totalCompensation = parseInt(employee.annualSalary) + newObject.totalBonus;

  return newObject;
}


$(document).ready(function() {
  $('#resultsButton').on('click', getResults);
});
var getResults = function() {
  console.log('button clicked');
  document.getElementById("results").innerHTML = "";
  for (var i = 0; i < employees.length; i++) {
    var theEmployee = bonusCalculation(employees[i]);
    console.log(theEmployee);
    document.getElementById("results").innerHTML += "<span>" +
      theEmployee.name +
      "</span> received a bonus percentage of <span class='number'>" + 100 * theEmployee.bonusPercentage +
      "%</span>, total bonus of <span class='number'>$" + theEmployee.totalBonus +
      "</span>, for a total compensation of <span class='number'>$" + theEmployee.totalCompensation +
      "</span>.<br>";
    }
};

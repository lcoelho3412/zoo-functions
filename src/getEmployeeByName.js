const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees
    .find((item) => item.firstName === employeeName || item.lastName === employeeName) || {};
}

module.exports = getEmployeeByName;

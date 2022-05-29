const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
}

function getRelatedEmployees(id) {
  if (!isManager(id)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter((employee) => employee.managers.some((manager) => manager === id))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

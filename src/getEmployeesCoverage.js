const data = require('../data/zoo_data');

const { employees, species } = data;

const nameTag = employees.map((info) => (
  {
    id: info.id,
    fullName: `${info.firstName} ${info.lastName}`,
    species: info.responsibleFor.map((id) => (
      species.find((empId) => (empId.id === id)).name
    )),
    locations: info.responsibleFor.map((id) => (
      species.find((specieLocation) => (specieLocation.id === id)).location
    )),
  }
));

function getEmployeesCoverage(obj) {
  const employee = obj && nameTag.find((info) => (
    obj.id ? info.id === obj.id : info.fullName.includes(obj.name)
  ));

  if (employee) {
    return employee;
  }

  if (obj) {
    throw new Error('Informações inválidas');
  }

  return nameTag;
}

module.exports = getEmployeesCoverage;

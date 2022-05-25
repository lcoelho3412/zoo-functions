const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  if ('specie' in animal) {
    const temAnimal = species.find((element) => element.name === animal.specie).residents;
    if ('sex' in animal) {
      return temAnimal
        .filter((residentEvil) => residentEvil.sex === animal.sex).length;
    }
    return temAnimal.length;
  }
}

module.exports = countAnimals;

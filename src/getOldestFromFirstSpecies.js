const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const handlerFinder = employees
    .find((resposibility) => resposibility.id === id)
    .responsibleFor[0];
  const goGetAnimal = species.find((animal) => animal.id === handlerFinder).residents
    .sort((a, b) => b.age - a.age)[0];
  return [goGetAnimal.name, goGetAnimal.sex, goGetAnimal.age];
}

module.exports = getOldestFromFirstSpecies;

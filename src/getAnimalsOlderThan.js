const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalFinder = species.find((element) => element.name === animal).residents;
  return animalFinder.every((cage) => cage.age > age);
}

module.exports = getAnimalsOlderThan;

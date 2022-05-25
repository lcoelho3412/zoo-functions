const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((accumulator, { age }) => {
    accumulator.child = entrants.filter((item) => item.age < 18).length;
    accumulator.adult = entrants.filter((item) => item.age >= 18 && item.age < 50).length;
    accumulator.senior = entrants.filter((item) => item.age >= 50).length;

    return accumulator;
  }, {});
}

function calculateEntry(entrants) {
  // seu código aqui.
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const peopleChild = countEntrants(entrants).child * 20.99;
  const peopleSenior = countEntrants(entrants).senior * 24.99;
  const peopleAdult = countEntrants(entrants).adult * 49.99;
  return peopleAdult + peopleChild + peopleSenior;
}

module.exports = {
  calculateEntry,
  countEntrants,
};

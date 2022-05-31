const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

function getSchedule(scheduleTarget) {
  return species.find((availability) => availability.name === scheduleTarget).availability;
}
console.log(getSchedule('lions'));
module.exports = getSchedule;

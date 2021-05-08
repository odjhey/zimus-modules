const { ELEMENTS } = require('../src/server');

const RACE = {
  HUMAN: 'hu',
  DEMIHUMAN: 'dh',
  BEAST: 'be',
};

const MONS = {
  moltres: monBuilder(
    { name: 'moltres', element: ELEMENTS.FIRE },
    { class: RACE.BEAST }
  ),
  windPanda: monBuilder(
    { name: 'wind Panda', element: ELEMENTS.WIND },
    { class: RACE.BEAST }
  ),
  ritesh: monBuilder(
    { name: 'ritesh', element: ELEMENTS.WIND },
    { class: RACE.BEAST }
  ),
  theomars: monBuilder(
    { name: 'theomars', element: ELEMENTS.WATER },
    { class: RACE.DEMIHUMAN }
  ),
  bella: monBuilder(
    { name: 'bella', element: ELEMENTS.LIGHT },
    { class: RACE.DEMIHUMAN }
  ),

  velajuel: monBuilder(
    { name: 'velajuel', element: ELEMENTS.FIRE },
    { class: RACE.HUMAN }
  ),
  tiana: monBuilder(
    { name: 'tiana', element: ELEMENTS.WIND },
    { class: RACE.HUMAN }
  ),
  hathor: monBuilder(
    { name: 'hathor', element: ELEMENTS.WIND },
    { class: RACE.HUMAN }
  ),
  beth: monBuilder(
    { name: 'beth', element: ELEMENTS.WATER },
    { class: RACE.DEMIHUMAN }
  ),
  ragdoll: monBuilder(
    { name: 'ragdoll', element: ELEMENTS.DARK },
    { class: RACE.HUMAN }
  ),
  karl: monBuilder(
    { name: 'karl', element: ELEMENTS.LIGHT },
    { class: RACE.HUMAN }
  ),

  seiq: monBuilder(
    { name: 'seiq', element: ELEMENTS.FIRE },
    { class: RACE.BEAST }
  ),
  raoq: monBuilder(
    { name: 'raoq', element: ELEMENTS.FIRE },
    { class: RACE.BEAST }
  ),

  icarus: monBuilder(
    { name: 'icarus', element: ELEMENTS.WATER },
    { class: RACE.BEAST }
  ),

  mav: monBuilder(
    { name: 'mav', element: ELEMENTS.WIND },
    { class: RACE.BEAST }
  ),
  eludia: monBuilder(
    { name: 'eludia', element: ELEMENTS.LIGHT },
    { class: RACE.BEAST }
  ),
  zerath: monBuilder(
    { name: 'zerath', element: ELEMENTS.LIGHT },
    { class: RACE.BEAST }
  ),
};

function monBuilder({ name, element }, options = {}) {
  return { name, element, hp: 1000, ...options };
}

module.exports = { MONS };

const { expect } = require('chai');
const fn = require('../src/server');

describe('test test', () => {
  it('it should select elemental weakness', () => {
    const given = [
      { name: 'moltres', element: ELEMENTS.FIRE },
      { name: 'wind Panda', element: ELEMENTS.WIND },
      { name: 'theomars', element: ELEMENTS.WATER },
      { name: 'bella', element: ELEMENTS.LIGHT },
    ];
    const givenSelection = [
      { name: 'velajuel', element: ELEMENTS.FIRE },
      { name: 'tiana', element: ELEMENTS.WIND },
      { name: 'beth', element: ELEMENTS.WATER },
      { name: 'ragdoll', element: ELEMENTS.DARK },
      { name: 'karl', element: ELEMENTS.LIGHT },
    ];

    const expected = ['tiana', 'beth', 'velajuel', 'ragdoll'];

    const resp = given
      .flatMap((g) => {
        return selector(g, givenSelection);
      })
      .map((s) => s.name);

    expect(expected).to.deep.equal(resp);
  });

  it('it should select elemental weakness', () => {});
});

/*
 * element
 * debuff/ailment
 * hp
 */

const ELEMENTS = {
  FIRE: 'fire',
  WIND: 'wind',
  WATER: 'water',
  LIGHT: 'light',
  DARK: 'dark',
};

const ELEMENTAL_RELATIONS = {
  amplify: {
    desc: '',
    values: [
      [ELEMENTS.FIRE, ELEMENTS.WIND],
      [ELEMENTS.WIND, ELEMENTS.WATER],
      [ELEMENTS.WATER, ELEMENTS.FIRE],
      [ELEMENTS.LIGHT, ELEMENTS.DARK],
      [ELEMENTS.DARK, ELEMENTS.LIGHT],
    ],
  },
};

const searchElementalAmplifier = (element) => {
  const [entry, ...rest] = ELEMENTAL_RELATIONS.amplify.values.find(
    (v) => v[0] === element
  );
  return rest;
};

function selector(actor, selection) {
  const actorElement = actor.element;
  const ampsList = searchElementalAmplifier(actorElement);

  const intersection = selection.filter((value) =>
    ampsList.includes(value.element)
  );
  console.log(
    '->',
    actor.name,
    intersection.map((i) => i.name)
  );
  return intersection;
}

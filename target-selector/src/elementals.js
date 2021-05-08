const ELEMENTS = {
  FIRE: 'fi',
  WIND: 'wi',
  WATER: 'wa',
  LIGHT: 'li',
  DARK: 'da',
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

function elementalSelector(actor, selection) {
  const actorElement = actor.element;
  const ampsList = searchElementalAmplifier(actorElement);

  const include = [],
    exclude = [];

  selection.forEach((s) => {
    if (ampsList.includes(s.element)) {
      include.push(s);
    } else {
      exclude.push(s);
    }
  });

  return [include, exclude];
}

module.exports = { elementalSelector, ELEMENTS };

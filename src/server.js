const { elementalSelector, ELEMENTS } = require('./elementals');
const { sameClassSelector } = require('./class-selector');

function selector({ actor, selection }, methods) {
  let final = selection;
  let rest = [];

  methods.forEach((method, i) => {
    const [fin, r] = method(actor, final);
    if (fin.length > 0) {
      final = fin;
      rest = rest.concat(r);
    } else {
      final = r;
    }
  });

  return [final, rest];
}

module.exports = { selector, elementalSelector, ELEMENTS, sameClassSelector };

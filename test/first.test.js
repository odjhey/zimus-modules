const { expect } = require('chai');
const {
  selector,
  elementalSelector,
  sameClassSelector,
} = require('../src/server');
const { MONS } = require('./test-fixtures');

function selectorLogger(actor, selectionResult) {
  const [s, rest] = selectionResult;
  console.log(
    actor.name,
    '->',
    s.map((zs) => zs.name),
    '->',
    rest.map((r) => r.name)
  );
  return s;
}
describe('test test', () => {
  it('it should select elemental weakness', () => {
    const given = [MONS.moltres, MONS.windPanda, MONS.theomars, MONS.bella];
    const givenSelection = [
      MONS.velajuel,
      MONS.tiana,
      MONS.beth,
      MONS.ragdoll,
      MONS.karl,
    ];

    const expected = ['tiana', 'beth', 'velajuel', 'ragdoll'];

    const resp = given
      .flatMap((g) => {
        const [s, rest] = elementalSelector(g, givenSelection);
        // selectorLogger(g, [s, rest]);
        return s;
      })
      .map((s) => s.name);

    expect(expected).to.deep.equal(resp);
  });

  it('it should select same class', () => {
    const given = [MONS.moltres, MONS.windPanda, MONS.velajuel, MONS.beth];
    const givenSelection = [
      MONS.ragdoll,
      MONS.theomars,
      MONS.seiq,
      MONS.mav,
      MONS.icarus,
    ];

    const expected = [
      ['seiq', 'mav', 'icarus'],
      ['seiq', 'mav', 'icarus'],
      ['ragdoll'],
      ['theomars'],
    ];

    const resp = given.map((g) => {
      const [s, rest] = sameClassSelector(g, givenSelection);
      // selectorLogger(g, [s, rest]);
      return s.map((zs) => zs.name);
    });

    expect(expected).to.deep.equal(resp);
  });

  it('it should select element then class', () => {
    const given = [MONS.moltres, MONS.ritesh, MONS.velajuel];
    const expected = [
      // moltres
      ['mav', 'wind Panda', 'ritesh'],
      // ritesh
      ['icarus'],
      // velajuel
      ['hathor', 'tiana'],
    ];

    const givenSelection = [
      MONS.hathor,
      MONS.theomars,
      MONS.seiq,
      MONS.tiana,
      MONS.mav,
      MONS.icarus,
      MONS.windPanda,
      MONS.ritesh,
    ];

    const resp = given.map((g) => {
      const [s, rest] = selector({ actor: g, selection: givenSelection }, [
        elementalSelector,
        sameClassSelector,
      ]);
      // selectorLogger(g, [s, rest]);
      return s.map((zs) => zs.name);
    });

    expect(expected).to.deep.equal(resp);
  });

  it('it should select all when selector yields none', () => {
    const given = [MONS.velajuel];
    const expected = [['seiq', 'raoq', 'eludia', 'zerath']];

    const givenSelection = [MONS.seiq, MONS.raoq, MONS.eludia, MONS.zerath];

    const resp = given.map((g) => {
      const [s, rest] = selector({ actor: g, selection: givenSelection }, [
        elementalSelector,
        sameClassSelector,
      ]);
      // selectorLogger(g, [s, rest]);
      return s.map((zs) => zs.name);
    });

    expect(expected).to.deep.equal(resp);
  });

  it('it should continue when first selector yields none', () => {
    const given = [MONS.velajuel];
    const expected = [['ragdoll']];

    const givenSelection = [
      MONS.seiq,
      MONS.raoq,
      MONS.eludia,
      MONS.zerath,
      MONS.ragdoll,
    ];

    const resp = given.map((g) => {
      const [s, rest] = selector({ actor: g, selection: givenSelection }, [
        elementalSelector,
        sameClassSelector,
      ]);
      // selectorLogger(g, [s, rest]);
      return s.map((zs) => zs.name);
    });

    expect(expected).to.deep.equal(resp);
  });
});

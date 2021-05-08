/* selector (actor, selection) => [ in, ex ] */
function sameClassSelector(actor, selection) {
  const include = [],
    exclude = [];

  selection.forEach((s) => {
    if ([actor.class].includes(s.class)) {
      include.push(s);
    } else {
      exclude.push(s);
    }
  });

  return [include, exclude];
}

module.exports = { sameClassSelector };

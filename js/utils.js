
var cjs = cjs || {};

cjs.namespace = function (ns) {
  var labels = ns.split('.');
  root = cjs;

  // 冗長なグローバルを取り除く
  if (labels[0] === cjs) {
    labels = labels.slice(1);
  }

  for (i = 0; i < labels.length; i += 1) {
    if (typeof root[labels[i]] == "undefined") {
      root[labels[i]] = {};
    }
    root = root[labels[i]];
  }

  return root;
};

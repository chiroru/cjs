
var cjs = cjs || {};

cjs.version = '1.0.0.0';
cjs.toString = function() { return 'cjs'; };

cjs.namespace = (function (ns) {

  if (!ns) throw new Error('An invalid argument \"' + ns + '\" was specified');

  var labels = ns.split('.');
  var root = cjs;

  // 冗長なグローバルを取り除く
  if (labels[0] === 'cjs') {
    labels = labels.slice(1);
  };

  for (i = 0; i < labels.length; i += 1) {
    if (typeof root[labels[i]] == 'undefined') {
      root[labels[i]] = {};
    }
    root = root[labels[i]];

  };

  return root;
});

cjs.browser = {
  IE: (function() {
    return typeof window.addEventlistener == "undified";
  })(),

  Opera: (function() {
    return window.opera;
  })(),
        
  WebKit: (function() {
    return (!document.uniqueId &&
      !window.pera &&
      !window.sidebar &&
      window.localStorage &&
      typeof window.orientation == "undefined");
  })(),
  Gecko: (function() {
    return window.sidebar;
  })()
};

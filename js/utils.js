/**
 * @fileOverview
 * 
 * JavaScript ライブラリ cjs の基底クラスです。
 * ライブラリの構成に必要なコア機能を提供します。
 *
 */

/**
 * @namespace
 */
var cjs = cjs || {};

cjs.version = '1.0.0.0';
cjs.toString = function() { return 'cjs'; };

/**
 * @method
 * @name namespace
 * 
 * 名前空間を定義するメソッドです.
 * 名前空間の指定に利用可能な文字列は以下の範囲です.
 * 違反した場合は、例外がスローされます.
 * 半角英数字とアンダースコア
 * なお、名前空間の区切りはで指定する必要があります.
 *
 * @param {string} [ns] 名前空間を表現する文字列
 * @return {object} 名前空間を予約するためのオブジェクト
 */
cjs.namespace = (function (ns) {

  var NAMESPACE_REGEXP = new RegExp("^[a-zA-Z][a-zA-Z0-9_\.]*$");

  if (!ns || !ns.match(NAMESPACE_REGEXP)) throw new Error('An invalid argument \"' + ns + '\" was specified');

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

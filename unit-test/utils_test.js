module('cjs.namespace')

expected = {
  version: '1.0.0.0'
};

test('バージョンのチェック', function() {
  equal(cjs.version, expected.version, 'cjsのバージョンとして' + expected.version + 'が設定されている');
});

test('ルートネームスペース\"cjs\"を再定義できる', function () {
  expect(1);
  deepEqual(cjs.namespace('cjs'), cjs, 'ルートネームスペースを再定義すると同じオブジェクトが返却される');
});

test('ネームスペース指定時にundefinedを指定', function() {
  expect(1);
  throws(function() {
    cjs.namespace(undefined);
  },
  /An invalid argument \"undefined\" was specified/,
  'undefinedを引数に指定してネームスペースを定義するとErrorがスローされる');
});

test('空のネームスペースを定義する', function() {
  expect(1);
  throws(function() {
      cjs.namespace('');
    },
    /An invalid argument \"\" was specified/,
    '空のネームスペースを定義するとErrorがスローされる'
  );
});

test('2階層のネームスペースが指定できる', function() {
  expect(1); 
  deepEqual(cjs.namespace('test'), cjs.test, '2階層のネームスペース\"cjs.test\"が定義できる');
});

test('3階層のネームスペースが指定できる', function() {
  expect(1);
  ok(cjs.namespace('test1.test2') === cjs.test1.test2, '3階層のネームスペース\"cjs.test1.test2\"が定義できる');
});


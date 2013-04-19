module('cjs.namespace')
test('single label namespace', function() {
  expect(1); 
  ok(cjs.namespace('test') === cjs.test, 'single label namespace is defined.');
});

test('double label namespace', function() {
  expect(1);
  ok(cjs.namespace('test1.test2') === cjs.test1.test2, 'double label namespace is defined.');
});


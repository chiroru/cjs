
test('[cjs.namespace] : single label namespace', function() {
  expect(1); 
  ok(cjs.namespace('test') === cjs.test, '[cjs.namespace] : single label namespace is defined.');
});

test('[cjs.namespace] : double label namespace', function() {
  expect(1);
  ok(cjs.namespace('test1.test2') === cjs.test1.test2, '[cjs.namespace] : double label namespace is defined.');
});


module('cjs.objects')

test('number', function () {
  var target = 123;

  equal(cjs.objects.parse(target), '123', 'parse number.');
});

test('function', function () {
  var target = function () {
  var o = "hello world!";
  return o;
}

  equal(cjs.objects.parse(target), 'function () {\n  var o = \"hello world!\";\n  return o;\n}', 'parse function.');
});

test('object', function () {
  var target = {
    name: "mike",
    greeting: function () {
      return "hi!";
    }
  };

  equals(cjs.objects.parse(target), '', 'parse object.');
});

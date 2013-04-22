
cjs.namespace('objects');

// static method
cjs.objects.parse = function (obj) {

  if (typeof obj == "number") {
    return "" + obj;
  } else if (typeof obj == "function") {
    return "" + obj;
  } else if (typeof obj == "object") {
    return "{" + cjs.objects.to_s(obj, "") + "}";
  } else {
    return "<" + (typeof obj) + ":" + obj + ">";
  }
};

cjs.objects.to_s= function (obj) {
};

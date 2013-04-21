
var ns = cjs.namespace('objects');

ns.objects.parse = function (obj) {

  if (typeof obj == "number") {
    return "" + obj;
  } else if (typeof obj == "function") {
    return "" + obj;
  } else if (typeof obj == "object") {
    return "{" + this.to_s(obj, "") + "}";
  } else {
    return "<" + (typeof obj) + ":" + obj + ">";
  }
};

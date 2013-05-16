module("book");

test("bookのバージョンが取得できる",  function() {
  equal(Book.version, "1.0.0");
});

test("bookの名前が取得できる", function() {
  equal("Book [1.0.0]", Book.toString());
});

test("プライベートスタティックフィールドにアクセスできない", function() {
  equal(undefined,Book.numOfBooks);
});

test("プライベートスタティックメソッドにアクセスできない", function() {
  equal(undefined,Book.checkIsbn);
});

test("プライベートインスタンスフィールドにアクセスできない", function() {
  var obj = new Book("1234", "title1", "author1");
  equal(undefined, obj.isbn);
});

test("プライベートインスタンスメソッドにアクセスできない", function() {
  var obj = new Book("1234", "title1", "author1");
  throws(function() {
    obj.debug();
  },
  Error);
});

test("クラスメソッド", function() {
  var obj = new Book("1234", "title1", "author1");
  equal("Book [ ISBN:1234 ]", obj.toString());
});


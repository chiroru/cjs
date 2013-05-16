var Book = (function() {
  // プライベート スタティック変数
  var numOfBooks = 0;

  // プライベート スタティックメソッド
  function checkIsbn(isbn) {
    return true;
  };

  return function(newIsbn, newTitle, newAuthor) {
    // プライベート変数
    var isbn;
    var title;
    var author;

    function debug() {
      return "debug";
    };

    // 特権メソッド
    this.getIsbn = function() {
      return isbn;
    };

    this.setIsbn = function(newIsbn) {
      if (!checkIsbn(newIsbn)) throw new Error("Book: Invalid ISBN.");
      isbn = newIsbn;
    };

    this.getTitle = function() {
      return title;
    };

    this.setTitle = function(newTitle) {
      title = newTitle || "No title specified.";
    };

    this.getAuthor = function() {
      return author;
    };

    this.setAuthor = function(newAuthor) {
      author = newAuthor || "No author specified.";
    };

    numOfBooks++;
    if (numOfBooks > 50) throw new Error("Book: Only 50 instances of Book can be created.");

    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    this.setAuthor(newAuthor);

  };

})();

// パブリック スタティックフィールド
Book.version="1.0.0";

// パブリック スタティックメソッド
Book.toString = function() {
  return "Book [" + Book.version + "]";
};

// クラスフィールド、メソッド
Book.prototype = {
  toString: function() {
    return "Book [ ISBN:" + this.getIsbn() + " ]";
  }
};

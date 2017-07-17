(function(exports) {
  function Note(text) {
    this.text = text;
  };

// this method(and test) may be redundant
  function showText(text) {
    return text;
  };

  exports.showText = showText;
  exports.Note = Note;
})(this);

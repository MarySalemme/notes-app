(function(exports) {
  function testNoteContainsText() {
    var note = new Note();

    if (note.text === null) {
      throw new Error("The note text must not be empty");
    } else {
      console.log("Test passed")
    }
  };

  testNoteContainsText();
})(this);

(function(exports) {
  function testNoteShowsText() {
    var note = new Note("This is a test");

    if (this.text !== this.showText()) {
      throw new Error("Text is not dislayed");
    } else {
      console.log("Test passed")
    }
  };

  testNoteShowsText();
})(this);

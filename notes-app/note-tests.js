(function(exports) {
  function testNoteContainsText() {
    var note = new Note();

    if (note.text === null) {
      throw new Error("The note text must not be empty");
    }
  };

  testNoteContainsText();
})(this);

(function(exports) {
  function testNoteListStartsWithEmptyList() {
    var noteList = new NoteList();

    if (noteList.notes.length !== 0) {
      throw new Error("The note list must have an empty array");
    } else {
      console.log("Test passed")
    }
  };

  testNoteListStartsWithEmptyList();
})(this);

(function(exports) {
  function testNoteListShowsNotes() {
    var noteList = new NoteList();

    if (this.notes !== this.showNotes()) {
      throw new Error("Notes are not dislayed");
    } else {
      console.log("Test passed")
    }
  };

  testNoteListShowsNotes();
})(this);

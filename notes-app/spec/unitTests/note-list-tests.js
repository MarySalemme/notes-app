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

(function(exports) {
  function testCreateNote() {
    var noteList = new NoteList();

    noteList.createNote("hello");
    if (this.notes[0].text !== "hello") {
      throw new Error("New note not created");
    } else {
      console.log("Test passed")
    }
  };

  testCreateNote();
})(this);

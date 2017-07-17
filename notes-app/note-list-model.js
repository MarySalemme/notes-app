(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  function showNotes() {
    return NoteList.notes;
  };

// working on scope for this function
  function createNote(text) {
    note = new Note(text);
    (NoteList.notes).push(note)
  };

  exports.createNote = createNote;
  exports.showNotes = showNotes;
  exports.NoteList = NoteList;
})(this);

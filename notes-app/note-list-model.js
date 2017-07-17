(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  function showNotes() {
    return NoteList.notes;
  };

  exports.showNotes = showNotes;
  exports.NoteList = NoteList;
})(this);

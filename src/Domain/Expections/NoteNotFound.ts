export class NoteNotFound extends Error {
  constructor() {
    super("Note was not found");
    this.name = "NoteNotFound";
  }
}

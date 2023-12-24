export class EmptyNote extends Error {
  constructor() {
    super("Note should not be empty");
    this.name = "EmptyNote";
  }
}

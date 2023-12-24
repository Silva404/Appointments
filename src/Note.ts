import { EmptyNote } from "./Expections/EmptyNote";

export class Note {
  constructor(public readonly note: string) {
    const noteTrimmed = note.trim();

    if (noteTrimmed.length === 0) {
      throw new EmptyNote();
    }
  }
}

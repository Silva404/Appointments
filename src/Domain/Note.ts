import { EmptyNote } from "./Expections/EmptyNote";
import { Identifier } from "./Identifier";

export class Note {
  public readonly id: Identifier = new Identifier();

  constructor(public readonly note: string) {
    const noteTrimmed = note.trim();

    if (noteTrimmed.length === 0) {
      throw new EmptyNote();
    }
  }
}

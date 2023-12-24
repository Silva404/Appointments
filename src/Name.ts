import { NameHasNumbers } from "./Expections/NameHasNumbers";
import { NameIsEmpty } from "./Expections/NameIsEmpty";
import { NameIsShort } from "./Expections/NameIsShort";

export class Name {
  readonly MINIMUM_CHARACTERS = 3;

  constructor(readonly name: string) {
    const titleHasNumbers = /\d/.test(this.name.trim());

    if (this.name.trim().length === 0) {
      throw new NameIsEmpty(this.name);
    }

    if (this.name.length < this.MINIMUM_CHARACTERS) {
      throw new NameIsShort(this.name);
    }

    if (titleHasNumbers) {
      throw new NameHasNumbers(this.name);
    }
  }
}

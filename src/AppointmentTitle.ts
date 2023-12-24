import { TitleHasNumbers } from "./Expections/TitleHasNumbers";
import { TitleIsEmpty } from "./Expections/TitleIsEmpty";
import { TitleIsShort } from "./Expections/TitleIsShort";

export class AppointmentTitle {
  readonly MINIMUM_CHARACTERS = 3;

  constructor(public readonly title: string) {
    const titleHasNumbers = /\d/.test(this.title.trim());

    if (this.title.length === 0) {
      throw new TitleIsEmpty(this.title);
    }

    if (this.title.length < this.MINIMUM_CHARACTERS) {
      throw new TitleIsShort(this.title);
    }

    if (titleHasNumbers) {
      throw new TitleHasNumbers(this.title);
    }
  }
}

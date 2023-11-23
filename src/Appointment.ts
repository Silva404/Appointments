import { AppointmentInFuture } from "./Expections/AppointmentInFuture";
import { TitleHasNumbers } from "./Expections/TitleHasNumbers";
import { TitleIsEmpty } from "./Expections/TitleIsEmpty";
import { TitleIsShort } from "./Expections/TitleIsShort";

export class Appointment {
  readonly MINIMUM_CHARACTERS = 3;

  constructor(
    private readonly date: Date,
    private readonly title: string,
  ) {
    this.validate();
  }

  private validate() {
    const dateNow = new Date();
    const scheduledInOneYearFromNow = dateNow.getFullYear() + 1;
    const titleHasNumbers = /\d/.test(this.title.trim());

    if (scheduledInOneYearFromNow === this.date.getFullYear()) {
      throw new AppointmentInFuture(this.date.toDateString());
    }

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

  static create(date: Date, title: string): Appointment {
    return new Appointment(date, title);
  }
}

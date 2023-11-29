import { AppointmentInFuture } from "./Expections/AppointmentInFuture";
import { TitleHasNumbers } from "./Expections/TitleHasNumbers";
import { TitleIsEmpty } from "./Expections/TitleIsEmpty";
import { TitleIsShort } from "./Expections/TitleIsShort";
import { TooFewExperts } from "./Expections/TooFewExperts";
import { Expert } from "./Expert";

export type AppointmentProps = {
  date: Date;
  title: string;
  experts: Array<Expert>;
};

export class Appointment {
  readonly dateNow = new Date();
  readonly MINIMUM_CHARACTERS = 3;

  private constructor(
    private readonly date: Date,
    private readonly title: string,
    private readonly experts: Array<Expert>,
  ) {
    this.validate();
  }

  private validate() {
    const scheduledInOneYearFromNow = this.dateNow.getFullYear() + 1;
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

    if (this.experts.length === 0) {
      throw new TooFewExperts();
    }
  }

  isUpcoming(): boolean {
    return this.date.getTime() > this.dateNow.getTime();
  }

  isPrevious(): boolean {
    return !this.isUpcoming();
  }

  static create(
    date: Date,
    title: string,
    experts: Array<Expert>,
  ): Appointment {
    return new Appointment(date, title, experts);
  }
}

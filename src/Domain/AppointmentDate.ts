import { AppointmentInFuture } from "./Expections/AppointmentInFuture";

export class AppointmentDate {
  private readonly dateNow = new Date();

  constructor(public readonly date: Date) {
    const scheduledInOneYearFromNow = this.dateNow.getFullYear() + 1;

    if (scheduledInOneYearFromNow === this.date.getFullYear()) {
      throw new AppointmentInFuture(this.date.toDateString());
    }
  }

  isUpcoming(): boolean {
    return this.date.getTime() > this.dateNow.getTime();
  }

  isPrevious(): boolean {
    return !this.isUpcoming();
  }
}

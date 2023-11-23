export class Appointment {
  constructor(
    private readonly date: Date,
    private readonly title: string,
  ) {
    this.validate();
  }

  private validate() {
    const dateNow = new Date();
    const scheduledInOneYearFromNow = dateNow.getFullYear() + 1;
    if (scheduledInOneYearFromNow === this.date.getFullYear()) {
      throw new Error(
        `Cant schedule an appointment for more than a year in advane: ${this.date.toDateString()}`,
      );
    }

    if (this.title.length === 0) {
      throw new Error(`Title cannot be empty: ${this.title}`);
    }
  }

  static create(date: Date, title: string): Appointment {
    return new Appointment(date, title);
  }
}

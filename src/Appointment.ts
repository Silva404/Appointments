export class Appointment {
  constructor(private readonly date: Date) {
    this.validate();
  }

  private validate() {
    const dateNow = new Date();
    if (dateNow.getFullYear() > this.date.getFullYear()) {
      throw new Error(
        `Cant schedule an appointment in the past: ${this.date.getFullYear()}`,
      );
    }
  }

  static create(date: Date): Appointment {
    return new Appointment(date);
  }
}

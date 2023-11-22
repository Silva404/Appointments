export class Appointment {
  constructor(private readonly date: Date) {}

  static create(date: Date): Appointment {
    return new Appointment(date);
  }
}

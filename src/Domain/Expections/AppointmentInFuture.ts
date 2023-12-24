export class AppointmentInFuture extends Error {
  constructor(message: string) {
    super(
      `Cant schedule an appointment for more than a year in advane: ${message}`,
    );
    this.name = "AppointmentInFuture";
  }
}

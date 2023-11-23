export class TooFewExperts extends Error {
  constructor() {
    super("An Appointment needs at least one expert");
    this.name = "TooFewExperts";
  }
}

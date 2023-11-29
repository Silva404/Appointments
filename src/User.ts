import { Appointment } from "./Appointment";
import { Name } from "./Name";

export class User {
  constructor(
    private readonly name: Name,
    private readonly appointments: Array<Appointment>,
  ) {}
}

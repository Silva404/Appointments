import { AppointmentDate } from "./AppointmentDate";
import { AppointmentTitle } from "./AppointmentTitle";
import { TooFewExperts } from "./Expections/TooFewExperts";
import { Consultant } from "./Consultant";
import { User } from "./User";

export type AppointmentProps = {
  date: Date;
  title: string;
  consultants: Array<Consultant>;
  user: User;
};

export class Appointment {
  private constructor(
    public readonly date: AppointmentDate,
    private readonly title: AppointmentTitle,
    private readonly consultants: Array<Consultant>,
  ) {
    if (this.consultants.length === 0) {
      throw new TooFewExperts();
    }
  }

  static create(
    date: string,
    title: string,
    consultants: Array<Consultant>,
  ): Appointment {
    return new Appointment(
      new AppointmentDate(date),
      new AppointmentTitle(title),
      consultants,
    );
  }
}

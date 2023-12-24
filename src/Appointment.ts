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
    readonly title: AppointmentTitle,
    readonly consultants: Array<Consultant>,
    readonly user: User,
  ) {
    if (this.consultants.length === 0) {
      throw new TooFewExperts();
    }
  }

  static create(props: AppointmentProps): Appointment {
    return new Appointment(
      new AppointmentDate(props.date),
      new AppointmentTitle(props.title),
      props.consultants,
      props.user,
    );
  }
}

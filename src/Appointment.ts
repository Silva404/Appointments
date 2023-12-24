import { AppointmentDate } from "./AppointmentDate";
import { AppointmentTitle } from "./AppointmentTitle";
import { TooFewExperts } from "./Expections/TooFewExperts";
import { Consultant } from "./Consultant";
import { User } from "./User";
import { Note } from "./Note";

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
    public notes: Array<Note> = [],
  ) {
    if (this.consultants.length === 0) {
      throw new TooFewExperts();
    }
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  getNotes(): Array<Note> {
    return this.notes;
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

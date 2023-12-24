import { AppointmentDate } from "./AppointmentDate";
import { AppointmentTitle } from "./AppointmentTitle";
import { TooFewExperts } from "./Expections/TooFewExperts";
import { Consultant } from "./Consultant";
import { User } from "./User";
import { Note } from "./Note";
import { NoteNotFound } from "./Expections/NoteNotFound";
import { TopicOfInterest } from "./TopicOfInterest";

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
    public notes: Array<Note> = [],
    public topicsOfInterest: Array<TopicOfInterest> = [],
  ) {}

  addNote(note: Note): void {
    this.notes.push(note);
  }

  deleteNote(note: Note): void {
    const foundNote = this.notes.find((item) => item.id === note.id);

    if (!foundNote) {
      throw new NoteNotFound();
    }

    const index = this.notes.findIndex((item) => item.id === note.id);

    this.notes.splice(index, 1);
  }

  chooseTopicsOfInterest(topics: Array<TopicOfInterest>): void {
    this.topicsOfInterest = topics;
  }

  getNotes(): Array<Note> {
    return this.notes;
  }

  static create(props: AppointmentProps): Appointment {
    if (props.consultants.length === 0) {
      throw new TooFewExperts();
    }

    return new Appointment(
      new AppointmentDate(props.date),
      new AppointmentTitle(props.title),
    );
  }
}

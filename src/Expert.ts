import { Name } from "./Name";

export class Expert {
  private constructor(private readonly name: Name) {}

  static create(firstName: string, lastName: string): Expert {
    return new Expert(new Name(firstName, lastName));
  }
}

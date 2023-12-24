import { Name } from "./Name";

export class Consultant {
  private constructor(private readonly name: Name) {}

  static create(firstName: string, lastName: string): Consultant {
    return new Consultant(new Name(firstName, lastName));
  }
}

import { Name } from "./Name";

export class FullName {
  constructor(
    public readonly firstName: Name,
    public readonly lastName: Name,
  ) {}

  fullName(): string {
    return `${this.firstName.name} ${this.lastName.name}`;
  }

  static create(firstName: string, lastName: string): FullName {
    return new FullName(new Name(firstName), new Name(lastName));
  }
}

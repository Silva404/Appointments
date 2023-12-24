export class NameIsEmpty extends Error {
  constructor(name: string) {
    super(`Name cannot be empty: ${name}`);
    this.name = "NameIsEmpty";
  }
}

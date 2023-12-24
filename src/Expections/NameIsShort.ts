export class NameIsShort extends Error {
  constructor(name: string) {
    super(`Name is too short: ${name}`);
    this.name = "NameIsShort";
  }
}

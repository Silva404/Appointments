export class NameHasNumbers extends Error {
  constructor(title: string) {
    super(title);
    this.name = "NameHasNumbers";
  }
}

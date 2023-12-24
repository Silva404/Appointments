export class TitleHasNumbers extends Error {
  constructor(title: string) {
    super(title);
    this.name = "TitleHasNumbers";
  }
}

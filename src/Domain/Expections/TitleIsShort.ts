export class TitleIsShort extends Error {
  constructor(title: string) {
    super(`Title is too short: ${title}`);
    this.name = "TitleIsShort";
  }
}

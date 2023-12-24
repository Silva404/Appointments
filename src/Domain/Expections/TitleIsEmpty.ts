export class TitleIsEmpty extends Error {
  constructor(title: string) {
    super(`Title cannot be empty: ${title}`);
    this.name = "TitleIsEmpty";
  }
}

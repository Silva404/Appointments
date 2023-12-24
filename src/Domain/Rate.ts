import { Identifier } from "./Identifier";

export class Rate {
  public date = new Date();
  public id = new Identifier();

  constructor(
    public readonly rating: number,
    public readonly message: string,
  ) {}
}

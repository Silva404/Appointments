import { Identifier } from "./Identifier";

export class TopicOfInterest {
  public readonly id: Identifier = new Identifier();

  constructor(public readonly topic: string) {}
}

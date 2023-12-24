import { UUID, randomUUID } from "node:crypto";

export class Identifier {
  public readonly id: UUID;

  constructor() {
    this.id = randomUUID();
  }
}

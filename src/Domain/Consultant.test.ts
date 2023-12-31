import { test, describe } from "node:test";
import { equal } from "node:assert";
import { Consultant } from "./Consultant";
import { Rate } from "./Rate";

describe("Consultant", () => {
  test("Should get the average rating", () => {
    const consultant = Consultant.create("first name", "last name", [
      new Rate(1, "message 1"),
      new Rate(5, "message 2"),
      new Rate(3, "message 3"),
    ]);
    equal(consultant.averageRating(), 3);

    consultant.rate(new Rate(4, "message 4"));
    equal(consultant.averageRating(), 3.25);
  });
});

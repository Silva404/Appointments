import { Name } from "./Name";
import { Rate } from "./Rate";

export class Consultant {
  private constructor(
    readonly name: Name,
    private ratings: Array<Rate> = [],
  ) {}

  rate(rate: Rate) {
    this.ratings.push(rate);
  }

  averageRating(): number {
    return (
      this.ratings.reduce((acc, item) => {
        return acc + item.rating;
      }, 0) / this.ratings.length
    );
  }

  static create(
    firstName: string,
    lastName: string,
    ratings?: Array<Rate>,
  ): Consultant {
    return new Consultant(new Name(firstName, lastName), ratings);
  }
}

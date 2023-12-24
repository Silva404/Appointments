import { FullName } from "./FullName";
import { Rate } from "./Rate";

export class Consultant {
  private constructor(
    readonly name: FullName,
    private ratings: Array<Rate> = [],
  ) {}

  rate(rate: Rate) {
    this.ratings.push(rate);
  }

  averageRating(): number {
    const ratingsSum = this.ratings.reduce((acc, item) => {
      return acc + item.rating;
    }, 0);

    return ratingsSum / this.ratings.length;
  }

  static create(
    firstName: string,
    lastName: string,
    ratings?: Array<Rate>,
  ): Consultant {
    return new Consultant(FullName.create(firstName, lastName), ratings);
  }
}

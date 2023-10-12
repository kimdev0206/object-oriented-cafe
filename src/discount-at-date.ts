import Discountable from "./discountable";

export class DiscountAtDate implements Discountable {
  private static _date = 20;
  private static _percentage = 20;

  discount(price: number): number {
    return price - (price * DiscountAtDate._percentage) / 100;
  }

  isDiscountable(date: number): boolean {
    return DiscountAtDate._date === date;
  }
}

const discountAtHour = new DiscountAtDate();
export default discountAtHour;

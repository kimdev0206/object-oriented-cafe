import Discountable from "./discountable";

export class DiscountAtHour implements Discountable {
  private static _startHour = 8;
  private static _endHour = 10;
  private static _amount = 500;

  discount(price: number): number {
    return (price -= DiscountAtHour._amount);
  }

  isDiscountable(hour: number): boolean {
    return DiscountAtHour._startHour <= hour && DiscountAtHour._endHour >= hour;
  }
}

const discountAtHour = new DiscountAtHour();
export default discountAtHour;

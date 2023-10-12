import { Moment } from "moment";
import { DiscountAtDate } from "./discount-at-date";
import { DiscountAtHour } from "./discount-at-hour";
import Discountable from "./discountable";
import MenuPrice from "./menu-price";

export default class MenuItem {
  private _name: string;
  private _price: number;

  constructor(name: string, datetime: Moment, ...discounts: Discountable[]) {
    this._name = name;
    this._price = MenuPrice[name as keyof typeof MenuPrice];

    for (const discount of discounts) {
      if (
        discount instanceof DiscountAtHour &&
        discount.isDiscountable(datetime.get("hour"))
      ) {
        this._price = discount.discount(this._price);
      }

      if (
        discount instanceof DiscountAtDate &&
        discount.isDiscountable(datetime.get("date"))
      ) {
        this._price = discount.discount(this._price);
      }
    }
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}

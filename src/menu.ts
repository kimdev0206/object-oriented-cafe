import moment, { Moment } from "moment";
import MenuItem from "./menu-item";

export default class Menu {
  private static _discountDate = 20;
  private static _discountHourStart = 8;
  private static _discountHourEnd = 10;

  private _items: MenuItem[];
  private _datetime: Moment;

  constructor() {
    this._items = [];
    this._items.push(new MenuItem("Americano"));
    this._items.push(new MenuItem("Cappuccino"));
    this._items.push(new MenuItem("CaramelMacchiato"));
    this._items.push(new MenuItem("Espresso"));

    this._datetime = moment("2023-10-20 08:30");
  }

  get datetime(): string {
    return this._datetime.format("YYYY-MM-DD HH:mm");
  }

  get item(): MenuItem {
    const selectRandomIndex = (max: number = this._items.length) => {
      return Math.floor(Math.random() * max);
    };

    const item = this._items[selectRandomIndex()];
    item.price = this.discount(item);

    return item;
  }

  private discount(menuItem: MenuItem): number {
    let { price } = menuItem;

    if (this._datetime.get("date") === Menu._discountDate) {
      price *= 0.8;
    }

    if (
      this._datetime.get("hour") >= Menu._discountHourStart &&
      this._datetime.get("hour") <= Menu._discountHourEnd
    ) {
      price -= 500;
    }

    return price;
  }
}

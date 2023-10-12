import moment, { Moment } from "moment";
import MenuItem from "./menu-item";
import discountAtHour from "./discount-at-hour";
import discountWithDate from "./discount-at-date";

export default class Menu {
  private _items: MenuItem[];
  private _datetime: Moment;

  constructor() {
    this._datetime = moment("2023-10-20 08:30");

    this._items = [];
    this._items.push(
      new MenuItem("Americano", this.datetime, discountWithDate, discountAtHour)
    );
    this._items.push(new MenuItem("Cappuccino", this.datetime, discountAtHour));
    this._items.push(
      new MenuItem("CaramelMacchiato", this.datetime, discountAtHour)
    );
    this._items.push(new MenuItem("Espresso", this.datetime, discountAtHour));
  }

  get item(): MenuItem {
    const selectRandomIndex = (max: number = this._items.length) => {
      return Math.floor(Math.random() * max);
    };

    return this._items[selectRandomIndex()];
  }

  get datetime(): Moment {
    return this._datetime;
  }

  datetimeFormat(): string {
    return this._datetime.format("YYYY-MM-DD HH:mm");
  }
}

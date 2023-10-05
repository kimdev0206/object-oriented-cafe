import Coffee from "./coffee";
import MenuItem from "./menu-item";

export default class Barista {
  private _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  makeCoffee(menuItem: MenuItem) {
    return new Coffee(menuItem.name, menuItem.price);
  }
}

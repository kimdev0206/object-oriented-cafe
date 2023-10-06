import Coffee from "./coffee";
import MenuItem from "./menu-item";

export default class Barista {
  private _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  makeCoffee(menuItem: MenuItem) {
    return new Coffee(menuItem.name, menuItem.price);
  }

  receive(money: number): void {
    this._amount += money;
  }
}

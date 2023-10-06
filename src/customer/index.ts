import Barista from "../barista";
import Coffee from "../coffee";
import Menu from "../menu";
import MenuItem from "../menu-item";
import Payable from "./payable";

export default class Customer {
  private _coffee!: Coffee;
  private _payable: Payable;

  constructor(payable: Payable) {
    this._payable = payable;
  }

  get coffee(): Coffee {
    return this._coffee;
  }

  get money(): number {
    return this._payable.money;
  }

  orderCoffee(barista: Barista, menu: Menu): void {
    const menuItem: MenuItem = menu.recommend();

    const coffee: Coffee = barista.takeOrder(menuItem, this._payable);
    this._coffee = coffee;
  }
}

import Coffee from "./coffee";
import Customer from "./customer";
import MenuItem from "./menu-item";

export default class Barista {
  private _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  private makeCoffee(menuItem: MenuItem): Coffee {
    return new Coffee(menuItem.name, menuItem.price);
  }

  private receive(money: number): void {
    this._amount += money;
  }

  takeOrder(menuItem: MenuItem, customer: Customer): Coffee {
    customer.pay(menuItem.price);
    this.receive(menuItem.price);

    return this.makeCoffee(menuItem);
  }
}

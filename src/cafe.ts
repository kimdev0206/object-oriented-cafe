import Barista from "./barista";
import Customer from "./customer";
import Menu from "./menu";

export default class Cafe {
  private _barista: Barista;
  private _menu: Menu;

  constructor(barista: Barista, menu: Menu) {
    this._barista = barista;
    this._menu = menu;
  }

  enter(customer: Customer): void {
    customer.orderCoffee(this._barista, this._menu);
  }
}

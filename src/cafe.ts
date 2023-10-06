import Barista from "./barista";
import Customer from "./customer";
import Menu from "./menu";
import MenuItem from "./menu-item";

export default class Cafe {
  private _barista: Barista;
  private _menu: Menu;

  constructor(barista: Barista, menu: Menu) {
    this._barista = barista;
    this._menu = menu;
  }

  enter(customer: Customer): void {
    const selectedMenuItem: MenuItem = this._menu.recommend();

    customer.pay(selectedMenuItem.price);
    this._barista.receive(selectedMenuItem.price);

    customer.orderCoffee(this._barista, selectedMenuItem);
  }
}

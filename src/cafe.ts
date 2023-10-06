import Barista from "./barista";
import Coffee from "./coffee";
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
    const selectedMenuItem: MenuItem = customer.selectRandomMenuItem(
      this._menu
    );

    customer.pay(selectedMenuItem.price);
    this._barista.receive(selectedMenuItem.price);

    const coffee: Coffee = this._barista.makeCoffee(selectedMenuItem);

    customer.coffee = coffee;
  }
}

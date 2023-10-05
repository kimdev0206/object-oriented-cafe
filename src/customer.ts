import Coffee from "./coffee";
import Menu from "./menu";
import MenuItem from "./menu-item";

export default class Customer {
  private _money: number;
  private _coffee!: Coffee;

  constructor(money: number) {
    this._money = money;
  }

  get money(): number {
    return this._money;
  }

  set money(value: number) {
    this._money = value;
  }

  get coffee(): Coffee {
    return this._coffee;
  }

  set coffee(value: Coffee) {
    this._coffee = value;
  }

  selectRandomMenuItem(menu: Menu): MenuItem {
    const menuItems: MenuItem[] = menu.items;

    const selectRandomIndex = (max: number = menuItems.length) => {
      return Math.floor(Math.random() * max);
    };

    return menu.getItem(selectRandomIndex());
  }
}

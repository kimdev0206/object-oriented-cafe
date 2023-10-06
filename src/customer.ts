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

  pay(cost: number): void {
    if (this._money >= cost) {
      this._money -= cost;
    } else {
      throw new Error("잔액이 부족합니다.");
    }
  }
}

import MenuItem from "./menu-item";

export default class Menu {
  private _items: MenuItem[];

  constructor() {
    this._items = [];
    this._items.push(new MenuItem("Americano", 1_500));
    this._items.push(new MenuItem("Cappuccino", 2_000));
    this._items.push(new MenuItem("Caramel Macchiato", 2_500));
    this._items.push(new MenuItem("Espresso", 2_500));
  }

  recommend(): MenuItem {
    const selectRandomIndex = (max: number = this._items.length) => {
      return Math.floor(Math.random() * max);
    };

    return this._items[selectRandomIndex()];
  }
}

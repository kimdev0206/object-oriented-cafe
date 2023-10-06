import MenuItem from "./menu-item";

export default class Menu {
  private _items: MenuItem[];

  constructor(items: MenuItem[]) {
    this._items = items;
  }

  recommend(): MenuItem {
    const selectRandomIndex = (max: number = this._items.length) => {
      return Math.floor(Math.random() * max);
    };

    return this._items[selectRandomIndex()];
  }
}

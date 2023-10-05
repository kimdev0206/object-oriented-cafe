import MenuItem from "./menu-item";

export default class Menu {
  private _items: MenuItem[];

  constructor(items: MenuItem[]) {
    this._items = items;
  }

  get items(): MenuItem[] {
    return this._items;
  }

  getItem(index: number): MenuItem {
    return this._items[index];
  }
}

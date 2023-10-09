import MenuPrice from "./menu-price";

export default class MenuItem {
  private _name: string;
  private _price: number;

  constructor(name: string) {
    this._name = name;
    this._price = MenuPrice[name as keyof typeof MenuPrice];
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}

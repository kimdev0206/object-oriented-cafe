import Coffee from "./coffee";

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

  pay(cost: number): void {
    if (this._money >= cost) {
      this._money -= cost;
    } else {
      throw new Error("잔액이 부족합니다.");
    }
  }
}

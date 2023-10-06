import Payable from "./payable";

export default class PayWithCash implements Payable {
  private _money: number;

  constructor(money: number) {
    this._money = money;
  }

  get money(): number {
    return this._money;
  }

  pay(price: number): void {
    if (this._money >= price) {
      this._money -= price;
    } else {
      throw new Error("잔액이 부족합니다.");
    }
  }
}

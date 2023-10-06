import Payable from "./payable";

export default class PayWithCard implements Payable {
  private _card: Card;

  constructor(money: number) {
    this._card = new Card(money);
  }

  get money(): number {
    return this._card._money;
  }

  pay(price: number): void {
    this._card.pay(price);
  }
}

class Card {
  _money: number;

  constructor(money: number) {
    this._money = money;
  }

  pay(price: number): void {
    if (this._money >= price) {
      this._money -= price;
    } else {
      throw new Error("잔액이 부족합니다.");
    }
  }
}

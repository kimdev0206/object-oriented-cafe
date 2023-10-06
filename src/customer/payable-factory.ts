import PayWay from "./pay-way";
import PayWithCard from "./pay-with-card";
import PayWithCash from "./pay-with-cash";
import Payable from "./payable";

export default class PayableFactory {
  static with(payWay: PayWay, money: number): Payable {
    if (payWay === PayWay.CASH) {
      return new PayWithCash(money);
    } else if (payWay === PayWay.CARD) {
      return new PayWithCard(money);
    }

    throw new Error("지원하지 않는 결제 방식입니다.");
  }
}

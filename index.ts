import Barista from "./src/barista";
import Cafe from "./src/cafe";
import Customer from "./src/customer";
import PayWay from "./src/customer/pay-way";
import Payable from "./src/customer/payable";
import PayableFactory from "./src/customer/payable-factory";
import Menu from "./src/menu";

(() => {
  // init
  const menu: Menu = new Menu();
  const bob: Barista = new Barista(100_000);
  const cafe: Cafe = new Cafe(bob, menu);

  const payWay: PayWay = PayWay.CARD;
  const payable: Payable = PayableFactory.with(payWay, 100_000);
  const cathy: Customer = new Customer(payable);

  const moneyFormatter = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  });

  // run
  console.log("주문 전 금액".padStart(20, "#").padEnd(30, "#"));
  console.log(`Customer 금액: ${moneyFormatter.format(cathy.money)}`);
  console.log(`Barista  금액: ${moneyFormatter.format(bob.amount)}`);

  cafe.enter(cathy);

  console.log("주문 후 금액".padStart(20, "#").padEnd(30, "#"));
  console.log(
    `주문메뉴     : ${cathy.coffee.name} (${moneyFormatter.format(
      cathy.coffee.price
    )})`
  );
  console.log(`Customer 금액: ${moneyFormatter.format(cathy.money)}`);
  console.log(`Barista  금액: ${moneyFormatter.format(bob.amount)}`);
})();

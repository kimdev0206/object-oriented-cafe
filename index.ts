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

  // run
  console.log(cathy.money);

  cafe.enter(cathy);

  console.log(cathy.coffee.name);
  console.log(cathy.money);
})();

import Barista from "./src/barista";
import Cafe from "./src/cafe";
import Customer from "./src/customer";
import PayWithCard from "./src/customer/pay-with-card";
// import PayWithCash from "./src/customer/pay-with-cash";
import Payable from "./src/customer/payable";
import Menu from "./src/menu";

(() => {
  // init
  const menu: Menu = new Menu();
  const bob: Barista = new Barista(100_000);
  const cafe: Cafe = new Cafe(bob, menu);

  // const payableCash: Payable = new PayWithCash(50_000);
  const payableCard: Payable = new PayWithCard(100_000);
  const cathy: Customer = new Customer(payableCard);

  // run
  console.log(cathy.money);

  cafe.enter(cathy);

  console.log(cathy.coffee.name);
  console.log(cathy.money);
})();

import Barista from "./src/barista";
import Cafe from "./src/cafe";
import Customer from "./src/customer";
import Menu from "./src/menu";

(() => {
  // init
  const menu: Menu = new Menu();
  const bob: Barista = new Barista(100_000);
  const cafe: Cafe = new Cafe(bob, menu);

  const cathy: Customer = new Customer(50_000);

  // run
  console.log(cathy.money);

  cafe.enter(cathy);

  console.log(cathy.coffee.name);
  console.log(cathy.money);
})();

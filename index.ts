import Barista from "./src/barista";
import Cafe from "./src/cafe";
import Customer from "./src/customer";
import Menu from "./src/menu";
import MenuItem from "./src/menu-item";

(() => {
  // init
  const menuItems: MenuItem[] = [];

  menuItems.push(new MenuItem("Americano", 1_500));
  menuItems.push(new MenuItem("Cappuccino", 2_000));
  menuItems.push(new MenuItem("Caramel Macchiato", 2_500));
  menuItems.push(new MenuItem("Espresso", 2_500));

  const menu: Menu = new Menu(menuItems);
  const bob: Barista = new Barista(100_000);
  const cafe: Cafe = new Cafe(bob, menu);

  const cathy: Customer = new Customer(50_000);

  // run
  console.log(cathy.money);

  cafe.enter(cathy);

  console.log(cathy.coffee.name);
  console.log(cathy.money);
})();

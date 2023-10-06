<div align="center">

# Object Oriented Cafe

</div>

> **NOTE:**
>
> 본 과정은 [Google Developer Student Club Sookmyung. 객체지향과 스프링에 대한 이해](https://youtu.be/uzch3bilTvo?si=_L1W4I8crdjxzJj1) 영상의 내용을 기반합니다.

## 개선과정

### 1단계: 절차지향적 설계

클래스를 정하고 어떤 데이터가 필요한지부터 채웁니다.

> **WARNING: 직관에 어긋납니다.**
>
> - Cafe가 손님의 돈을 뺏어서 바리스타에게 넘겨줍니다.
> - Cafe가 바리스타에게 커피를 만들라고 시킵니다.
> - Cafe가 손님한테 커피를 줍니다.

> **WARNING: 변경에 취약합니다.**
>
> - 결제 방법이 변경되면 (현금 → 카드), enter 메소드가 변경됩니다.
> - 계산 수행자가 변경되면 (Barista → 알바생), 클래스의 필드와 함께 enter 메소드가 변경됩니다.

```ts
export default class Cafe {
  private _barista: Barista;
  private _menu: Menu;
  ...

  enter(customer: Customer): void {
    const selectedMenuItem: MenuItem = customer.selectRandomMenuItem(
      this._menu
    );

    customer.money = customer.money - selectedMenuItem.price;
    this._barista.amount = this._barista.amount + selectedMenuItem.price;

    const coffee: Coffee = this._barista.makeCoffee(selectedMenuItem);

    customer.coffee = coffee;
  }
}
```

### 2단계: 객체간 명확한 행동

- Customer는 결제를 합니다.
- Barista는 돈 받기를 합니다.
- Menu는 MenuItem을 랜덤 선택 합니다.
- Customer는 커피를 요청 합니다.

> **WARNING: 직관에 어긋납니다.**
>
> - Cafe가 Menu를 랜덤 선택 합니다.

> **WARNING: 맥락이 부자연스럽습니다.**
>
> - Customer의 결제 행동과 Barista의 돈 받기 행동은 상호작용이 있지만, 서로 독립적입니다.

```ts
export default class Cafe {
  private _barista: Barista;
  private _menu: Menu;
  ...

  enter(customer: Customer): void {
    const selectedMenuItem: MenuItem = this._menu.recommend();

    customer.pay(selectedMenuItem.price);
    this._barista.receive(selectedMenuItem.price);

    customer.orderCoffee(this._barista, selectedMenuItem);
  }
}
```

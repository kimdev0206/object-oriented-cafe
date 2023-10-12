export default interface Discountable {
  discount(price: number): number;
  isDiscountable(unit: number): boolean;
}

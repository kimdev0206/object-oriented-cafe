export default interface Payable {
  get money(): number;
  pay(price: number): void;
}

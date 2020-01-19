
export class ArrayList<T> {
  private items: Array<T>;

  constructor() {
    this.items = [];
  }


  add(value: T): void {
    this.items.push(value);
  }
  addAt(index: number, value: T): void {
    this.items[index] = value;
  }

  get(index: number): T {
    return this.items[index];
  }

  remove(index: number) {

  }

  isEmpty() {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  toArray() {
    return this.items;
  }
}

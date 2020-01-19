export interface List<T> {
  add(item: T): void;
  addAt(index: number, item: T): void;

  contains(item: T): boolean;
  get(index: number): T;

  remove(index: number): void;
  isEmpty(): boolean;
  size(): number;
  toArray(): T[];
}

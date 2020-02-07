export class ArrayList {
    constructor() {
        this.items = [];
    }
    add(value) {
        this.items.push(value);
    }
    addAt(index, value) {
        this.items[index] = value;
    }
    get(index) {
        return this.items[index];
    }
    remove(index) {
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    toArray() {
        return this.items;
    }
}
//# sourceMappingURL=ArrayList.js.map
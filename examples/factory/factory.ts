class Factory {
  private _stocks: Record<string, number> = {};
  private _category: string = "";

  constructor(name: string) {
    this._category = name;
  }

  create(product: string, count: number) {
    if (this._stocks[`${this._category}:${product}`]) {
      this._stocks[`${this._category}:${product}`] += count;
    } else {
      this._stocks[`${this._category}:${product}`] = count;
    }
    return this._stocks;
  }

  sales(product: string, count: number) {
    if (this._stocks[`${this._category}:${product}`] > count) {
      this._stocks[`${this._category}:${product}`] -= count;
    } else {
      delete this._stocks[`${this._category}:${product}`];
    }
    return this._stocks;
  }
}

class Shoes extends Factory {
  constructor(name: string) {
    super(name);
  }
}
class Gloves extends Factory {
  constructor(name: string) {
    super(name);
  }
}

const ShoesFactory = new Shoes("NIKE");
const GloveFactory = new Gloves("MIZUNO");

console.log(ShoesFactory.create("AIR_FORCE", 10));
console.log(ShoesFactory.create("TIEMPO", 10));

console.log(GloveFactory.create("1AGGH22013", 20));

console.log(ShoesFactory.sales("AIR_FORCE", 5));

console.log(GloveFactory.sales("1AGGH22013", 7));
console.log(GloveFactory.sales("1AGGH22013", 15));

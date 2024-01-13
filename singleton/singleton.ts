"use strict";

class Singleton {
  private static instance: Singleton;
  private version: Date;

  constructor() {
    if (Singleton.instance) {
      console.warn("singleton class already instantiated");
      throw new Error("에러");
    }
    Singleton.instance = this;
    this.version = new Date();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

const s1 = Singleton.getInstance();
console.log(s1);
const s2 = Singleton.getInstance();
console.log(s2);
console.log(s1 === s2);

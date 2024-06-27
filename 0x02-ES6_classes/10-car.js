// Symbol for deep clone method
const deepCloneSymbol = Symbol('deepClone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to create a deep clone of the Car instance
  [deepCloneSymbol]() {
    const cloned = new this.constructor(this._brand, this._motor, this._color);
    return cloned;
  }

  // Method to perform the clone using the deepCloneSymbol
  cloneCar() {
    return this[deepCloneSymbol]();
  }
}

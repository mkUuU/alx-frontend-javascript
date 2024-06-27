import Car from "./10-car.js";

const deepCloneSymbol = Symbol('deepClone');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  [deepCloneSymbol]() {
    const cloned = new Car(this._brand, this._motor, this._color); // Create instance of Car, not EVCar
    return cloned;
  }

  cloneCar() {
    return this[deepCloneSymbol]();
  }
}

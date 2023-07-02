class Car {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
    console.log(
      `this is ${model} and its color is ${color} and it launch yeadr is ${year}`
    );
  }
}
class Hiro extends Car {
  constructor(speed, model, color, year) {
    super(speed, model, color, year);
    this.speed = speed;
    this.model = model;
    this.color = color;
    this.year = year;
    console.log(
      ` this  is ${model} with specs speed=${speed}, launch year=${year} and color=${color}`
    );
  }
}
const obj = new Hiro("200 km/hr", "1050x", "red", 2075);

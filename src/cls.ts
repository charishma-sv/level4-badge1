//writing and using classes
class color {
  red: number;
  blue: number;
  green: number;
  //constructor method
  constructor(red = 0, blue = 0, green = 0) {
    this.red = red;
    this.blue = blue;
    this.green = green;
  }
}

const black = new color();
black.red = 0;
black.green = 0;
black.blue = 0;
console.log(`rgb of black:${black.red}${black.blue}${black.green}`);

//Inheritance of classes
class Animal {
  //static members are not associated with any instance of class
  static legs = 4;
  static printLegs() {
    console.log(Animal.legs);
  }
  move() {
    console.log('I can move');
  }
}
class Dog extends Animal {
  woof() {
    console.log('I can bark woof');
  }
}
console.log(Animal.printLegs());

//abstract classes
abstract class Base {
  abstract getName(): string;
  printName() {
    console.log('hello' + this.getName());
  }
}
//const bas = new Base() error cannot create instance of base
class Derived extends Base {
  getName() {
    return 'world';
  }
}
const derive = new Derived();
derive.printName();

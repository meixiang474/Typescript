// private, protected, public访问类型
// public 允许我在类的内外被调用
// private允许在类内被使用
// protected 允许在类内及继承的子类中使用
class Person2 {
  name: string = '';
  sayHi(): void {
    console.log('hi');
  }
}

const person2 = new Person2();

person2.name = 'dell';
console.log(person2.name);

// constructor
class Person3 {
  // name: string;
  constructor(public name: string) {
    // this.name = name;
  }
}
const person3 = new Person3('dell');

class Person4 {
  constructor(public name: string) {}
}

class Teacher1 extends Person4 {
  constructor(public age: number, name: string) {
    super(name);
  }
}
const teacher1 = new Teacher1(28, 'dell');

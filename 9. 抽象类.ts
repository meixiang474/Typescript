class Person9 {
  constructor(public readonly name: string) {}
}

const person9 = new Person9('Dell');
console.log(person9.name);

abstract class Geom {
  width: number = 100;
  getType(): string {
    return 'Geom';
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea(): number {
    return 123;
  }
}
class Square {}
const c = new Circle();
console.log(c.width);

interface Person {
  name: string;
}

interface Teacher extends Person {
  teachingAge: number;
}
interface Student extends Person {
  age: number;
}

const getUserInfo = (user: Person) => {
  console.log(user.name);
};

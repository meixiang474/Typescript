class Person {
  name = 'dell';
  getName(): string {
    return this.name;
  }
}

class Teacher0 extends Person {
  getTeacherName(): string {
    return 'dell';
  }
  getName(): string {
    return super.getName() + 'lee';
  }
}

const teacher0 = new Teacher0();
console.log(teacher0.getTeacherName());

const person0 = new Person();
console.log(person0.getName());

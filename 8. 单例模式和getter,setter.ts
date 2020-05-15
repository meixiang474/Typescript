// getter and setter
class Person7 {
  constructor(private _name: string) {}
  get name(): string {
    return this._name + 'lee';
  }
  set name(name: string) {
    const realName = name.split(' ')[0];
    this._name = realName;
  }
}

const person7 = new Person7('dell');
console.log(person7.name);
person7.name = 'dell lee';
console.log(person7.name);

// 单例模式
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('dell lee');
    }
    return this.instance;
  }
}
const demo1 = Demo.getInstance();

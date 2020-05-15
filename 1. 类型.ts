// 基础类型 null, undefined, symbol, boolean, void, number, string
const count0 = 123;
const teacherName: string = 'Dell';

// 对象类型, {}, Class, function, []

class Person1 {}

const teacher: {
  name: string;
  age: number;
} = {
  name: 'Dell',
  age: 18,
};

const numbers: number[] = [1, 2, 3];

const dell: Person = new Person();

const getTotal0: () => number = () => {
  return 123;
};

const func = (str: string): number => {
  return parseInt(str, 10);
};

const func1: (str: string) => number = (str) => parseInt(str, 10);

const date = new Date();

// 其他的 case
interface Person {
  name: string;
}
const rawData = '{"name": "dell"}';
const newData: Person = JSON.parse(rawData);

let temp: number | string = 123;
temp = '456';

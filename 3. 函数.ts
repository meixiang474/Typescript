function hello() {}
const hello1 = function () {};
const hello2 = () => {};

function add0(first: number, second: number): number {
  return first + second;
}

function sayHello(): void {
  console.log('hello');
}

function errorEmitter(): never {
  throw new Error();
}

function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

const total = add({ first: 1, second: 2 });

// type annotation 类型注解, 我们告诉ts变量是什么类型
// type inference 类型推断, TS 会自动的尝试分析变量的类型
// 如果TS能够自动分析变量类型，我们就什么不需要做了
// 如果TS无法分析变量类型的话，我们需要使用类型注解

let count: number;
count = 123;

let countInference = 123;

function getTotal(firstName: number, secondNumber: number) {
  return firstName + secondNumber;
}

const total = getTotal(1, 2);

let obj = { name: 'Dell', age: 18 };

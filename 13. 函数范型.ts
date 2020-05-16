// 泛型 generic 泛指的类型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
function map<T>(params: T[]) {
  return params;
}
join<string, string>('1', '2');
map(['123']);

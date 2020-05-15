const arr: (number | string)[] = [1, 2, 3];
const stringArr = ['1', '2', '3'];
const undefinedArr: undefined[] = [undefined];

// type alias
type User = { name: string; age: number };

class Teacher {
  name: string;
  age: number;
}

const objectArr: Teacher[] = [
  {
    name: 'dell',
    age: 18,
  },
];

// 元组 tuple
const tearcherInfo: [string, string, number] = ['Dell', 'male', 18];

// csv
const teacherList: [string, string, number][] = [
  ['dell', 'male', 19],
  ['sun', 'female', 26],
  ['jeny', 'female', 38],
];

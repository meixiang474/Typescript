interface Person0 {
  name: string;
  readonly age?: number;
  [propName: string]: any;
  say(): string;
}

interface Teacher extends Person {
  teach(): string;
}

interface SayHi {
  (word: string): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
};

const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello';
  },
};
getPersonName(person);
setPersonName(person, 'lee');

class User0 implements Person {
  name: string = 'dell';
  age: number = 18;
  say(): string {
    return 'say hello';
  }
}

const say: SayHi = (word: string): string => {
  return word;
};

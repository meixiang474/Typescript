interface Item {
  name: string;
}

class DataManager<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number) {
    return this.data[index].name;
  }
}
const data = new DataManager([
  {
    name: 'dell',
  },
]);
data.getItem(0);

function hello<T>(params: T) {
  return params;
}
const func = hello;

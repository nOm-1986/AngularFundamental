import { last } from "rxjs";

const username: string |  number = 'Fabián Beltran';
const sum = (a: number, b: number): number => {
  return a + b;
}

sum(1,3);

class Person {

  // private age: number;
  // lastName: string;

  // constructor(age: number, lastName: string){
  //   this.age = age;
  //   this.lastName = lastName;
  // }
  // Todo esto lo puedo abreviar por esto:
  constructor(public age: number, private lastName: string){};
}

const fabo= new Person(36, 'Beltrán');
fabo.age;
fabo.lastName;

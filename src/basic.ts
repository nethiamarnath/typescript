import { type } from "os";

const person = {
  name: "max",
  age: 30,
  hobbies: ['singing', 'reading'],
  role: [2, 'student']
};
person.hobbies.push('writing')
for (const hobby of person.hobbies)
  console.log(hobby)

console.log(person.name)
let activity: string[]
activity = ['stand', 'running']
for (const act of activity) {
  console.log(act.toUpperCase())
}

// enum

enum Role {
  ADMIN = 5, READ_ONLY, AUTHOR
}
const member = {
  name: "max",
  age: 30,
  hobbies: ['singing', 'reading'],
  role: Role.ADMIN
};
if (member.role == Role.ADMIN) {
  console.log("is admin")
}
// union types
let property: number | string  //custom type
// function <property:number>
function combine(n1: typeof property, n2: typeof property) {
  let res
  if (typeof n1 === 'number' && typeof n2 == 'number') {
    res = +n1 + +n2
  } else {
    res = n1.toString() + n2.toString()
  }
  return res
}
console.log(combine('max', '20'))
console.log(combine(50, 40))

//generic type
function create<S, T>(n1: S, n2: T): [S, T] {
  return [n1, n2]
}
console.log(create<string, boolean>('helo', true));

console.log(create<number, string>(10, 'hello'));
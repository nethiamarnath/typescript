"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "max",
    age: 30,
    hobbies: ['singing', 'reading'],
    role: [2, 'student']
};
person.hobbies.push('writing');
for (const hobby of person.hobbies)
    console.log(hobby);
console.log(person.name);
let activity;
activity = ['stand', 'running'];
for (const act of activity) {
    console.log(act.toUpperCase());
}
// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
const member = {
    name: "max",
    age: 30,
    hobbies: ['singing', 'reading'],
    role: Role.ADMIN
};
if (member.role == Role.ADMIN) {
    console.log("is admin");
}
// union types
let property; //custom type
// function <property:number>
function combine(n1, n2) {
    let res;
    if (typeof n1 === 'number' && typeof n2 == 'number') {
        res = +n1 + +n2;
    }
    else {
        res = n1.toString() + n2.toString();
    }
    return res;
}
console.log(combine('max', '20'));
console.log(combine(50, 40));
//generic type
function create(n1, n2) {
    return [n1, n2];
}
console.log(create('helo', true));
console.log(create(10, 'hello'));

//Practice problem map(), filter(), find()
//1
const odd = [1, 3, 5, 7, 9];
const even = [];

//with for loop
for (let num of odd) {
  even.push(num + 1);
}
console.log(even);

//with map method
const evenNum = odd.map((num) => num + 1);
console.log(evenNum);

//2
const arr = [33, 50, 79, 78, 90, 101, 30];
const filtered = arr.filter((elem) => elem % 10 === 0);
console.log(filtered);

//3

const fristNum = arr.find((elem) => elem % 10 === 0);
console.log(fristNum);

//Practice problem reduce()
//1
const arr1 = [1, 9, 17, 22];
const sum = arr1.reduce((pre, curr) => pre + curr, 0);
console.log(sum);

//2
const people = [
  { name: "meena", age: 20 },
  { name: "rina", age: 15 },
  { name: "suchorita", age: 22 },
];
//with for lop
let ageSum = 0;
for (let age of people) {
  ageSum += age.age;
}
console.log(ageSum);

//with reduce()
const addAge = people.reduce((pre, curr) => pre + curr.age, 0);
console.log(addAge);

//Practice problem: access object values
//1
const student = {
  name: "Fredie",
  age: 26,
};
console.log(student.age);

//2

let data = {
  location: [
    {
      latitude: "34.5, 37.8",
      longitude: "98.77, 58.7",
      city: "Hyderabad",
      country: "india",
    },
  ],
};

console.log(data.location[0].city);

//3

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);

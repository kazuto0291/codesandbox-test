const myProfile = {
  name: "トマト",
  age: 28
};
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;

console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です。`;
console.log(message2);

const myProfile = ["バナナ", 22];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);

const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello();

const array = [1, 2, 3, 4, 5, 6, 6, 6, 3, 5, 6];
console.log(array, "array");
console.log(...array, "...array");

const array2 = [10, 20, 30];
const array3 = [90, 80, 70];

const array4 = [...array2];
const array5 = [...array2, ...array3, ...array4];
console.log(array5);

const numArray = [1, 2, 3, 4, 5, 6, 7, 8];

const newNumArray = numArray.filter((num) => {
  return num % 2 === 1;
});

console.log(newNumArray);

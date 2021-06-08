const myProfile = ["バナナ", 22];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);

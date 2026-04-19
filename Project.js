function Grade(value) {
  switch (true) {
    case value >= 90 && value <= 100:
      console.log("A");
      break;
    case value >= 80 && value <= 89:
      console.log("B");
      break;
    case value >= 70 && value <= 79:
      console.log("C");
      break;
    case value >= 60 && value <= 69:
      console.log("D");
      break;
    case value <= 59:
      console.log("F");
      break;
    default:
      console.log("Out of score range (0 - 100)");
  }

  let score_results = value > 59 ? "Pass" : "Fail";

  console.log("The student : ", score_results);
}

Grade(15);

// Question 2
function convert_num(str) {
  let result = Number(str);
  console.log(result);
}

convert_num();

function checkVal() {
  const Values = [0, "", "Hello", null, undefined, NaN];

  Values.map((val) => {
    if (val) {
      console.log(`Truthy : ${val}`);
    } else {
      console.log(`Falsy : ${val}`);
    }
  });
}

checkVal();

// Question 3

function greetingBot(user_name, isMorning) {
  let greeting = isMorning
    ? `Good Morning, ${user_name}`
    : `Hello, ${user_name}`;

  console.log(greeting);
}

greetingBot("Sibusiso", false);

//Question 4
const post = {
  username: "Sibusiso",
  caption: "I Love One Piece Anime",
  likes: 0,
  comment: "Zoooorooo!!!",

  addLikes() {
    this.likes++;
  },
};

const { username, caption } = post;

console.log("username: ", username);
console.log("caption:", caption);

//Question 5
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];

const merge = [...first, ...second];

console.log("Merge result: ", merge);

for (let i = 1; i <= 5; i++) {
  let res = ""; // Reset the string for every new row

  // 1. Loop for leading spaces (to push stars to the right)
  for (let j = 0; j < 5 - i; j++) {
    res += "  ";
  }

  // 2. Loop for stars
  for (let n = 0; n < i; n++) {
    res += "*   ";
  }

  console.log(res);
}

let num = 10;
let result = "";
while (num > 0) {
  result += `${num} `;
  num--;
}

console.log(result);

//3-1 變量聲明
var number1 = 1; //盡量不使用
let number2 = 2;
const number3 = 3; //常數 不能修改賦值

function doSomething() {
  for (var i = 0; i < 5; i++) console.log(i);
  console.log("finally i = ", i);
}

//doSomething();

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(number1, number2));

let istrue: boolean = true;
let firstName: string = "Alex";
let str = `我叫${firstName}`;

//Array & Tuple(元組)
let list: number[] = [1, 2, 3, 4];
let list2: Array<number> = [1, 2, 3, 4];
let list3 = [1, 2, 3, 4];
let list4 = [1, "abc"];
let list5: any[] = [1, "dsc", true];

let person1: [number, string] = [1, "Alex"];
// person1[0] = 2
// person1[1] = '3'
// person1[2] =111
person1.push(3); //只定義兩個元素 有bug不報錯

//union type not tuple
let person2 = [1, "ajax"];
person2[0] = "3";
person2[1] = 3;

//Union & Literal Type
let union: string | number;
union = 2;
union = "adsaadsad";
// union = false;報錯

let union2: number | string | boolean | string[];

let union3: 0 | 1 | 2;
union3 = 1;
//union3 = 3;

function merge(
  n1: number | string,
  n2: number | string,
  resultType: "as-number" | "as-string"
) {
  if (resultType === "as-string") return n1.toString() + n2.toString();

  if (typeof n1 === "string" || typeof n2 === "string")
    return n1.toString() + n2.toString();
  else return n1 + n2;
}
let mergeNumber = merge(2, 3, "as-number");
let mergeNumber2 = merge(2, 3, "as-string");
let mergeString = merge("hello", "world", "as-string");

console.log(mergeNumber);
console.log(mergeNumber2);
console.log(mergeString);
//字面量型別
let literal: 1 | "2" | true | [1, 2, 3];

//枚舉類型 Enum
enum Color {
  red = 5,
  green,
  blue,
}
let color = Color.blue;
console.log(color);

enum Color2 {
  red = 5,
  blue = 10,
  green = 100,
}

enum Color3 {
  red = "red",
  green = "green",
  blue = 1,
}
let color3 = Color3.green;
console.log(color3);

//any 和 unknown
let randomValue: unknown = 666;
randomValue = true;
randomValue = "asdasda";
randomValue = {};
if (typeof randomValue === "function") {
  randomValue();
}

if (typeof randomValue === "string") {
  randomValue.toUpperCase();
}
//void , undefined ,never
function printResult(): undefined {
  console.log("lalala");
  return;
}

console.log("hello", printResult());

function throwError(message: string, errorCode: number): never {
  throw {
    message,
    errorCode,
  };
}
throwError("not found", 404);

function whileLoop(): never {
  while (true) {
    console.log("hahahaha");
  }
}

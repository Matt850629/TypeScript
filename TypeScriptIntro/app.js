//3-1 變量聲明
var number1 = 1; //盡量不使用
var number2 = 2;
var number3 = 3; //常數 不能修改賦值
function doSomething() {
    for (var i = 0; i < 5; i++)
        console.log(i);
    console.log("finally i = ", i);
}
//doSomething();
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(number1, number2));
var istrue = true;
var firstName = "Alex";
var str = "\u6211\u53EB" + firstName;
//Array & Tuple(元組)
var list = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var list3 = [1, 2, 3, 4];
var list4 = [1, "abc"];
var list5 = [1, "dsc", true];
var person1 = [1, "Alex"];
// person1[0] = 2
// person1[1] = '3'
// person1[2] =111
person1.push(3); //只定義兩個元素 有bug不報錯
//union type not tuple
var person2 = [1, "ajax"];
person2[0] = "3";
person2[1] = 3;
//Union & Literal Type
var union;
union = 2;
union = "adsaadsad";
// union = false;報錯
var union2;
var union3;
union3 = 1;
//union3 = 3;
function merge(n1, n2, resultType) {
    if (resultType === "as-string")
        return n1.toString() + n2.toString();
    if (typeof n1 === "string" || typeof n2 === "string")
        return n1.toString() + n2.toString();
    else
        return n1 + n2;
}
var mergeNumber = merge(2, 3, "as-number");
var mergeNumber2 = merge(2, 3, "as-string");
var mergeString = merge("hello", "world", "as-string");
console.log(mergeNumber);
console.log(mergeNumber2);
console.log(mergeString);
//字面量型別
var literal;
//枚舉類型 Enum
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 6] = "green";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
var color = Color.blue;
console.log(color);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 5] = "red";
    Color2[Color2["blue"] = 10] = "blue";
    Color2[Color2["green"] = 100] = "green";
})(Color2 || (Color2 = {}));
var Color3;
(function (Color3) {
    Color3["red"] = "red";
    Color3["green"] = "green";
    Color3[Color3["blue"] = 1] = "blue";
})(Color3 || (Color3 = {}));
var color3 = Color3.green;
console.log(color3);
//any 和 unknown
var randomValue = 666;
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
function printResult() {
    console.log("lalala");
    return;
}
console.log("hello", printResult());
function throwError(message, errorCode) {
    throw {
        message: message,
        errorCode: errorCode
    };
}
throwError("not found", 404);
function whileLoop() {
    while (true) {
        console.log("hahahaha");
    }
}

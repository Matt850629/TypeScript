//Generic type
//let list1:number = [1,2,3,4]
// let list2:Array<string> =['2','3','4']
var lastArray = function (arr) {
    return arr[arr.length - 1];
};
var l1 = lastArray([1, 2, 3, 4, 5]);
var l2 = lastArray(["a", "b", "c"]);
var l3 = lastArray(["a", "b", "c"]);
var makeTuple = function (x, y) { return [x, y]; };
var v1 = makeTuple(1, "one");
var v2 = makeTuple(true, 1);
console.log(v2.length);

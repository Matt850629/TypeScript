//Generic type
//let list1:number = [1,2,3,4]
// let list2:Array<string> =['2','3','4']

let lastArray = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

const l1 = lastArray([1, 2, 3, 4, 5]);
const l2 = lastArray<string>(["a", "b", "c"]);
const l3 = lastArray<string | number>(["a", "b", "c"]);

let makeTuple = <T, Y = number>(x: T, y: Y) => [x, y];

const v1 = makeTuple(1, "one");
const v2 = makeTuple<boolean>(true, 1);

console.log(v2.length)

//4-2 Interface 與 class
// let drawPoint = (point: Point) => {
//   console.log({ x: point.x, y: point.y });
// };
// drawPoint({ x: 105, y: 24 });
// //drawPoint({ x: "ALEX", y: "Liu LEX" });
// //drawPoint({weather:"下雨",temperature:"40C"});
// let getDistance = (a: Point, b: Point) => {

// };

// interface Point {
//   x: number;
//   y: number;
// }
interface IPoint {
  drawPoint: () => void;
  getDistance: (p: IPoint) => number;
  X: number;
  Y: number;
}

class Point implements IPoint {
  //   x: number;
  //   y: number;

  //Access Modifier 訪問修飾符: public
  //_x,_y 表示Class variable
  constructor(private _x: number, private _y: number) {
    // this.x = x;
    // this.y = y;
  }

  drawPoint = () => {
    console.log("x:" + this._x, "y:", this._y);
  };
  getDistance = (p: IPoint) => {
    return Math.pow(p.X - this._x, 2) + Math.pow(p.Y - this._y, 2);
    return 0;
  };

  set X(value: number) {
    if (value < 0) {
      throw new Error("value不能小於0");
    }
    this._x = value;
  }
  get X() {
    return this._x;
  }
  set Y(value: number) {
    if (value < 0) {
      throw new Error("value不能小於0");
    }
    this._y = value;
  }
  get Y() {
    return this._y;
  }
}

const point = new Point(2, 3);
// point.setX(10);
// point.setX(9);
// console.log(point.getX());
point.X = 100;
console.log(point.X);
console.log(point.Y)
//public, private, protect

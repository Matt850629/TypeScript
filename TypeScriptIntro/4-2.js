//4-2 Interface 與 class
// let drawPoint = (point: Point) => {
//   console.log({ x: point.x, y: point.y });
// };
// drawPoint({ x: 105, y: 24 });
// //drawPoint({ x: "ALEX", y: "Liu LEX" });
// //drawPoint({weather:"下雨",temperature:"40C"});
// let getDistance = (a: Point, b: Point) => {
var Point = /** @class */ (function () {
    //   x: number;
    //   y: number;
    //Access Modifier 訪問修飾符: public
    //_x,_y 表示Class variable
    function Point(_x, _y) {
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.drawPoint = function () {
            console.log("x:" + _this._x, "y:", _this._y);
        };
        this.getDistance = function (p) {
            return Math.pow(p.X - _this._x, 2) + Math.pow(p.Y - _this._y, 2);
            return 0;
        };
        // this.x = x;
        // this.y = y;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value不能小於0");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value不能小於0");
            }
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(2, 3);
// point.setX(10);
// point.setX(9);
// console.log(point.getX());
point.X = 100;
console.log(point.X);
console.log(point.Y);
//public, private, protect

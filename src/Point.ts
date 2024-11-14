import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry {
  private coordinate?: Coordinate;

  //0.1.2
  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate || []; // || 或
  }

  getType(): string {
      return "Point";
  }

  //0.2  
  isEmpty(): boolean {
    return this.coordinate.length === 0;
}

  //0.1.3
  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate && this.coordinate.length > 0 ? this.coordinate[0] : NaN;
}

  y(): number {
      return this.coordinate && this.coordinate.length > 1 ? this.coordinate[1] : NaN;
  }

  
  //0.4
  clone(): Point {
    const copy = new Point([...this.coordinate]); // 深拷贝坐标
    return copy;
  }
  //0.3
  translate(dx: number, dy: number): void {
    if (this.coordinate.length >= 2) {
      this.coordinate[0] += dx;
      this.coordinate[1] += dy;
    }
  }
  
}
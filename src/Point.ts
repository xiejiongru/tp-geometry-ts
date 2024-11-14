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

} 

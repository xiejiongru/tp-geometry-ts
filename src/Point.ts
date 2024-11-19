import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import Geometry from "./Geometry";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";

export default class Point implements Geometry {
  private coordinate?: Coordinate;

  //0.1.2
  constructor(coordinate: Coordinate = []) {    
    this.coordinate = coordinate;
  }

  getType(): string {
      return "Point";
  }

  //0.2  
  isEmpty(): boolean {
    return !this.coordinate || this.coordinate.length === 0;
}

  //0.1.3
  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate && this.coordinate.length > 0 ? this.coordinate[0] : NaN;       // 这个写法更现代: return this.coordinate[0] ?? NaN;
}

  y(): number {
    return this.coordinate && this.coordinate.length > 1 ? this.coordinate[1] : NaN;
  }
//   判断坐标的存在性：
  // x() 方法只检查 coordinate[0]，因为 x 坐标只需要第一个值。
  // y() 方法检查 coordinate[1]，因为 y 坐标需要第二个值。

  
  //0.4
  clone(): Point {
    const copy = new Point([...this.coordinate]);
    return copy;
  }
  //0.3
  translate(dx: number, dy: number): void {
    if (this.coordinate.length >= 2) {
      this.coordinate[0] += dx;
      this.coordinate[1] += dy;
    }
  }
  
  getEnvelope(): Envelope {
      const builder = new EnvelopeBuilder();
      builder.insert(this.coordinate);
      return builder.build();
  }
  
  accept(visitor: GeometryVisitor) {
    return visitor.visitPoint(this);
  }
}
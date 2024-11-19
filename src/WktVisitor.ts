import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements GeometryVisitor {
  private buffer?: string;

  constructor(buffer?: string) {
    this.buffer = buffer;
  }

  visitPoint(point: Point): string {
    if (point.isEmpty()) {
      return "POINT EMPTY"; 
    } else {
      return "POINT (" + point.x() + " " + point.y() + ")";
    }
  }

  visitLineString(lineString: LineString): string {
    if (lineString.isEmpty()) {
      return "LINESTRING EMPTY";
    } else {
      const coordinates = [];
      for (let i = 0; i < lineString.getNumPoints(); i++) {
        const point = lineString.getPointN(i); // 使用 getPointN 获取每个点
        const coord = point.getCoordinate();
        coordinates.push(`${coord[0]} ${coord[1]}`);
      }
      return `LINESTRING (${coordinates.join(", ")})`;
    }
  }

  getResult(): string {
    return this.buffer!;
  }
}

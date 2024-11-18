import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements  GeometryVisitor {

    private buffer?: string;

    constructor(buffer?: string) {
      this.buffer = buffer;
    }
    
    visitPoint(point: Point) {
        if (point.isEmpty()) {
          return "POINT EMPTY";
        } else {
          return "POINT (" + point.x() + " " + point.y() + ")";
        }
    };
    
    visitLineString(lineString: LineString) {
        if (lineString.isEmpty()) {
          return "LINESTRING EMPTY";
        } else {
          const coordinates = lineString.getPoints()
          .map(point => `${point.x()} ${point.y()}`)
          .join(", ");
        return `LINESTRING(${coordinates})`;
      }
    };
    getResult(): string{
        return this.buffer!;
    };
}
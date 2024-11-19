import Point from "./Point";
import LineString from "./LineString";
import GeometryVisitor from "./GeometryVisitor";

export default class WktWriter implements GeometryVisitor {
  write(geometry: any): string {
    if (!geometry) {
      throw new Error("Geometry is null or undefined.");
    }

    if (typeof geometry.accept !== "function") {
      throw new Error("Geometry is null or undefined.");
    }

    return geometry.accept(this);  
  }

  visitPoint(point: Point): string {
    if (point.isEmpty()) {
      return "POINT EMPTY";
    }
    const coord = point.getCoordinate();
    return `POINT (${coord[0]} ${coord[1]})`;
  }

  visitLineString(lineString: LineString): string {
    if (lineString.isEmpty()) {
      return "LINESTRING EMPTY";
    }
    const coordinates = [];
    for (let i = 0; i < lineString.getNumPoints(); i++) {
      const point = lineString.getPointN(i);
      const coord = point.getCoordinate();
      coordinates.push(`${coord[0]} ${coord[1]}`);
    }
    return `LINESTRING (${coordinates.join(", ")})`;
  }
}

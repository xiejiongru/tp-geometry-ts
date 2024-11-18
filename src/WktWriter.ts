import Geometry from "./Geometry";
import Point  from "./Point";
import LineString from "./LineString";

export default class WktWriter {
    write(geometry:Geometry): string {
      if (geometry instanceof Point) {
        if (geometry.isEmpty()) {
          return "POINT EMPTY";
        } else {
          return "POINT (" + geometry.x() + " " + geometry.y() + ")";
        }
      }      
        
      if (geometry instanceof LineString) {
        if (geometry.isEmpty()) {
          return "LINESTRING EMPTY";
        } else {
          const coordinates = geometry.getPoints()
          .map(point => `${point.x()} ${point.y()}`)
          .join(", ");
        return `LINESTRING(${coordinates})`;
      }
    }else {
        throw new Error("geometry type not supported");
      }      
 }
}
  
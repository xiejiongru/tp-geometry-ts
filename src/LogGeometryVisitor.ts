import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class LogGeometryVisitor implements GeometryVisitor {
    visitPoint(point: Point) {
        if (point.isEmpty){
            console.log("Empty Point");
        }else{
        console.log("Point: " + point.getCoordinate());}
    }


    visitLineString(LineString: LineString) {
        if (LineString.isEmpty){
            console.log("Empty LineString");
        }else{}
        console.log("LineString: " + LineString.getPoints());}
    }
}
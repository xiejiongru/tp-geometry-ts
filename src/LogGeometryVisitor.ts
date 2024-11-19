import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";
export default class LogGeometryVisitor implements GeometryVisitor {
    private result: string = "";  

    visitPoint(point: Point) {
        if (point.isEmpty()) { 
            this.result += "Empty Point\n";
        } else {
            this.result += `Point(${point.getCoordinate().join(",")})\n`;
        }
    }

    visitLineString(lineString: LineString) {
        if (lineString.isEmpty()) { 
            this.result += "Empty LineString\n";
        } else {
            const pointsRepresentation = [];
            for (let i = 0; i < lineString.getNumPoints(); i++) {
                const point = lineString.getPointN(i);
                if (point) {  
                    pointsRepresentation.push(`Point(${point.getCoordinate().join(",")})`);
                }
            }
            this.result += `LineString(${pointsRepresentation.join(", ")})\n`;
        }
    }

    getResult(): string {
        return this.result;
    }
}



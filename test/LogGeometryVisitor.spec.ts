import "mocha";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";
import { expect } from "chai";

describe("test LogGeometryVisitor", () => {
    it("test LogGeometryVisitor", () => {
        const point = new Point([1, 2]);
        const lineString = new LineString([new Point([1, 2]), new Point([3, 4])]);
        const visitor = new LogGeometryVisitor();

        point.accept(visitor);
        lineString.accept(visitor);

        expect(visitor.getResult()).to.equal(
            "Point(1,2)\nLineString(Point(1,2), Point(3,4))\n"
        );
    });
});


import "mocha";
import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";
import { expect } from "chai";

describe("test WktVisitor", () => {

  it("test write", () => {
    const p1 = new Point([3, 4]);
    const p = new Point();
    
    const visitor = new WktVisitor();

    expect(visitor.visitPoint(p1)).to.equal("POINT (3 4)");
    expect(visitor.visitPoint(p)).to.equal("POINT EMPTY"); 

    const p3 = new Point([5, 6]);
    const l1 = new LineString([p1, p3]);
    const l = new LineString();

    expect(visitor.visitLineString(l1)).to.equal("LINESTRING (3 4, 5 6)"); 
    expect(visitor.visitLineString(l)).to.equal("LINESTRING EMPTY"); 
  });
});

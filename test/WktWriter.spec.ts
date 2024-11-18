import "mocha";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";
import { expect } from "chai";

describe("test WktWriter", () => {
    
    it("test write", () => {
        const p1 = new Point([3, 4]);
        const p = new Point();
        const writer = new WktWriter();
        
        expect(writer.write(p1)).to.equal("POINT (3 4)");
        expect(writer.write(p)).to.equal("POINT IS EMPTY");
        
        const p3 = new Point([3, 4]);
        const l1 = new LineString([p1, p3]);
        const l = new LineString();
        
        expect(writer.write(l1)).to.equal("LINESTRING (3 4, 3 4)");
        expect(writer.write(l)).to.equal("LINESTRING IS EMPTY");
        
    })
})
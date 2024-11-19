import "mocha";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";
import { expect } from "chai";

describe("WktWriter", () => {
  it("should throw error on unsupported geometry type", () => {
    const writer = new WktWriter();

    expect(() => writer.write({})).to.throw("Geometry is null or undefined.");
  });

  it("should return WKT for Point", () => {
    const p1 = new Point([3, 4]);
    const writer = new WktWriter();
    expect(writer.write(p1)).to.equal("POINT (3 4)");
  });

  it("should return WKT for LineString", () => {
    const p1 = new Point([3, 4]);
    const p2 = new Point([5, 6]);
    const lineString = new LineString([p1, p2]);
    const writer = new WktWriter();
    expect(writer.write(lineString)).to.equal("LINESTRING (3 4, 5 6)");
  });
});

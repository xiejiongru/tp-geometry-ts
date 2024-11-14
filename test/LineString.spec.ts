import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LineString", () => {

    it("test default constructor", () => {
        const l = new LineString();
        expect(l.getNumPoints()).to.equal(0);
    });

    it("test constructor with points", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([7.0, 9.0]);
        const l = new LineString([p1, p2]);
        
    // 0.4 测试 clone() 方法
    const lCopy = l.clone();  // 不需要传递参数
    lCopy.translate(1, 1); // 应用平移操作到 clone 的副本

    expect(l.getPointN(0)).to.deep.equal(p1);
    expect(l.getPointN(1)).to.deep.equal(p2);

    expect(l.getPointN(0)).to.deep.equal(p1); // 确认原始 LineString 不变
    expect(l.getPointN(1)).to.deep.equal(p2);

    // 确认副本被平移
    expect(lCopy.getPointN(0)).to.deep.equal(new Point([4.0, 5.0]));
    expect(lCopy.getPointN(1)).to.deep.equal(new Point([8.0, 10.0]));

    expect(l.isEmpty()).to.equal(false);
    expect(l.getType()).to.equal("LineString");
    expect(l.getNumPoints()).to.equal(2);
    });

    it("test out-of-bounds getPointN", () => {
        const p1 = new Point([3.0, 4.0]);
        const l = new LineString([p1]);

        // 当索引超出范围时，getPointN 应该返回 undefined
        expect(l.getPointN(1)).to.equal(undefined);
    });

});

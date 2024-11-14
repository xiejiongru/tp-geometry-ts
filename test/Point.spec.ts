// 导入 Mocha 测试框架
import "mocha";
// 从 Chai 库中导入 expect 断言函数，用于进行各种断言操作
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test Point", () => {

    // 测试无参数构造函数的情况
    it("test default constructor", () => {
        // 创建一个没有传入坐标的 Point 实例
        const p = new Point();
        
        // 断言 getCoordinate() 返回 undefined，因为没有传入坐标
        expect(p.getCoordinate()).to.equal(undefined);
        console.log("Truc :")

        // 断言 x() 方法返回的值为 NaN
        expect(Number.isNaN(p.x()));
        
        // 断言 y() 方法返回的值为 NaN
        expect(Number.isNaN(p.y()));
    });

    // 测试带坐标参数的构造函数
    it("test constructor with coordinates", () => {
        // 创建一个传入坐标 [3.0, 4.0] 的 Point 实例
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([7.0, 9.0]);

        expect(p1.getType()).to.equal("Point");

        // 断言 getCoordinate() 返回的坐标与 [3.0, 4.0] 深度相等
        expect(p1.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p2.getCoordinate()).to.deep.equal([7.0, 9.0]);

        // 断言 x() 方法返回的值为 3.0
        expect(p1.x()).to.equal(3.0);
        expect(p2.x()).to.equal(7.0);
        
        // 断言 y() 方法返回的值为 4.0
        expect(p1.y()).to.equal(4.0);
        expect(p2.y()).to.equal(9.0);
    });
});

describe("test LineString", () => {

    it("test default constructor", () => {
        const l = new LineString();
        expect(l.getNumPoints()).to.equal(0);
    });

    it("test constructor with points", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([7.0, 9.0]);
        const l = new LineString([p1, p2]);

        expect(l.getType()).to.equal("LineString");

        expect(l.getNumPoints()).to.equal(2);

        expect(l.getPointN(0)).to.deep.equal(p1);
        expect(l.getPointN(1)).to.deep.equal(p2);
    });

    it("test out-of-bounds getPointN", () => {
        const p1 = new Point([3.0, 4.0]);
        const l = new LineString([p1]);

        // 当索引超出范围时，getPointN 应该返回 undefined
        expect(l.getPointN(1)).to.equal(undefined);
    });
});

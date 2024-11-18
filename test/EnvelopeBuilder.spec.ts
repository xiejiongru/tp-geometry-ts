import "mocha";
import { expect } from "chai";
import Coordinate from "../src/Coordinate";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test Enveloppe", () => {
    //1.1. test default constructor
    it("test default constructor", () => {
        const envA = new Envelope();    //新建变量不会影响到后续的测试用例,减少副作用 同时是facade的一种案例
        expect(envA.isEmpty()).to.equal(true);

        // 1.2. test constructor with two coordinates
        const coordA = [0, 0];
        const coordB = [5, 5];
        const envB = new Envelope(coordA, coordB);
        expect(envB.isEmpty()).to.equal(false);
        
        // 1.3. get X/Y min/max
        expect(envB.getXmin()).to.equal(0);
        expect(envB.getXmax()).to.equal(5);
        expect(envB.getYmin()).to.equal(0);
        expect(envB.getYmax()).to.equal(5);

        // 1.4. toString
        expect(envB.toString()).to.equal("bottomLeft : 0 0 | topRight : 5 5");
    });
    
    // 2. test EnvelopeBuilder
    it("test builder", () => {
        const builder1 = new EnvelopeBuilder();
        //2.1. insert 
        //2.1.1 builder1测试多点情况
        builder1.insert([0,1]);
        builder1.insert([2,0]);
        builder1.insert([1,3]);

        const result = builder1.build();

        expect(result.getXmin()).to.equal(0);
        expect(result.getXmax()).to.equal(2);
        expect(result.getYmin()).to.equal(0);
        expect(result.getYmax()).to.equal(3);

        //2.1.2 builder2测试非规则点
        const builder2 = new EnvelopeBuilder();
        builder2.insert([2,1]);  //右下
        builder2.insert([1,3]);  //左上

        const result2 = builder2.build();

        expect(result2.getXmin()).to.equal(1);
        expect(result2.getXmax()).to.equal(2);
        expect(result2.getYmin()).to.equal(1);
        expect(result2.getYmax()).to.equal(3);

    })
})
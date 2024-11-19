
import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import Point from "./Point";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";

export default class LineString implements Geometry {
    private points?: Array<Point>;
  
    constructor(points?: Array<Point>) {
      this.points = points || []; ;
    }

    //0.2  
    isEmpty(): boolean {
      return this.points.length === 0;
    }
    getType(): string {
        return "LineString";
    }

    //3
    getNumPoints(): number {
        // 如果 points 存在，返回其长度；否则返回 0
        return this.points ? this.points.length : 0;
    }
    
    //4 获取指定索引的点
    getPointN(n: number): Point | undefined {
      // 确保 points 存在并且索引 n 在有效范围内，否则返回 undefined
      return this.points && n >= 0 && n < this.points.length ? this.points[n] : undefined;
    }
  
    //0.4
    clone(): LineString {
    const copy = new LineString([...this.points]); // 深拷贝坐标
    return copy;
    }
    translate(dx: number, dy: number) {
      this.points.forEach(Point => Point.translate(dx, dy)) 
    }
    
    getEnvelope(): Envelope {
        const builder = new EnvelopeBuilder();
        this.points.forEach(point => builder.insert(point.getCoordinate()));
        return builder.build();
    }
    
    accept(visitor: GeometryVisitor) {
      return visitor.visitLineString(this);
    }
    
  } 
import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
  private Xmin: number;
  private Xmax: number;
  private Ymin: number;
  private Ymax: number;

  constructor() {
      this.Xmin = Number.POSITIVE_INFINITY;   //常用于初始化最小值变量，确保在第一次比较时任何有限数值都会小于它。 所以前面就不用画大力气写for
      this.Xmax = Number.NEGATIVE_INFINITY;
      this.Ymin = Number.POSITIVE_INFINITY;
      this.Ymax = Number.NEGATIVE_INFINITY;
    }
    insert(coordinate: Coordinate): void {    //参数:类型
        this.Xmin = this.Xmin < coordinate[0]? this.Xmin : coordinate[0];   //接口或类中，使用 ? 表示某个属性是可选的,意味着该属性或参数可以存在也可以不存在，不会导致类型错误。
        this.Xmax = this.Xmax > coordinate[0]? this.Xmax : coordinate[0];
        this.Ymin = this.Ymin < coordinate[1]? this.Ymin : coordinate[1];
        this.Ymax = this.Ymax > coordinate[1]? this.Ymax : coordinate[1];
    }

    build(): Envelope {
        const bottomLeft = [this.Xmin, this.Ymin];
        const topRight = [this.Xmax, this.Ymax];
        return new Envelope(bottomLeft, topRight);
    }
}

// Envelope 是静态的，负责表示包络框的结构，没有处理具体的构建逻辑。        本身不会做复杂的逻辑判断，它只是用来表示数据
// EnvelopeBuilder 用于动态构建复杂的对象（包络框），通过插入坐标和更新边界，最终返回一个 Envelope 实例。
// Builder 模式的关键在于通过一系列小条件逐步构建复杂的对象
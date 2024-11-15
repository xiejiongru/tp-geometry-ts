import Coordinate from "./Coordinate";

export default class Envelope {
  // private bottomLeft: Coordinate;
  // private topRight: Coordinate;

  // constructor(bottomLeft?: Coordinate, topRight?: Coordinate ) {
  //   this.bottomLeft = bottomLeft || [NaN, NaN];
  //   this.topRight = topRight || [NaN, NaN]; 
    
      // 高效定义法
    constructor(
      private bottomLeft: Coordinate = [NaN, NaN],
      private topRight: Coordinate = [NaN, NaN]
    ) {}
  
    isEmpty(): boolean {
      return  Number.isNaN(this.bottomLeft[0]) && Number.isNaN(this.bottomLeft[1])
                && Number.isNaN(this.topRight[0]) && Number.isNaN(this.topRight[1]);
    }
    getXmin(): number {
      // 通过将检查逻辑放入 constructor，可以在对象创建时立即验证数据的正确性，避免创建不合法的实例。
        // if (this.bottomLeft[0] < this.topRight[0]) {
        //   return this.bottomLeft[0];
        // } else {
        //   console.error("Error: bottomLeft[0] is not less than topRight[0]");
        //   return NaN; // 返回一个表示错误的值
        // }
      return this.bottomLeft[0];
    }
    
    getYmin(): number {
      return this.bottomLeft[1];
    }
    
    getXmax(): number {
      return this.topRight[0];
      }
    
      getYmax(): number {
      return this.topRight[1];
      }
      
    toString(): string {
      return `Envelope: ${this.bottomLeft.toString()} ${this.topRight.toString()}`;
      //${expression} 来插入表达式的值
      //python[f-string]   print(f"My name is {name} and I am {age} years old.")
    }
      } 
      
export default class Interval {
    private min: number;
    private max: number;
  
    constructor(min: number, max: number) {
      if (min >= max) {
        throw new Error("Invalid interval: min must be less than max");
      }
      this.min = min;
      this.max = max;
    }
  
    getMin(): number {
      return this.min;
    }
  
    getMax(): number {
      return this.max;
    }
  
    toString(): string {
      return `[${this.min}, ${this.max}]`;
    }
  }
  
import Coordinate from "./Coordinate";

export default class Point {
  private coordinates?: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinates = coordinate ;
  }

  x(): number {
    return this.coordinates ? this.coordinates[0] : Number.NaN ;
  }

  y(): number {
    return this.coordinates ? this.coordinates[1] : Number.NaN ;
  }

}

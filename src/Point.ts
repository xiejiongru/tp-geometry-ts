import Coordinate from "./Coordinate";

export default class Point {
  private coordinates: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinates = coordinate || [];
  }

  x(): number {
    return this.coordinates.length < 1 ? Number.NaN : this.coordinates[0];
  }

  y(): number {
    return this.coordinates.length < 2 ? Number.NaN : this.coordinates[1];
  }

}

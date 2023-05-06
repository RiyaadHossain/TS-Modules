/* ========================= 4.8 Polymorphism =========================  */
/* One class share the same method but works differently in other sub-classes */

class Area {
  getArea(): number {
    return 0;
  }
}

// The 'getArea' method will work diffently in 'Circle' class 
class Circle extends Area {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// The 'getArea' method will work diffently in 'Rectangle' class
class Rectangle extends Area {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

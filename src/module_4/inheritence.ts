/* ========================= 4.3 Inheritence =========================  */
// Parent class
class Person {
  name: string;
  age: number;
  profession: string;
  constructor(name: string, age: number, profession: string) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  makeSleep(hours: number): string {
    return `${this.name} sleeps ${hours}`;
  }
}

// Child class
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, profession: string, grade: string) {
    super(name, age, profession); // Common properties
    this.grade = grade;
  }

  studyNow(): string {
    return `${this.name}! Study now`;
  }
}

// Child class
class Teacher extends Person {
  designation: string;
  constructor(
    name: string,
    age: number,
    profession: string,
    designation: string
  ) {
    super(name, age, profession); // Common properties
    this.designation = designation;
  }

  takeClass(subject: string): string {
    return `${this.name}, take class for ${subject} subject`;
  }
}

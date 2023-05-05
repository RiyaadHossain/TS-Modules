/* ========================= 4.2 Class, Object , Parameter Properties =========================  */
class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    return `${this.name} says ${this.sound}`;
  }
}

const cat = new Animal("Persian", "cat", "mew mew"); // Creating Instance
console.log(cat.makeSound());

// To reduce repeatative task use parameter properties
class Animal2 {
  constructor(
    public name: string, // Use 'public' keyword 
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    return `${this.name} says ${this.sound}`;
  }
}

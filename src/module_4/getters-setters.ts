/* ========================= 4.6 Getters and Setters in Typescript =========================  */
class School {
  name: string;
  totalStudent: number;
  private _budget: number;

  constructor(name: string, totalStudent: number, _budget: number) {
    this.name = name;
    this.totalStudent = totalStudent;
    this._budget = _budget;
  }

  get budget(): number {
    return this.budget;
  }

  set addBudget(money: number) {
    this._budget += money;
  }
}

const nationalSchool = new School("national school", 2000, 50000);
const totalBudget = nationalSchool.budget; // Can access budget without calling a method
nationalSchool.addBudget = 300; // Budget will be change

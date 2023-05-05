/* ========================= 4.5 Access Modifiers: Public, Private, Protected =========================  */
class BankAccount {
  readonly id: number;
  name: string;
  protected _balance: number; // Can be accessed in sub-classes
  private _bankSecret: number; // Only can be accessed in the parent class

  constructor(id: number, name: string, _balance: number, _bankSecret: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
    this._bankSecret = _bankSecret;
  }

  getBalance(): string {
    return `Current Balance is ${this._balance}`;
  }

  deposit(balance: number) {
    this._balance += balance;
  }

  getSecret(): string {
    return `Current Balance is ${this._bankSecret}`;
  }
}

class StudentBankAccount extends BankAccount {
  category: string;

  constructor(
    id: number,
    name: string,
    _balance: number,
    _bankSecret: number,
    category: string
  ) {
    super(id, name, _balance, _bankSecret);
    this.category = category;
  }

  getBal(): string {
    return `${this._balance}`; // 'protected' property can be accessed in sub-class
  }

  /* 
    getSec(): void {
      return `${this._bankSecret}` --> 'private' property can't be accessed in sub-class
    } 
  */
}

const stAccount1 = new StudentBankAccount(12, "Riyad", 50, 2343, "st");
// stAccount1._bankSecret --> Property '_bankSecret' is private and only accessible within class 'BankAccount'.
// stAccount1._balance --> Property '_balance' is protected and only accessible within class 'BankAccount' and its subclasses.

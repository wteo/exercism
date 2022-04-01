//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  
  constructor() {
    this.status;
    this.Balance;
  }

  open() {
    if (this.status) throw new ValueError;
    else {
      this.status = true;
      this.Balance = 0; 
    }
  }

  close() {
    if (!this.status) throw new ValueError;
    this.status = false;
  }

  get balance() {
    if (!this.status) throw new ValueError;
    return this.Balance;
  }

  deposit(value) {
    if (!this.status || value < 0) throw new ValueError;
    this.Balance = this.Balance + value;
    return this.Balance;
  }

  withdraw(value) {
    if (!this.status || value > this.Balance || value < 0) throw new ValueError;
    this.Balance = this.Balance - value;
    return this.Balance;
  }
  
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
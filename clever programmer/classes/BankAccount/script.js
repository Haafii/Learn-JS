const amountInput = document.getElementById("amount-input");
const balanceDiv = document.getElementById("balance");
const statusDiv = document.getElementById("status");
const depositButton = document.getElementById("deposit-button");
const withdrawButton = document.getElementById("withdraw-button");

// Current Balance
class Bank {
  constructor(startingAmount) {
    this.balance = startingAmount;
    balanceDiv.innerText = `Balance : ${this.getBalance()}`
    const status = ''
  }
  deposit(amount) {
    this.balance += amount;
    this.status = "Deposited"
  }
  withdraw(amount) {
    if (this.balance < amount) {
      this.status = "can't withdraw"
      return
    }
      this.balance -= amount;
      this.status  = "Withdrew"
    
  }
  getBalance() {
    const currentBalance = this.balance;
    return currentBalance ;
  }
}
const person = new Bank(100);

depositButton.onclick = () => {
  person.deposit(Number(amountInput.value))
  statusDiv.innerText = ` ${person.status} $${amountInput.value}`
  balanceDiv.innerText = `Balance : ${person.getBalance()}`
}

withdrawButton.onclick = () => {
  person.withdraw(Number(amountInput.value))
  statusDiv.innerText = ` ${person.status} $${amountInput.value}`
  balanceDiv.innerText = `Balance :${person.getBalance()}`
}

// console.log(person.getBalance());
// person.deposit(500)
// console.log(person.getBalance());
// person.withdraw(200)
// console.log(person.getBalance());
// person.withdraw(500)
// console.log(person.getBalance());

class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            return;
        }
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.#balance) {
            return;
        }
        this.#balance -= amount;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.balance);
account1.deposit(500);
console.log(account1.balance);
account1.withdraw(200);
console.log(account1.balance);

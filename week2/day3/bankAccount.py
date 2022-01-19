class BankAccount:
    def __init__(self, accountNumber, balance = 0):
        self.accountNumber = accountNumber
        self.balance = balance
    def deposit(self,amount):
        self.balance = self.balance + amount
    def withdraw(self,amount):
        self.balance = self.balance - amount
    def transfer_funds (self, otherAccount, amount):
        self.balance = self.balance - amount
        otherAccount.balance = otherAccount.balance + amount
    def print_balance (self):
        print(f"Your account balance is ${self.balance}.")


rayAccount = BankAccount (1234)
bobAccount = BankAccount (3456)
print(vars(rayAccount))
rayAccount.deposit(1000)
print(vars(rayAccount))
rayAccount.withdraw(100)
print(vars(rayAccount))
rayAccount.transfer_funds(bobAccount, 100)
print(vars(rayAccount))
print(vars(bobAccount))
rayAccount.print_balance()
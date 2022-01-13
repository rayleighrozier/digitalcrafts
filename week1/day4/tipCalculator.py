def tenPercent():
    tip = billAmount *0.1
    return print ("Your tip would be", tip)

def fifteenPercent():
    tip = billAmount *0.15
    return print("Your tip would be", tip)

def twentyPercent():
    tip = billAmount *0.2
    return print("Your tip would be", tip)
    
def calculateTip():
    if tipAmount == "A":
        tenPercent()
    elif tipAmount == "B":
        fifteenPercent()
    elif tipAmount == "C":
        twentyPercent()

billAmount = int(input ("How much is your bill?"))
tipAmount = input("""
    How much would you like to tip?
    A. 10%
    B. 15%
    C. 20%
    """)

while tipAmount != "A" and tipAmount != "B" and tipAmount != "C":
    print ("Choose A B or C")
    tipAmount = input("""
    How much would you like to tip?
    A. 10%
    B. 15%
    C. 20%
    """)

calculateTip()
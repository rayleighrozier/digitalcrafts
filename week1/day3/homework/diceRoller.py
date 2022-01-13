import random
print ("Let's roll a die!")
diceSides = int (input ("How many sides should it have (2-20)?"))
while diceSides < 2 or diceSides>20 :
    diceSides = int (input ("Try again! How many sides should it have (2-20)?"))
print ("Rolling...")
print("It's a" , random.randint(1,diceSides))



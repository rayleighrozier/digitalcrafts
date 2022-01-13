#Write an app which asks users for the input and then prints the factorial for that number.
# 4! = 4*3*2*1

givenNumber = int(input("What number do you want a factorial for? "))

countdownList = []
for x in range(givenNumber):
   countdownList.append(givenNumber)
   givenNumber = givenNumber -1 

factorial = 1
for number in countdownList:
    factorial = factorial * number

print("The factorial is: ", factorial)

   
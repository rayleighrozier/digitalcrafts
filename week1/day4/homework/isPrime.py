# Take input from the user and find out if that number is prime or not.

print ("***** Find out if your number is prime! ****")

testNumber = int(input ("What is your number? "))

if testNumber > 2:
    for i in range (2,testNumber):
        if (testNumber % i) == 0:
            factor = True
            break
        else:
            factor = False
    if factor:
        print (testNumber, "is NOT a prime number")
    else:
        print (testNumber, "is a prime number!")
else:
    print (testNumber, "is a prime number!")



#Create an app which detects if the input word is a palindrome or not
print("Is this word a palindrome?")
testWord = input("Enter your word: ")

def reverseWord(word):
    reversed = ""
    for letter in word:
            reversed =  letter + reversed 
    return reversed

testWordReversed = reverseWord(testWord)

if testWord == testWordReversed:
    print ("This is a palindrome!")
else:
    print ("This is not a palindrome!")

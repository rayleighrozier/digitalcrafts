### FREQUENCY COUNTER ###
    # Uses an object {} to collect values or the frequency of the values 
    # Useful when you have multiple pieces of data and you need to compare them
    # Can help you avoid nested loops when dealing with arrays/strings

 ### EXAMPLE  1 ###
    # Write a function called same which accepts two arrays. 
    # The function should return true if every value in the array has a corresponding 
    # value squared in the second array. The frequency of the values must be the same.

arr1 = [1,2,3,2]
arr2 = [9,1,4,4]
#should return true

def square (arr1, arr2):
    if len(arr1) != len(arr2): #if length of arrays aren't the same, it's already false
        return False
    frequencyCounter1 = {} #create an empty object for each array
    frequencyCounter2 = {}
    for x in arr1: #for every value in arr1
        if x not in frequencyCounter1: #add key to FC if it's not already there
            frequencyCounter1[x] = 1
        else:
            frequencyCounter1[x] = frequencyCounter1[x] + 1 #or just increase the value of existing key
    for x in arr2:
         if x not in frequencyCounter2: #do the same thing for second array 
            frequencyCounter2[x] = 1
         else:
            frequencyCounter2[x] = frequencyCounter2[x] + 1
    for key in frequencyCounter1: #for every key in FC1
        if (key **2) not in frequencyCounter2: #if the key squared is not in FC2, it's false
            return False
        if frequencyCounter2 [key**2] != frequencyCounter1[key]: # if the number of square keys is not the same as number of regular keys, it's false 
            return False
    return True
square(arr1, arr2)

#This solution is O(n) 

### EXAMPLE 2 ###

#Given two strings, check if the second string is an anagram of the first. 

word1 = "cas"
word2 = "sca"

def validAnagram(word1, word2):
    if len(word1) != len(word2):
        return False
    freqCounter1 = {}
    freqCounter2 = {}
    for char in word1:
        if char in freqCounter1:
            freqCounter1[char] = freqCounter1[char] + 1
        else:
            freqCounter1[char] = 1
    for char in word2:
        if char in freqCounter2:
            freqCounter2[char] = freqCounter2[char] + 1
        else:
            freqCounter2[char] = 1
    for key in freqCounter1:
        if key not in freqCounter2:
            return False
        if freqCounter1[key] != freqCounter2[key]:
            return False
    return True
    

validAnagram (word1, word2)
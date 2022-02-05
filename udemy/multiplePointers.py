### MULTIPLE POINTERS ###
# Sets a left and right pointer and moves them until a condition is met
# Works if the array/list is SORTED
# Good for finding pairs/avoiding looping through a whole list multiple times

### EXAMPLE 1
# Write a function which accepts a sorted array of integers. 
# The function should find the first pair where the sum is zero. 
# Return an array which includes both values that sum to zero 
# or undefined if a pair does not exist.

from itertools import count


def sumZero (arr):
    left= 0
    right= len(arr) -1

    while (left < right):
        sum = arr[left] +arr[right]
        if sum == 0:
            return [arr[left], arr[right]]
        elif sum > 0:
            right = right -1
        else:
            left = left + 1

sumZero([-4,-3,-2,-1,0,1,2,3,10]) #returns [-3,3]
sumZero([-3,-2,-1,0,1,4,5]) #returns [-1,1]
sumZero([1,2,3]) #returns undefined

### EXAMPLE 2 
#Write a function which accepts a sorted array, 
#and counts the unique values in the array.
#there can be negative numbers in the array, 
# but the array will always be sorted.

def countUniqueValues (arr):
    if len(arr) >0: #if there are items in the array
        left=0
        right=1 
        while right < len(arr): #while the right pointer is inside the array
            if arr[left] != arr[right]: #if left number is not same as right number
                left=left+1 #move left pointer over one
                arr[left] = arr[right] #change value at left pointer to right number
            right= right+1 #move the right pointer over one
        print(left+1) #answer is wherever the left index ends +1  (to make up for 0 start)
    else:
        print(0) #no items? print 0


countUniqueValues([1,1,2,2,3,3,3])
countUniqueValues([])
countUniqueValues([-7,-7, 1,1,4,4,4,4,4,4,4,4,5])
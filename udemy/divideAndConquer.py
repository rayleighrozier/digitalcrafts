### DIVIDE AND CONQUER ###

#Split data into smaller chunks and repeat a process with a subset of data
#Can help you avoid sorting through an entire array/list
#works if list is SORTED! 

# EXAMPLE 1 
# Given a sorted array of integers, write a function that
# accepts a value and returns the index of that value in the array.
#If the value is not found, return -1

import math
def search (arr, num):
    min = 0;
    max = len(arr) -1
    while min <= max:
        middle = math.floor((min+max)/2)
        if arr[middle] < num:
            min = middle+1
        elif arr[middle]>num:
            max=middle-1
        else:
            return middle

search([1,2,3,4,5,6], 4) #return 3
search([1,2,3,4,5,6], 8) #return -1

### SLIDING WINDOW ###
# Create a window that increases or closes based on condition
# Useful when you are looking for data that is continuous in some way
# Used on an array or string
# array is not sorted

# EXAMPLE 1
# Write a function which accepts an array of integers and 
# a number called n. 
# The function should calculate the maximum sum of n consecutive elements 
# in the array.

def maxSubArraySum(arr, num):
    if num > len (arr): #if there aren't enough numbers return nothing
        return None
    maxSum = 0
    tempSum = 0
    i=0
    while i < num: #get sum of the first n numbers
        maxSum = maxSum+ arr[i]
        i = i+1
    tempSum = maxSum #set temp sum to your first sum
    while i < len(arr): #until we get to the end of the array
        tempSum = tempSum - arr[i-num] + arr [i] #remove first value and add next value to the end
        maxSum = max(maxSum, tempSum) #compare new sum with the biggest sum you have and keep the maximum
        i = i+1 #keep scooting
    print(maxSum)

maxSubArraySum([-1,2,6,9,1,8,55,10,-7],3) #returns 73





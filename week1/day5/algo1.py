# Given a list, write a Python program to swap first and last element of the list.
# Examples: 
# Input : [12, 35, 9, 56, 24]
# Output : [24, 35, 9, 56, 12]
# Input : [1, 2, 3]
# Output : [3, 2, 1]


list1 = [12, 35, 9, 56, 24]
list2 =[1, 2, 3]

def swapValues (list):
    firstValue =  list[0]
    lastValue = list[-1]
    del list[0]
    del list[-1]
    list.insert(0,lastValue)
    list.append(firstValue)
    print(list)

swapValues(list1)
swapValues(list2)



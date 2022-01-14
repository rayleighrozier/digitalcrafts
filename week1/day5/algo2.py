#Find the largest and 2nd largest elements in a list
#and also find the smallest and second smallest elements in a list

list1 = [12, 45, 2, 41, 31, 10, 8, 6, 4]
list2 =[22, 85, 62, 40, 55, 12, 39, 2, 43]

def findElements (list):
    list.sort()
    biggestElement = list [-1]
    smallestElement = list[0]
    list = list [1:-2]
    secondBiggest = list [-1]
    secondSmallest = list[0]

    print ("Your biggest element is: ", biggestElement)
    print ("Your smallest element is:", smallestElement)
    print ("Your second biggest element is", secondBiggest)
    print ("Your second smallest element is:", secondSmallest)
findElements(list2)
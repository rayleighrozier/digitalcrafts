#Create a list of numbers, print each number in the list that is greater than zero.

joeList = [5,10,20,22,6,23,9,0,1]
rayList = [-5,10,-20,22,-6,23,-9,0,-1]

def findPositives (list):
    for num in list:
        if num >= 0:
            print (num)
    
print("Joe List:")
findPositives(joeList)
print("Rayleigh List:")
findPositives (rayList)
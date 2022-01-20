#CLASSES
class GroceryList:
    def __init__(self, store, items = []):
        self.store = store
        self.items = items
    
class GroceryItem:
    def __init__(self, name, quantity):
        self.name = name
        self.quantity = quantity

def printAllLists():
    if len(allLists) >0:
        print ("""
    =================
        """)
        for list in allLists:
            print(f"""
    Grocery List For {list.store.capitalize()} :
         """)
            for item in list.items:
                print(f"""
    {item.name} ({item.quantity})
                 """) 
        print ("""
    =================
        """)
    else:
        print("No lists yet! Try making one.")

#working
def addNewList():
    whichStore = input("Which store would you like to make a grocery list for? ")
    newStore = GroceryList(whichStore)
    allLists.append(newStore)   
    print(f"""
    New grocery list created for {whichStore}.
    =================
    """)


#VARIABLES
allLists = []

#PROGRAM STARTS TO RUN
while True:
    userInput = input("""
    GROCERY LIST APP
    =================
    1. Look at my lists
    2. Make a new list
    3. Add item to a list
    4. Delete item from a list
    5. Quit
    =================
    What do you want to do?
    """)
    try:
        userInput = int(userInput)
        if userInput == 1:
            printAllLists()
        elif userInput == 2:
            addNewList()
        elif userInput == 3:
            print ("""
    =================
        """)
            counter = 1
            for list in allLists:
                print(f""" 
            {counter}. {list.store.capitalize()}
                """)
                counter = counter + 1
            userInput3 = int(input ("Which grocery list do you want to update?"))
            currentList = allLists[userInput3 - 1]
            print ("""
    =================
        """)
            print(f"""
    Grocery List For {currentList.store.capitalize()} :
         """)
            for item in currentList.items:
                print(f"""
    {item.name} ({item.quantity})
                 """) 
            print ("""
    =================
        """)
            itemName = input("What would you like to add to the list? ")
            itemQuantity = input("How many do you need? ") 
            newItem = GroceryItem (itemName, itemQuantity)
            currentList.items = currentList.items + [newItem]
            print ("""
    =================
        """)
            print(f""" 
    Updated Grocery List For {currentList.store.capitalize()} :
            """)
            for item in currentList.items:
                print(f"""
    {item.name} ({item.quantity})
                 """) 
            print ("""
    =================
        """)
        elif userInput == 4:
            print ("""
    =================
        """)
            counter = 1
            for list in allLists:
                print(f""" 
            {counter}. {list.store.capitalize()}
                """)
                counter = counter + 1
            userInput4 = int(input ("Which grocery list do you want to edit?"))
            currentList = allLists[userInput4 - 1]
            print ("""
    =================
        """)
            print(f"""
    Grocery List For {currentList.store.capitalize()} :
         """)
            counter = 1
            for item in currentList.items:
                print(f"""
    {counter}. {item.name} ({item.quantity})
                 """)
                counter = counter + 1 
            print ("""
    =================
        """)
            itemName = int(input("Which item would you like to delete?"))
            del(currentList.items[itemName - 1])
            print(currentList.items)
            

        elif userInput == 5:
            print("Bye!")
            break
        else:
            print("Oops! Try again.")
    except:
         print ("Oops! Try again.")
    

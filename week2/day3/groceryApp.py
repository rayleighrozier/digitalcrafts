#CLASSES
class GroceryList:
    def __init__(self, store, items = []):
        self.store = store
        self.items = items
    
class GroceryItem:
    def __init__(self, name, quantity, price = ""):
        self.name = name
        self.quantity = quantity
        self.price = price

#FUNCTIONS
def printAllLists():
    if len(allLists) >0:
        print ("""
    =================
        """)
        for list in allLists:
            print(f"""
    Grocery List For {list.store.capitalize()} :
         """)
            counter = 1
            for item in list.items:
                print(f"""
    {counter}.{item.name} ({item.quantity})
                 """) 
                counter = counter + 1
        print ("""
    =================
        """)
    else:
        print("No lists yet! Try making one.")

def printListMenu(allLists):
    print ("""
    =================
        """)
    print ("""
    Grocery Lists:
        """)
    counter = 1
    for list in allLists:
        print(f""" 
    {counter}. {list.store.capitalize()}
            """)
        counter = counter + 1
    print ("""
    =================
        """)

def printCurrentList(currentList):
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

def addNewList():
    whichStore = input("Enter the name of the grocery store: ")
    newStore = GroceryList(whichStore)
    allLists.append(newStore)   
    print(f"""
    New grocery list created for {whichStore}.
    =================
    """)

def addNewItem(currentList):
    itemName = input("Enter the name of the item: ")
    itemQuantity = input("How many do you need? ") 
    newItem = GroceryItem (itemName, itemQuantity)
    currentList.items = currentList.items + [newItem]

def deleteItem(currentList):
    itemName = int(input("Which item would you like to delete (choose a number) ?"))
    del(currentList.items[itemName - 1])

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
    What do you want to do (1-5)?
    """)
    try:
        userInput = int(userInput)
        if userInput == 1:
            printAllLists()
        elif userInput == 2:
            addNewList()
        elif userInput == 3:
            printListMenu(allLists)
            userInput3 = int(input ("Which grocery list do you want to update (choose a number)?"))
            currentList = allLists[userInput3 - 1]
            printCurrentList(currentList)
            addNewItem(currentList)
            printCurrentList(currentList)
        elif userInput == 4:
            printListMenu(allLists)
            userInput4 = int(input ("Which grocery list do you want to update (choose a number)?"))
            currentList = allLists[userInput4 - 1]
            printCurrentList(currentList)
            deleteItem(currentList)
            printCurrentList(currentList)
        elif userInput == 5:
            print("Bye!")
            break
        else:
            print("Oops! Try again.")
    except:
         print ("Oops! Try again.")
    

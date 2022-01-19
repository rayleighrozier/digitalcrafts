class GroceryList:
    def __init__(self, store, items = []):
        self.store = store
        self.items = items

    def displayList(self):
        print("hi")

def printAllLists():
    print(allLists)
    for list in allLists:
        print(f"""
        Grocery List For  {list.store}
        
        {list.items}
        """)
        
def addNewList():
    whichStore = input("Which store would you like to make a grocery list for?")
    newStore = GroceryList(whichStore)
    allLists.append(newStore)

allLists = []

while True:
    userInput = input("""
    GROCERY APP
    =================
    1. Look at my grocery lists
    2. Add new grocery list
    3. Edit a grocery list
    4. Quit
    ================
    What do you want to do?
    """)
    try:
        userInput = int(userInput)
        if userInput == 1:
            printAllLists()
        elif userInput == 2:
            addNewList()
            #will create an object using the class then add it to the allLists []
        elif userInput == 3:
            print ("you chose 3")
        elif userInput == 4:
            print("Bye!")
            break
        else:
            print("Oops! Pick a number 1-4.")
    except:
         print ("Oops! Pick a number 1-4.")
    
    # store = input("What store would you like to make a shopping list for?")

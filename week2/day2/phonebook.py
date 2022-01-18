phoneBook = [{"name":"bob" , "phoneNumber":"123456"},{"name":"sally" , "phoneNumber":"123456"}]

def lookUpNumber():
    if len(phoneBook) > 0:
        userInput= input("Whose phone number would you like to find? ").lower()
        isItInPhoneBook = [entry for entry in phoneBook if entry["name"] == userInput]
        if len(isItInPhoneBook)>0:
            print(f"Found entry for {userInput.capitalize()} : {isItInPhoneBook[0]['phoneNumber']}")
        else:
            print("That name is not in the phone book!")
            listAllEntries()
    else:
        print ("No entries in phone book")

def addEntry():
    name = input("What is the name? ").lower()
    phoneNumber = input ("What is the phone number? ")
    newUser = {"name":name , "phoneNumber":phoneNumber}
    phoneBook.append(newUser)
    print(f"Entry stored for {name.capitalize()}.")
    listAllEntries()

def deleteNumber():
    if len(phoneBook) > 0:
        listAllEntries()
        nameToDelete = input ("Which user would you like to delete? ").lower()
        isItInPhoneBook = [entry for entry in phoneBook if entry["name"] == nameToDelete]
        #essentially this is making a list called "Is It In PhoneBook" then adding an entry to the list every time it matches the nameToDelete
        if len(isItInPhoneBook)>0:
            phoneBook.remove(isItInPhoneBook[0])
            print(f"Deleted entry for {isItInPhoneBook[0]['name'].capitalize()}")
            listAllEntries()
        else:
            print("That name is not in the phone book!")
            return
    else:
        print ("No entries in phone book")

def listAllEntries():
    if len(phoneBook) > 0:
            print("Here is the current phone book:")
            for entry in phoneBook:
                 print(f"{entry['name'].capitalize()} : {entry['phoneNumber']}")
    else:
        print ("No entries in phone book")

while True:
    userInput = int(input("""
Electronic Phone Book
=====================
1. Look up an entry
2. Add a new entry
3. Delete an entry
4. List all entries
5. Quit 
=====================
What do you want to do (1-5)? """))
    if userInput == 1:
        lookUpNumber()
    elif userInput == 2:
        addEntry()
    elif userInput == 3:
        deleteNumber()
    elif userInput == 4:
        listAllEntries()
    elif userInput == 5:
        print ("Bye!")
        break
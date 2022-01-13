def printMenu():
    return print(
    """
    ****************
    1. Print My Name
    2. Print My City
    3. Print My Name and City
    4. Print Pizza
    Q. Quit
    ****************
    """)
def printName ():
    return print("Rayleigh")
def printCity ():
    return print ("Atlanta")
def printPizza():
    return print ("""
                                    ,(  `-.
                                    ,': `.   `.
                                ,` *   `-.   
                                ,'  ` :+  = `.  `.
                            ,~  (o):  .,   `.  `.
                            ,'  ; :   ,(__) x;`.  ;
                        ,'  :'  itz  ;  ; ; _,-'
                        .'O ; = _' C ; ;'_,_ ;
                    ,;  _;   ` : ;'_,-'   i'
                    ,` `;(_)  0 ; ','       :
                .';6     ; ' ,-'~
                ,' Q  ,& ;',-.'
            ,( :` ; _,-'~  ;
            ,~.`c _','
        .';^_,-' ~
        ,'_;-''
        ,,~
        i'
        :
    """)

# choice = input ("do you like pizza (y/n)?")

# if choice == "y" or "yes":
#     printPizza();
# else:
#     print (":(")

print ("Welcome to my program!")
choice2 = input("Would you like to see the menu (y/n) ?")
while choice2 != "n" and choice2 != "Q":
    printMenu()
    choice2 = input ("What would you like to do?")
    if choice2 == "1":
        printName()
    elif choice2 == "2":
        printCity()
    elif choice2 == "3":
        printName()
        printCity()
    elif choice2 == "4":
        printPizza()
    else:
        print ("Please choose between 1 and 4!")
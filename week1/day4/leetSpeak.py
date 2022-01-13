
def leetSpeak (string):
    finishedWord= ""
    for letter in string:
        if letter == "A" or  letter == "a":
            finishedWord= finishedWord + "4"
        elif letter == "E" or letter == "e":
            finishedWord= finishedWord + "3"
        elif letter == "G" or letter == "g":
            finishedWord= finishedWord + "6"
        elif letter == "I" or letter == "i":
            finishedWord= finishedWord + "1"
        elif letter == "O" or letter == "o":
            finishedWord= finishedWord + "0"
        elif letter =="S" or letter == "s":
            finishedWord= finishedWord + "5"
        elif letter =="T" or letter =="t":
            finishedWord= finishedWord + "7"
        else:
            finishedWord= finishedWord + letter
    print(finishedWord)

leetSpeak("CAT")
leetSpeak("Rayleigh")
leetSpeak ("abcdefghijkl")
leetSpeak("ABCDEFGHIJKL")
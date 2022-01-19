# Introduction to Classes 
# A base/template for a compex dictionary

#Defining a class
class Puppy:
    #fundamental characteristics about class
    #function runs automatically when you create a new class object/instance
    #def __init__(self) never changes
    def __init__(self,name,breed,size, happiness = ""):
        self.name = name
        self.breed = breed
        self.size = size
        self.happiness = happiness
    
    #class object has attributes, not keys
    #happiness here is an optional argument (bc we gave it default of empty string)

    def giveTreat(self):
        self.happiness = self.happiness*2
    
    def bark(self):
        print ("woof woof")
    #defining menthods <- you always need to pass it self! 
cosmo = Puppy("Cosmo", "mutt","large", )
munson = Puppy ("Munson","shipoo","small",10)
print (cosmo)
print(cosmo.name)
print(munson.happiness)
munson.giveTreat()
print (munson.happiness)
cosmo.bark()
#computer views a class object differently than a basic dictionary 
#access via dot notation (puppy.name)
print(vars(cosmo)) #this will print all of the attribtues of the class object

#new class that inherits another class
class ToyPuppy(Puppy):
    #if you want to redefine class attributes <-- if you want the same attributes, then you don't have to init
    def __init__(self, name, breed, happiness, size ="1 ft"):
        super().__init__(name, breed,happiness, size) #have to include all the arguments even if you're changing some
        self.size = size
        self.happiness = happiness
    def bark(self):
        print ("yap yap")

jellybean = ToyPuppy("Jellybean","yorkie",10)
jellybean.bark()
print(vars(jellybean))
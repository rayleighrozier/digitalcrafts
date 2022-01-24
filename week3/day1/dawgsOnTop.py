#NEED TO ADDRESS: a tie, too many 6s and 8s 
import random
class Team:
    def __init__(self, coachName, offense = 20 , defense = 20, experience = 0, wins =0):
        self.coachName = coachName
        self.offense = offense
        self.defense = defense
        self.experience = experience
        self.wins = wins
    
    
    def getScore (self, rival): 
        def getBoost (stat):
            points = stat
            boost = 0 
            while points >= 10:
                boost = boost + 1
                points = points - 10  
            return boost
        offBoost = getBoost (self.offense)
        defBoost = getBoost(self.defense)
        offMin = 0 + (3 * self.experience)
        offMax = 7 + (3 * offBoost) 
        score = random.randint(offMin, offMax)
        def defenseRoll (rival):
            probability = [True,False,False,False,False,False,False,False,False,False] # min at start is 1 in 10
            counter = rival.experience
            while counter > 0 and len(probability) > 2:
                probability.pop()
                counter = counter-1
            roll = random.choice(probability)
            return roll
        counter = defBoost
        while counter > 0:
            roll = defenseRoll(rival)
            if roll == True and score >= 7:
                score = score - 7
            elif roll == True and score >= 3:
                score = score - 3
            else:
                score = score
            counter = counter - 1
        if score != 1 and score !=4:
            return score
        else:
            score = score +2
            return score


#Game loop starts
#while True:

print ("""================
  DAWGS ON TOP
================
""")
print ("""  Glory Glory to ol' Georgia!
  After a historic championship season...
  Kirby Smart has retired as head coach of the Georgia Bulldogs.
  The coaching search was long and tedious...
  but UGA has selected YOU to lead the team.
  Will you coach the Dawgs to another trophy? 
  Or stumble against your most hated rivals?
  The road to the natty starts now! 

================
""")
coachName = input("""  What is your name? """)
print (f""" 
  Welcome Coach {coachName}! 
  Let's find out what kind of coach you are.
""")
baseStats = input("""================  

  Which number best describes your coaching style?

  1. Focused on the fundamentals (+ defense, - offense)
  2. Go big or go home (+offense , - defense)
  3. Balanced approach is best (equal offense and defense)

================ 
""")
try:
    baseStats = int(baseStats)
    if baseStats == 1:
        print("hi")
    elif baseStats == 2:
        print("hi")
    elif baseStats == 3:
        print("hi")
    else:
        print ("Oops! Try picking a number 1-3.")
except:
    print ("Oops! Try picking a number 1-3.")
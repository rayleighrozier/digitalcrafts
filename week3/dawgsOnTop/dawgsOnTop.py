#NEED TO ADDRESS: a tie, too many 6s and 8s 
#uncomment the sleeps 
import random
from time import sleep

#CLASS
class Team:
    def __init__(self, teamName, coachName, offense = 20 , defense = 20, experience = 0, wins =0):
        self.teamName = teamName
        self.coachName = coachName
        self.offense = offense
        self.defense = defense
        self.experience = experience
        self.wins = wins
    
    def printStats(self):
        print(f"""
  Offense : {self.offense}
  Defense : {self.defense}
  Experience : {self.experience}
  Wins : {self.wins}

================ 
""")

    def getScore(self, rival): 
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

#BUILT-IN CLASS OBJECTS
Oregon = Team("Oregon", "Dan Lanning", 15, 20, 0, 0)

#FUNCTIONS 
def mainMenu():
    print ("""================
    """)
    # sleep(1)
    print ("""  DAWGS
    """)
    # sleep(1)
    print ("""  ON
    """)
    # sleep(1)
    print ("""  TOP
    """)
    # sleep(1)
    print ("""================
    """)
    # sleep(1)
    while True:
        try:
            mainChoice = int(input("""  What would you like to do?

  1. Start a new game
  2. Quit

================
  """))
            if mainChoice == 1 or mainChoice ==2:
                break
            else:
                print ("  Oops! Try picking 1 or 2.")
                continue
        except:
            print ("  Oops! Try picking 1 or 2.")
            continue
    return mainChoice

def getCoachName():
    # sleep (1)
    print ("""================
""")
    print ("""  Glory Glory to ol' Georgia!
  """)
    # sleep(2)
    print ("""  After a historic championship season...
  Kirby Smart has retired as head coach of the Georgia Bulldogs.
  """)
    # sleep(3)
    print ("""  The coaching search was long and tedious...
  but UGA has selected YOU to lead the team.
  """)
    # sleep(3)
    print ("""  Will you coach the Dawgs to another trophy?
  """)
    # sleep(3)
    print ("""  Or stumble against your most hated rivals?
  """)
    # sleep(3)
    print ("""  The road to the natty starts now! 
  """)
    # sleep(3)
    print ("""================
""")
    # sleep(2)
    coach = input("""  What is your name? """).capitalize()
    # sleep(0.5)
    print (f""" 
  Welcome Coach {coach}! 
  Let's find out what kind of coach you are.
    """)
    return coach

def getBaseStats():
    while True:
        try:
            baseStats = int (input("""================

  Which number best describes your coaching style?

  1. Focused on the fundamentals (+ defense, - offense)
  2. Go big or go home (+offense , - defense)
  3. Balanced approach is best (equal offense and defense)

================ 
  """))
            if baseStats == 1 or baseStats == 2 or baseStats == 3:
                break
            else:
                print ("  Oops! Try picking a number 1-3.")
                continue
        except:
            print ("  Oops! Try picking a number 1-3.")
            continue  
    if baseStats == 1:
        Georgia = Team("Georgia",coach, offense = 10 , defense = 30, experience = 0, wins =0 )
        print ("""================

  Defense all the way! Here are your starting stats.""")
        Georgia.printStats()
    if baseStats == 2:
        Georgia = Team("Georgia",coach, offense = 30 , defense = 10, experience = 0, wins =0 )
        print ("""================

  Now that's a powerhouse offense! Here are your starting stats.""")
        Georgia.printStats()
 
    if baseStats == 3:
        Georgia = Team("Georgia",coach, offense = 20 , defense = 20, experience = 0, wins =0 )
        print ("""================

  Best of both worlds! Here are your starting stats.""")
        Georgia.printStats()  

def coachMenu (rival):
    while True:
        try:
            coachChoice = int(input(f"""================  

  What would you like to do?

  1. Check my stats
  2. Check {rival.teamName}'s stats
  3. Prepare for {rival.teamName} 
  4. Quit 

================
    """))
            if coachChoice == 1 or coachChoice ==2 or coachChoice ==3 or coachChoice ==4:
                break
            else:
                print ("  Oops! Try picking 1-4.")
                continue
        except:
            print ("  Oops! Try picking 1-4.")
            continue
    print (coachChoice)
    return coachChoice

def coachMenu2 (rival):
    while True:
        try:
            coachChoice = int(input(f"""================

  What would you like to do?

  1. Check my stats
  2. Check {rival.teamName}'s stats
  3. Play game against {rival.teamName} 
  4. Quit 

================
    """))
            if coachChoice == 1 or coachChoice ==2 or coachChoice ==3 or coachChoice ==4:
                break
            else:
                print ("  Oops! Try picking 1-4.")
                continue
        except:
            print ("  Oops! Try picking 1-4.")
            continue
    print (coachChoice)
    return coachChoice

#GAME LOOP
while True:
    mainChoice = mainMenu()
    if mainChoice == 2:
        print ("  Goodbye!")
        break
    if mainChoice == 1:
        coach = getCoachName()
        getBaseStats()
        print("""  The choices you make as coach will impact your stats 
  and affect your chances of winning games. 
    """)
        print("""  There are 5 games in the regular season. 
  Win 3 of them, and you'll have a shot at a title. 

  For Game One, the Dawgs are taking on Oregon in Atlanta.
""")
        coachMenu (Oregon)
    
        


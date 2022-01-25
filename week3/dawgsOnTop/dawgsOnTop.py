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
  {self.teamName.upper()}

  Offense : {self.offense}
  Defense : {self.defense}
  Experience : {self.experience}
  Wins : {self.wins}

================ 
""")

    def prepareTeam(self):
        while True:
            try:
                choice = int(input("""  How will your team prepare this week?

  1. Practice trick plays (+ random offense boost)
  2. Run a ton of drills (+ random defense boost)
  3. Study the film (+1 experience)
                
                """))
                if choice == 1 or choice ==2 or choice ==3:
                    break
                else:
                    print ("  Oops! Try picking 1-3.")
                    continue
            except:
                print ("  Oops! Try picking 1-3.")
                continue
        if choice == 1:
            boost = random.randint(5,15)
            self.offense = self.offense + boost
            print(f"""  They'll never see it coming! Your offense was boosted by {boost}.
""") 
            print ("""  Here are your updated stats:""")      
            self.printStats()
        if choice == 2:
            boost = random.randint(5,15)
            self.defense = self.defense + boost
            print(f"""  No pain no gain! Your defense was boosted by {boost}.
""") 
            print ("""  Here are your updated stats:""")      
            self.printStats()
        if choice == 3:
            self.experience = self.experience + 1
            print(f"""  Studying pays off! Your experience was boosted by 1.
""") 
            print ("""  Here are your updated stats:""") 
            self.printStats()
    
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
Georgia = Team("Georgia","", 20 , 20, 0, 0 )
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

def getBaseStats(team):
    while True:
        try:
            baseStats = int (input("""================

  Which number best describes your coaching style?

  1. Go big or go home (+offense , - defense)
  2. Focused on the fundamentals (+ defense, - offense)
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
        team.offense = 30
        team.defense = 10
        print ("""================

  Now that's a powerhouse offense! Here are your starting stats.""")
        team.printStats()
        return Georgia
    if baseStats == 2:
        team.offense = 10
        team.defense = 30
        print ("""================

  Defense all the way! Here are your starting stats.""")
        team.printStats()
        return team
    if baseStats == 3:
        print ("""================

  Best of both worlds! Here are your starting stats.""")
        team.printStats()  
        return team
    print("""  The choices you make as coach will impact your stats 
  and affect your chances of winning games. 
""")
    print("""  There are 5 games in the regular season. 
  Win 3 of them, and you'll have a shot at a title. 
""")
    print("""  To kickoff the season, the Dawgs are taking on Oregon in Atlanta.
""")

def coachMenu (team, rival):
    while True:
        try:
            coachChoice = int(input(f"""================  

  MENU 1 What would you like to do?

  1. Check my stats
  2. Check {rival.teamName}'s stats
  3. Prepare for {rival.teamName} 
  4. Go back to Main Menu 

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
    
    if coachChoice == 1:
        print("""  Here are your current stats.
""")
        team.printStats()
        return False
    if coachChoice == 2:
        print(f"""  Here are {rival.teamName}'s current stats.
""")
        rival.printStats()
        return False
    if coachChoice == 3:
        team.prepareTeam()
        while True:
            menu2flag = coachMenu2 (Georgia,Oregon)
            if menu2flag:
                return True
                break
    if coachChoice == 4:
        return True

def coachMenu2 (team, rival):
    while True:
        try:
            coachChoice = int(input(f"""================  

  MENU 2 What would you like to do?

  1. Check my stats
  2. Check {rival.teamName}'s stats
  3. Play game against {rival.teamName} 
  4. Go back to Main Menu 

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
    if coachChoice == 1:
        print("""  Here are your current stats.
""")
        team.printStats()
    if coachChoice == 2:
        print(f"""  Here are {rival.teamName}'s current stats.
""")
        rival.printStats()
    if coachChoice == 3:
        print("This is where we are going to play the game")
    if coachChoice == 4:
        return True
        

#GAME LOOP
while True:
    mainChoice = mainMenu()
    if mainChoice == 2:
        print ("  Goodbye!")
        break
    if mainChoice == 1:
        coach = getCoachName()
        getBaseStats(Georgia)
        while True:
            flag = coachMenu(Georgia, Oregon)  #flag is none unless you pick 3 or 4
            if flag:
                break

        
        

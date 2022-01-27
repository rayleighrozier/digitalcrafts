#SLEEPS
#PROOFREAD
#MORE PRE GAME DECISIONS TO IMPACT RIVAL
import menus
import storyText
import random
from time import sleep


#CLASS
class Team:
    def __init__(self, teamName, coachName, offense = 20 , defense = 20, experience = 0, wins =0 , losses = 0):
        self.teamName = teamName
        self.coachName = coachName
        self.offense = offense
        self.defense = defense
        self.experience = experience
        self.wins = wins
        self.losses = losses
    
    def printStats(self):
        print(f"""  {self.teamName.upper()}

  Offense : {self.offense}
  Defense : {self.defense}
  Experience : {self.experience}
  Wins : {self.wins}
  Losses : {self.losses}
  """)

    def prepareTeam(self): #update with other options (ex. QB)
        while True:
            try:
                choice = int(input("""================

  How will your team prepare this week?

  1. Practice trick plays (+ random offense boost)
  2. Run a ton of drills (+ random defense boost)
  3. Study the film (+1 experience)

================ 
  """))
                if choice == 1 or choice ==2 or choice ==3:
                    break
                else:
                    print ("""  Oops! Try picking 1-3.

================ """)
                    continue
            except:
                print ("""  Oops! Try picking 1-3.
                    
================ """)
                continue
        if choice == 1:
            boost = random.randint(5,15)
            self.offense = self.offense + boost
            print(f"""================ 

  They'll never see it coming! Your offense was boosted by {boost}.
  """) 
            print ("""================ 
  
  Here are your updated stats:
""")      
            self.printStats()
        if choice == 2:
            boost = random.randint(5,15)
            self.defense = self.defense + boost
            print(f"""================ 
  
  No pain no gain! Your defense was boosted by {boost}.
  """) 
            print ("""================ 

  Here are your updated stats:
""")      
            self.printStats()
        if choice == 3:
            self.experience = self.experience + 1
            print(f"""================ 

  Studying pays off! Your experience was boosted by 1.
""") 
            print ("""================ 

  Here are your updated stats:
  """) 
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

    def halftimeAdjustment(self): ###
        while True:
            try:
                choice = int(input("""================

  Which halftime adjustment will you make?

  1. Change quarterbacks (+ random offense boost)
  2. Retool the defense (+ random defense boost)
  3. Give inspirational locker room speech (+1 experience and small random stat boost)

================ 
  """))
                if choice == 1 or choice ==2 or choice ==3:
                    break
                else:
                    print ("""  Oops! Try picking 1-3.

================ """)
                    continue
            except:
                print ("""  Oops! Try picking 1-3.
                    
================ """)
                continue
        if choice == 1:
            boost = random.randint(5,15)
            self.offense = self.offense + boost
            print(f"""================

  The backup is ALWAYS better than the starter. Your offense was boosted by {boost}.
  """) 
            print ("""  Here are your updated stats:
""")      
            self.printStats()
        if choice == 2:
            boost = random.randint(5,15)
            self.defense = self.defense + boost
            print(f"""================ 
  
  Defense wins championships! Your defense was boosted by {boost}.
  """) 
            print ("""================ 

  Here are your updated stats:
  """)      
            self.printStats()
        if choice == 3:
            self.experience = self.experience + 1
            tinyBoost = random.choice(["offense", "defense"])
            boost = random.randint(1,5)
            if tinyBoost == "offense":
                self.offense = self.offense + boost
            if tinyBoost == "defense":
                self.defense = self.defense + boost
            print(f"""================ 

  What a speech! Is that linebacker crying? 
  Your experience was boosted by 1 and your 
  {tinyBoost} was boosted by {boost}.
""") 
            print ("""  Here are your updated stats:""") 
            self.printStats()

    def playGame(self, rival):
        print (f"""================

  It's game day! {self.teamName} and {rival.teamName} are facing off.
""")
        print("  Gooooooo..... ")
        print("  Dawgs! ")
        print("  Sic 'em! ")
        print("""  Woof woof woof woof!  
""")
        teamHalf1 = self.getScore(rival) 
        rivalHalf1 = rival.getScore(self)
        if teamHalf1 > rivalHalf1:
            print(f"""  Strong start for the Dawgs!
  They're in the lead after the first half.
  """)
        elif teamHalf1 < rivalHalf1:
             print(f"""  It's time to hunker down! 
  The Dawgs are trailing after the first half.
  """)
        else:
            print(f"""  It's anybody's game! 
  The teams are tied going into the second half.
  """)
        print (f"""
  HALFTIME SCORE:
  {self.teamName} - {teamHalf1}
  {rival.teamName} - {rivalHalf1}
        """)
        Georgia.halftimeAdjustment() 
        print ("""  Time for the second half.
""")
        print("  Gooooooo..... ")
        print("  Dawgs! ")
        print("  Sic 'em! ")
        print("""  Woof woof woof woof!  
""")
        teamHalf2 = self.getScore(rival) 
        rivalHalf2 = rival.getScore(self)
        #tie condition
        if (teamHalf1 + teamHalf2) == (rivalHalf1 + rivalHalf2):
            coinflip = random.choice([1,2])
            if coinflip == 1:
                teamHalf2 = teamHalf2 + 1 
            if coinflip == 2:
                rivalHalf2 = rivalHalf2 + 1
        teamFinal = teamHalf1 + teamHalf2
        rivalFinal = rivalHalf1 + rivalHalf2
        if teamFinal > rivalFinal and (teamFinal - rivalFinal) > 14:
            print (f"""  It's a blowout! The dawgs handle {rival.teamName} easily. """)
        elif teamFinal > rivalFinal and (teamFinal - rivalFinal) < 3:
            print (f"""  That was a close one! Georgia squeaks out
  a victory against {rival.teamName}. """)
        elif teamFinal > rivalFinal:
             print (f"""  A W for the dawgs! Georgia takes down {rival.teamName}. """)
        elif teamFinal < rivalFinal and (rivalFinal - teamFinal) > 14:
             print (f"""  Oof! {rival.teamName} had your number today.
  Dawgs lose and it wasn't pretty. """)
        elif teamFinal < rivalFinal and (rivalFinal - teamFinal) < 3:
            print (f"""  What a heartbreaker! Georgia comes up just short.
  {rival.teamName} wins. """)
        else:
             print (f"""  Sometimes it's just not your day. {rival.teamName} wins. """)
        print (f"""
  FINAL SCORE:
  {self.teamName} - {teamFinal}
  {rival.teamName} - {rivalFinal}
        """)
        if (teamHalf1 + teamHalf2) > (rivalHalf1 + rivalHalf2):
            self.wins = self.wins + 1
            self.experience = self.experience + 1
            winTracker.append(rival.teamName)
            print (f"""  {self.teamName}'s Current Record: {self.wins} - {self.losses} """)
            print (f"""  You also gained +1 experience! 
            
================""")
        if (teamHalf1 + teamHalf2) < (rivalHalf1 + rivalHalf2):
            self.losses = self.losses + 1
            self.experience = self.experience + 1
            print (f"""  {self.teamName}'s Current Record: {self.wins} - {self.losses} """)
            print (f"""  You still gained +1 experience! 
            
================""")


#BUILT-IN CLASS OBJECTS/VARIABLES
Georgia = Team("Georgia","", 20 , 20, 0, 0, 0)
Oregon = Team("Oregon", "Dan Lanning", 15, 20, 0, 0, 0)
Tennessee = Team("Tennessee", "Josh Heupel", 30, 10, 2, 0, 1)
Florida = Team("Florida", "Billy Napier", 30, 40, 3, 2, 0)
Auburn = Team ("Auburn", "Bryan Harsin", 50, 20, 4, 2, 1)
GeorgiaTech = Team("Georgia Tech", "Geoff Collins", 50, 10, 4, 1, 3)
Alabama = Team ("Alabama", "Nick Saban", 80, 100, 7, 5, 0)
NotreDame = Team("Notre Dame", "Marcus Freeman", 100 , 60, 0, 6, 0)
Alabama2 = Team ("Alabama 2", "Nick Saban", 100, 100, 10, 6, 1)

winTracker = []

#FUNCTIONS 









#GAME LOOP
while True:
    Georgia = Team("Georgia","", 20 , 20, 0, 0, 0)
    winTracker = []
    mainChoice = menus.mainMenu()
    if mainChoice == 2:
        print ("  Goodbye!")
        break
    if mainChoice == 1:
        Georgia.coachName = menus.coachName()
        menus.baseStats(Georgia)
        while True:
            while (Georgia.wins + Georgia.losses) == 0 :
                flag = menus.coachMenu(Georgia, Oregon)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 1 :
                storyText.postOregon(winTracker,Georgia)
            while (Georgia.wins + Georgia.losses) == 1 :
                flag = menus.coachMenu(Georgia,Tennessee)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 2 :
                storyText.postTennessee(winTracker,Georgia)
            while (Georgia.wins + Georgia.losses) == 2 :
                flag = menus.coachMenu(Georgia, Florida)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 3 :
                storyText.postFlorida(Georgia)
            while (Georgia.wins + Georgia.losses) == 3 :
                flag = menus.coachMenu(Georgia, Auburn)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 4 : 
                storyText.postAuburn(winTracker)
            while (Georgia.wins + Georgia.losses) == 4 :
                flag = menus.coachMenu(Georgia, GeorgiaTech) 
                if flag:
                    break
            if Georgia.wins >= 3:
                storyText.SECBound(Georgia)
                while (Georgia.wins + Georgia.losses) == 5 :
                    flag = menus.coachMenu(Georgia, Alabama)
                    if flag:
                        break
            elif (Georgia.wins + Georgia.losses) == 5 and Georgia.wins < 3:
                storyText.noSEC(Georgia)
                break
            if "Alabama" in winTracker:
                storyText.playoff()
                while (Georgia.wins + Georgia.losses) == 6 :
                    flag = menus.coachMenu(Georgia, NotreDame)
                    if flag:
                        break
            elif (Georgia.wins + Georgia.losses) == 6:
                storyText.tryAgain(Georgia)
                break
            if "Notre Dame" in winTracker:
                storyText.championship(Georgia)
                while (Georgia.wins + Georgia.losses) == 7 :
                    flag = menus.coachMenu(Georgia, Alabama2)
                    if flag:
                        break
            elif (Georgia.wins + Georgia.losses) == 7:
                storyText.tryAgain(Georgia)
                break
            if "Alabama 2" in winTracker:
                storyText.dawgsWin(Georgia)
                break  
            elif (Georgia.wins + Georgia.losses) == 8:
                storyText.tideWins(Georgia)
                break
            else:
                break
            
            
           
        

        
        

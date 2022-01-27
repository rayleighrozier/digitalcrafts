 #uncomment the sleeps
#for every menu put line at bottom 
# one space for answers 

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


#BUILT-IN CLASS OBJECTS
#### Add in team stats
## offense defense experience wins losses
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
                print ("""  Oops! Try picking 1 or 2.

================ """)
                continue
        except:
            print ("""  Oops! Try picking 1 or 2.

================ """)
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
================ 

  Welcome Coach {coach}! 
  Let's find out what kind of coach you are.

================ """)
    return coach

def getBaseStats(team):
    while True:
        try:
            baseStats = int (input("""  
  Which number best describes your coaching style?

  1. Go big or go home (+offense , - defense)
  2. Focused on the fundamentals (+ defense, - offense)
  3. Balanced approach is best (equal offense and defense)

================ 
  """))
            if baseStats == 1 or baseStats == 2 or baseStats == 3:
                break
            else:
                print ("""  Oops! Try picking 1-3.

================ """)
                continue
        except:
            print ("""  Oops! Try picking 1-3.

================ """)
            continue  
    if baseStats == 1:
        team.offense = 30
        team.defense = 10
        print ("""================ 

  Now that's a powerhouse offense! Here are your starting stats.
  """)
        team.printStats()
    if baseStats == 2:
        team.offense = 10
        team.defense = 30
        print ("""================ 

  Defense all the way! Here are your starting stats.
  """)
        team.printStats()
    if baseStats == 3:
        print ("""================ 

  Best of both worlds! Here are your starting stats.
  """)
        team.printStats()  
        
    print("""================   
  
  The choices you make as coach will impact your stats 
  and affect your chances of winning games. 
""")
    print("""  There are 5 games in the regular season. 
  Win 3 of them, and you'll have a shot at a title. 
""")
    print("""  To kickoff the season, the Dawgs are taking on Oregon in Atlanta.
""")
    return team

def coachMenu (team, rival):
    while True:
        try:
            coachChoice = int(input(f"""================  

  What would you like to do?

  1. Check my stats
  2. Check {rival.teamName}'s stats
  3. Prepare for {rival.teamName} 
  4. Go back to Main Menu 

================
    """))
            if coachChoice == 1 or coachChoice ==2 or coachChoice ==3 or coachChoice ==4:
                break
            else:
                print ("""  Oops! Try picking 1-4.
================ """)
                continue
        except:
            print ("""  Oops! Try picking 1-4.
================ """)
            continue
    
    if coachChoice == 1:
        print("""================ 

  Here are your current stats.
""")
        team.printStats()
        return False
    if coachChoice == 2:
        print(f"""================

  Here are {rival.teamName}'s current stats.
""")
        rival.printStats()
        return False
    if coachChoice == 3:
        team.prepareTeam()
        while True:
            menu2flag = coachMenu2 (team, rival)
            if menu2flag:
                return True
    if coachChoice == 4:
        return True

def coachMenu2 (team, rival):
    while True: #######
        try:
            coachChoice = int(input(f"""================  

  What would you like to do?

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
        print("""================    
  
  Here are your current stats.
""")
        team.printStats()
    if coachChoice == 2:
        print(f"""================
  
  Here are {rival.teamName}'s current stats.
""")
        rival.printStats()
    if coachChoice == 3:
        Georgia.playGame(rival)
        return True
    if coachChoice == 4:
        return True



#GAME LOOP
while True:
    Georgia = Team("Georgia","", 20 , 20, 0, 0, 0)
    winTracker = []
    mainChoice = mainMenu()
    if mainChoice == 2:
        print ("  Goodbye!")
        break
    if mainChoice == 1:
        Georgia.coachName = getCoachName()
        getBaseStats(Georgia)
        while True:
            while (Georgia.wins + Georgia.losses) == 0 :
                flag = coachMenu(Georgia, Oregon)
                if flag:
                    break
            #After Oregon 
            if "Oregon" in winTracker:
                    print(f"""
  Congratulations on the victory, Coach {Georgia.coachName}.
  Now, we're moving into SEC play.
  """)
            else:
                    print(f"""  
  Tough luck against Oregon, Coach {Georgia.coachName}.
  But here is your chance to redeem yourself!""")
            print(f"""  Your next opponent is Tennessee.
""")
            while (Georgia.wins + Georgia.losses) == 1 :
                flag = coachMenu(Georgia,Tennessee)
                if flag:
                    break
            if "Tennessee" in winTracker:
                print(f"""
  Way to beat Big Orange, Coach {Georgia.coachName}.
  But there's another ugly orange rival right around the corner.
  """)
            else:
                print(f"""
  Big Orange got the best of you, Coach {Georgia.coachName}.
  And now there's another ugly orange rival right around the corner.
  """)
            print(f"""  Your next opponent is Florida.
  It's the World's Largest Outdoor Cocktail Party! 
""")
            while (Georgia.wins + Georgia.losses) == 2 :
                flag = coachMenu(Georgia, Florida)
                if flag:
                    break
            print(f"""           
  The Gators have gone back to the swamp, and you're
  over halfway through the season Coach {Georgia.coachName}!""") 
            print("""  
  But the Deep South's Oldest Rivalry is just a week away. """)
            print (f"""  
  Your next opponent is Auburn.""")
            while (Georgia.wins + Georgia.losses) == 3 :
                flag = coachMenu(Georgia, Auburn)
                if flag:
                    break
            if "Auburn" in winTracker:
                print(f"""
  Down go the tigers! That's the end of SEC play.
  There's just one game left in the regular season.
  """)
            else:
                print(f"""
  Auburn gets lucky again! That's the end of SEC play.
  There's just one game left in the regular season.
  """)
            print(f"""  Your next opponent is that tiny
  trade school down the road, Georgia Tech.
  """)
            while (Georgia.wins + Georgia.losses) == 4 :
                flag = coachMenu(Georgia, GeorgiaTech) 
                if flag:
                    break
            while (Georgia.wins + Georgia.losses) == 5 :
                if Georgia.wins >= 3:
                    print(f"""
  Congratulations Coach {Georgia.coachName}! At the end of the regular season,
  your record is {Georgia.wins} - {Georgia.losses}.                           
""") 
                    print(f"""  You are on top of the SEC East, and now you have a
  chance to play for an SEC title. 
""")
                    print(f"""  As always, your opponent is Alabama. 
""")
                    flag = coachMenu(Georgia, Alabama)
                    if flag:
                        break
                else:
                    print(f"""  That's the end of the regular season! 
  Unfortunately, Coach {Georgia.coachName}, you did not get enough wins 
  to advance to the SEC Championship.
""")   
                    print(f"""  Your final record is {Georgia.wins} - {Georgia.losses}.
   Not a bad first season! Try again to see if you can lead the dawgs to a national
   championship.""")
                    break
            while (Georgia.wins + Georgia.losses) == 6 :
                    if "Alabama" in winTracker:
                        print(f"""  Dawgs on top! You took down the Crimson Tide,
  and now Georgia is headed to the playoffs.
""")                    
                        print(f"""  Your first round opponent is Notre Dame.
  Win this, and you'll have a shot at the championship!  
""")
                        flag = coachMenu(Georgia, NotreDame)
                        if flag:
                            break
                    else:
                        print(f"""  Your final record is {Georgia.wins} - {Georgia.losses}.
   Not a bad first season! Try again to see if you can lead the dawgs to a national
   championship.""")
                        break
            while (Georgia.wins + Georgia.losses) == 7 :
                    if "Notre Dame" in winTracker:
                        print(f"""  It all comes down to this.
""")                    
                        print(f"""  In your first season as head coach, 
you've led the dawgs all the way to the national championship game.  
""")
                        print(f"""  I bet you're wondering who you'll be playing...
""")
                        print(f"""  But you already know the answer. 
""")
                        print(f"""  ........... 
""")
                        print(f"""  ........... 
""")
                        print(f"""  ........... 
""")
                        print(f"""  It's freaking Alabama. Again. 
""")
                        flag = coachMenu(Georgia, Alabama2)
                        if flag:
                            break
                    else:
                        print(f"""  Your final record is {Georgia.wins} - {Georgia.losses}.
   Not a bad first season! Try again to see if you can lead the dawgs to a national
   championship.""")
                        break
                    if "Alabama 2" in winTracker:
                        print(f"""  Glory, Glory to ol' Georgia!
""")                    
                        print(f"""  Glory, Glory to ol' Georgia!
""")                    
                        print(f"""  Glory, Glory to ol' Georgia!
""")                    
                        print(f"""  And to hell with Alabama! 
""")                    
                        print(f"""  Congratulations Coach {Georgia.coachName}!
  In your first season as head coach, you led Georgia to a national title! 
""")
                        print(f"""  How 'bout them dawgs!
""")                    
                        print ("""  You can play again or quit from the main menu.""")
                        break  
                    else:
                        print(f"""  Freaking Alabama. Your final record is {Georgia.wins} - {Georgia.losses}.
   Not a bad first season! Try again to see if you can lead the dawgs to a national
   championship.""")
                        break
            break
            
            
           
        

        
        

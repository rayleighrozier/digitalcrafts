#POSSIBLE NAMES
#Dawgs on Top
#Top Dawgs 
#Glory Glory

#somehow make georgia g in pixel art 
#put it after every win

# DAWGS ON TOP
#*music note* Glory Glory to ol' Georgia! *music note
# After a historic championship season, Kirby Smart has retired as head coach of the Georgia Bulldogs.
#The coaching search was long and tedious, but UGA has selected you as the next head coach.
#Will you lead the Dawgs to another trophy? Or stumble against your most hated rivals (*cough* Alabama) ? The road to the natty starts now! 


#What is your name?
#name = Coach {input}

#Which describes your coaching style?
    # Focused on the fundamentals (offense = 1 , defense =3 )
    # Go big or go home (offense = 3 , defense = 1)
    # Balanced approach is best (neutral offense = 2, defense = 2 )

#experience starts at zero, you get more as you win


#for every game
#Who are you starting at quarterback 
    # steston (++++ experience)
    # carson beck (+++offense)
#How will your team prepare?
      #run a ton of drills (+defense (random))
      #practice trick plays (+offense (random))
      #study the film (+experience)

#How scoring will work  
# UGA Score == returns random number out of your team's range
#       Every offense point you have == +7 to your range/possible score (ex. from 0-21 to 0-28)
#       Every defense point your **OPPONENT has, they have a *chance to knock 7 points off your score 
#       Every experience point:
            #increases probability of your defense knocking 7 points off by 10%
            #increases the bottom number of your offense points range by 7 points (ex. from 0-21 to 7-21)
    
#Opponent Score == random number out of their teams range minus whatever your defense did
#If your score is bigger than theirs, you win the game (and gain one experience point)
import random
class Team:
    def __init__(self, coachName, offense = 2 , defense = 2, experience = 0, wins =0):
        self.coachName = coachName
        self.offense = offense
        self.defense = defense
        self.experience = experience
        self.wins = wins
    
    def getScore (self,rival):
        offenseMin = 3 + (self.experience * 7) # minimum at start is 3
        offenseMax = 14 + (self.offense * 7) # maximum at start is between 14 and 35
        score = random.randint(offenseMin, offenseMax)
        def defenseRoll (rival):
            probability = [True,False,False,False,False,False,False] # min at start is 1 in 7
            counter = rival.experience
            while counter > 0 and len(probability) > 2:
                probability.pop()
                counter = counter-1
            roll = random.choice(probability)
            return roll
        counter = rival.defense #min at start is 1 , max is 3
        while counter > 0:
            roll = defenseRoll(rival)
            if roll == True and score >= 7:
                score = score - 7
            elif roll == True and score >= 3:
                score = score - 3
            else:
                score = score
            counter = counter - 1
        return score
    
Georgia = Team("Georgia") 
Oregon = Team("Oregon")

#stuff to test hard mode team
# Oregon.experience = 5
# Oregon.defense = 8
# Oregon.offense = 10

print (f"""
FINAL SCORE:
Georgia - {Georgia.getScore(Oregon)}
Oregon - {Oregon.getScore(Georgia)}
""")

# def defenseRoll2():
#     defProbability = [True,False,False,False,False,False,False]
#     counter = opposingTeam.experience
#     while counter > 0 and len(defProbability) > 2:
#         defProbability.pop()
#         counter = counter-1
#     roll = random.choice(defProbability)
#     return roll

# #for every point in defense, you get a defense roll 
   
# offMin = 3 + (fakeUGA.experience * 7) #might need to lower to 3
# offMax = 30 + (fakeUGA.offense * 7) #might need to lower to 3
# print(f"minimum is {offMin} and maximum is {offMax}")
# opposingTeam.defense =  8
# opposingTeam.experience = 3
# def getScore ():
#     score = random.randint(offMin, offMax)
#     counter = opposingTeam.defense
#     while counter > 0:
#         roll = defenseRoll()
#         if roll == True and score >= 7:
#             score = score - 7
#         elif roll == True and score >= 3:
#             score = score - 3
#         counter = counter - 1
#     return score
# getScore()



#game one oregon
# ++ defense but no experience 

# 

    


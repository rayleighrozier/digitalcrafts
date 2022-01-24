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

    
Georgia = Team("Georgia") 
Oregon = Team("Oregon")

Georgia.offense = 52
Georgia.defense = 55
Oregon.offense = 0
Oregon.defense = 10

teamHalf1 = Georgia.getScore(Oregon)
rivalHalf1 = Oregon.getScore(Georgia)

print (f"""
HALFTIME SCORE:
Georgia - {teamHalf1}
Oregon - {rivalHalf1}
""")

#will need to put in function

teamHalf2 = Georgia.getScore(Oregon)
rivalHalf2 = Oregon.getScore(Georgia)

if teamHalf2 == 1 or teamHalf2 == 4:
    teamHalf2 = teamHalf2 +2

if rivalHalf2 == 1 or rivalHalf2 == 4:
    rivalHalf2 = rivalHalf2 +2


teamFinal = teamHalf1 + teamHalf2
rivalFinal = rivalHalf1 + rivalHalf2 

if teamFinal == rivalFinal: 
    
print (f"""
FINAL SCORE:
Georgia - {teamFinal}
Oregon - {rivalFinal}
""")

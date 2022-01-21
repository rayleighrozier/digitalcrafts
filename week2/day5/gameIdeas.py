#POSSIBLE NAMES
#Dawgs on Top
#Top Dawgs 
#Glory Glory

#somehow make georgia g in pixel art 
#put it after every win

# DAWGS ON TOP
#Glory Glory to ol' Georgia! After a historic championship season, Kirby Smart has retired as head coach of the Georgia Bulldogs.
#The coaching search was long and tedious, but UGA has selected you as the next head coach.
#Will you lead the Dawgs to another trophy? Or stumble against your most hated rivals (*cough* Alabama) ? The road to the natty starts now! 


#What is your name?
#name = Coach {input}

#Which describes your coaching style?
    # Focused on the fundamentals (offense = 1 , defense =3 )
    # Go big or go home (offense = 3 , defense = 1)
    # Balanced approach is best (neutral offense = 2, defense = 2 )

#experience starts at zero, you get more as you win
#how will experience mechanic work? will experience mechanic lead to better rolls

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




#game one oregon
# ++ defense but no experience 



class Team:
    def __init__(self, coachName, offense = 2 , defense = 2, experience = 0):
        self.coachName = coachName
        self.offense = offense
        self.defense = defense
        self.experience = experience


class rivalTeam (Coach):
    print("hi")
    #no name needed I guess
    


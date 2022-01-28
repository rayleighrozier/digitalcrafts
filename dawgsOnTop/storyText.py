#story text 

from time import sleep

def postOregon(list, team):
    if "Oregon" in list:
        print(f"""
  Congratulations on the victory, Coach {team.coachName}.
  Now, we're moving into SEC play.
""")
    else:
        print(f"""  
  Tough luck against Oregon, Coach {team.coachName}.
  But here is your chance to redeem yourself!
""")
    print(f"""  Your next opponent is Tennessee.
""")

def postTennessee(list,team):
    if "Tennessee" in list:
        print(f"""
  Way to beat Big Orange, Coach {team.coachName}.
  But there's another ugly orange rival right around the corner.
""")
    else:
        print(f"""
  Big Orange got the best of you, Coach {team.coachName}.
  And now there's another ugly orange rival right around the corner.
""")
    print(f"""  Your next opponent is Florida.
  It's the World's Largest Outdoor Cocktail Party!
""") 

def postFlorida(team):
    print(f"""           
  The Gators have gone back to the swamp, and you're
  over halfway through the season Coach {team.coachName}!
""") 
    print("""  But the Deep South's Oldest Rivalry is just a week away. 
""")
    print (f"""  Your next opponent is Auburn.
""")

def postAuburn(list):
    if "Auburn" in list:
        print(f"""
  Down go the tigers! That's the end of SEC play.
  There's just one game left in the regular season.
""")
    else:
        print(f"""
  Auburn gets lucky again! That's the end of SEC play.
  There's just one game left in the regular season.
""")
    print(f"""  Your next opponent is that tiny trade school
  down the road, Georgia Tech.
""")

def SECBound(team):
    print(f"""
  Congratulations Coach {team.coachName}! At the end of the regular season,
  your record is {team.wins} - {team.losses}.                           
""") 
    print(f"""  You are on top of the SEC East, and now you have a
  chance to play for an SEC title. 
""")
    print(f"""  As always, your opponent is Alabama. 
""")

def noSEC(team):
    print(f"""  That's the end of the regular season! 
  Unfortunately, Coach {team.coachName}, you did not get enough wins 
  to advance to the SEC Championship.
""")   
    print(f"""  Not a bad first season! Try again to see if you can lead the dawgs to a national
   championship.""")

def playoff():
        print(f"""  
  Dawgs on top! You took down the Crimson Tide,
  and now Georgia is headed to the playoffs.
""")                    
        print(f"""  Your first round opponent is Notre Dame.
  Win this, and you'll have a shot at the championship!  
""")

def championship(team):
    print(f"""  
  It all comes down to this, Coach {team.coachName}.
""")   
    sleep(3)                 
    print(f"""  In your very first season as head coach, 
  you've led the dawgs all the way 
  to the national championship game.  
""")
    sleep(3)
    print(f"""  I bet you're wondering who you'll be playing...
""")
    sleep(3)
    print(f"""  But you already know the answer. 
""")
    sleep(2)
    print(f"""  ........... 
""")
    sleep(2)
    print(f"""  ........... 
""")
    sleep(2)
    print(f"""  ........... 
""")
    sleep(3)
    print(f"""  It's freaking Alabama. Again. 
""")

def tryAgain(team):
    print(f"""  
  Not a bad first season! Try again to see if you can lead the dawgs to a national
  championship.""")

def dawgsWin(team):
    sleep(2)
    print(f"""  
  Glory, Glory to ol' Georgia!
""")
    sleep(3.5)                    
    print(f"""  Glory, Glory to ol' Georgia!
""")
    sleep(3.5)                    
    print(f"""  Glory, Glory to ol' Georgia!
""")
    sleep(3.5)                    
    print(f"""  And to hell with Alabama! 
""")
    sleep(4)               
    print(f"""  Congratulations Coach {team.coachName}!
  In your first season as head coach, you led Georgia to a national title! 
""")

    print(f"""  How 'bout them dawgs!
""")
    sleep(3)                    
    print ("""  You can play again or quit from the main menu.""")
def tideWins (team):
    print(f"""
  You can beat Alabama once, but you just can't beat 'em twice.
  You came up just short against the Crimson Tide.

  Overall, it was a great first season, coach! Try again 
  to see if you can lead the dawgs to a national
  championship.""")
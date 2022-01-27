# menus and setup/intro functions

from time import sleep

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

def coachName():
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

def baseStats(team):
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

def coachMenu(team, rival):
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
            menu2flag = coachMenu2(team, rival)
            if menu2flag:
                return True
    if coachChoice == 4:
        return True

def coachMenu2 (team, rival):
    while True:
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
        team.playGame(rival)
        return True
    if coachChoice == 4:
        return True
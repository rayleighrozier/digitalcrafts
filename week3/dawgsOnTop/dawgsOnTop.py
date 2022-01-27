#SLEEPS
#PROOFREAD
#MORE PRE GAME DECISIONS TO IMPACT RIVAL
import teamClass
import menus
import storyText

#BUILT-IN CLASS OBJECTS/VARIABLES
Oregon = teamClass.Team("Oregon", "Dan Lanning", 15, 20, 0, 0, 0)
Tennessee = teamClass.Team("Tennessee", "Josh Heupel", 30, 10, 2, 0, 1)
Florida = teamClass.Team("Florida", "Billy Napier", 30, 40, 3, 2, 0)
Auburn = teamClass.Team("Auburn", "Bryan Harsin", 50, 20, 4, 2, 1)
GeorgiaTech = teamClass.Team("Georgia Tech", "Geoff Collins", 50, 10, 4, 1, 3)
Alabama = teamClass.Team("Alabama", "Nick Saban", 80, 100, 7, 5, 0)
NotreDame = teamClass.Team("Notre Dame", "Marcus Freeman", 100 , 60, 0, 6, 0)
Alabama2 = teamClass.Team("Alabama 2", "Nick Saban", 100, 100, 10, 6, 1)

#GAME LOOP
while True:
    Georgia = teamClass.Team("Georgia","", 20 , 20, 0, 0, 0)
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
                flag = menus.coachMenu(Georgia, Oregon, winTracker)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 1 :
                storyText.postOregon(winTracker,Georgia)
            while (Georgia.wins + Georgia.losses) == 1 :
                flag = menus.coachMenu(Georgia,Tennessee, winTracker)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 2 :
                storyText.postTennessee(winTracker,Georgia)
            while (Georgia.wins + Georgia.losses) == 2 :
                flag = menus.coachMenu(Georgia, Florida, winTracker)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 3 :
                storyText.postFlorida(Georgia)
            while (Georgia.wins + Georgia.losses) == 3 :
                flag = menus.coachMenu(Georgia, Auburn, winTracker)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 4 : 
                storyText.postAuburn(winTracker)
            while (Georgia.wins + Georgia.losses) == 4 :
                flag = menus.coachMenu(Georgia, GeorgiaTech, winTracker) 
                if flag:
                    break
            if Georgia.wins >= 3:
                storyText.SECBound(Georgia)
                while (Georgia.wins + Georgia.losses) == 5 :
                    flag = menus.coachMenu(Georgia, Alabama, winTracker)
                    if flag:
                        break
            elif (Georgia.wins + Georgia.losses) == 5 and Georgia.wins < 3:
                storyText.noSEC(Georgia)
                break
            if "Alabama" in winTracker:
                storyText.playoff()
                while (Georgia.wins + Georgia.losses) == 6 :
                    flag = menus.coachMenu(Georgia, NotreDame, winTracker)
                    if flag:
                        break
            elif (Georgia.wins + Georgia.losses) == 6:
                storyText.tryAgain(Georgia)
                break
            if "Notre Dame" in winTracker:
                storyText.championship(Georgia)
                while (Georgia.wins + Georgia.losses) == 7 :
                    flag = menus.coachMenu(Georgia, Alabama2, winTracker)
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
            
            
           
        

        
        

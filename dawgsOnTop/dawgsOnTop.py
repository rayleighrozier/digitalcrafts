import teamClass
import menus
import storyText
from time import sleep

Oregon = teamClass.Team("Oregon", "Dan Lanning", 15, 30, 1, 0, 0)
Tennessee = teamClass.Team("Tennessee", "Josh Heupel", 30, 20, 2, 0, 1)
Florida = teamClass.Team("Florida", "Billy Napier", 40, 50, 3, 2, 0)
Auburn = teamClass.Team("Auburn", "Bryan Harsin", 60, 30, 5, 2, 1)
GeorgiaTech = teamClass.Team("Georgia Tech", "Geoff Collins", 60, 10, 3, 1, 3)
Alabama = teamClass.Team("Alabama", "Nick Saban", 80, 100, 5, 5, 0)
NotreDame = teamClass.Team("Notre Dame", "Marcus Freeman", 100 , 60, 5, 6, 0)
Alabama2 = teamClass.Team("Alabama", "Nick Saban", 100, 100, 7, 6, 1)

###
while True:
    Georgia = teamClass.Team("Georgia","", 20 , 20, 0, 0, 0)
    winTracker = []
    mainChoice = menus.mainMenu()
    if mainChoice == 1:
        Georgia.coachName = menus.coachName()
        menus.baseStats(Georgia)
        while True:
            while (Georgia.wins + Georgia.losses) == 0 :
                flag = menus.coachMenu(Georgia, Oregon, winTracker)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 1 :
                sleep(3)
                storyText.postOregon(winTracker,Georgia)
                sleep(3)
            while (Georgia.wins + Georgia.losses) == 1 :
                flag = menus.coachMenu(Georgia,Tennessee, winTracker)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 2 :
                sleep(3)
                storyText.postTennessee(winTracker,Georgia)
                sleep(3)
            while (Georgia.wins + Georgia.losses) == 2 :
                flag = menus.coachMenu(Georgia, Florida, winTracker)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 3 :
                sleep(3)
                storyText.postFlorida(Georgia)
                sleep(3)
            while (Georgia.wins + Georgia.losses) == 3 :
                flag = menus.coachMenu(Georgia, Auburn, winTracker)
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 4 :
                sleep(3) 
                storyText.postAuburn(winTracker)
                sleep(3)
            while (Georgia.wins + Georgia.losses) == 4 :
                flag = menus.coachMenu(Georgia, GeorgiaTech, winTracker) 
                if flag:
                    break
            if (Georgia.wins + Georgia.losses) == 5 and Georgia.wins >= 3:
                sleep(3)
                storyText.SECBound(Georgia)
                sleep(3)
                while (Georgia.wins + Georgia.losses) == 5 :
                    flag = menus.coachMenu(Georgia, Alabama, winTracker)
                    if flag:
                        break
            elif (Georgia.wins + Georgia.losses) == 5 and Georgia.wins < 3:
                sleep(3)
                storyText.noSEC(Georgia)
                sleep(3)
                break
            if "Alabama" in winTracker:
                sleep(3)
                storyText.playoff()
                sleep(3)
                while (Georgia.wins + Georgia.losses) == 6 :
                    flag = menus.coachMenu(Georgia, NotreDame, winTracker)
                    if flag:
                        break
            elif (Georgia.wins + Georgia.losses) == 6:
                sleep(3)
                storyText.tryAgain()
                break
            if "Notre Dame" in winTracker:
                sleep(3)
                storyText.championship(Georgia)
                sleep(3)
                while (Georgia.wins + Georgia.losses) == 7 :
                    flag = menus.coachMenu(Georgia, Alabama2, winTracker)
                    if flag:
                        break
            elif (Georgia.wins + Georgia.losses) == 7:
                sleep(3)
                storyText.tryAgain(Georgia)
                sleep(4)
                break
            if winTracker.count("Alabama") == 2:
                sleep(3)
                storyText.dawgsWin(Georgia)
                sleep(4)
                break  
            elif (Georgia.wins + Georgia.losses) == 8:
                sleep(3)
                storyText.tideWins()
                sleep(4)
                break
            else:
                break
    if mainChoice == 2:
        print ("""================
        
  Goodbye! 

================""")
        break    
            
           
        

        
        

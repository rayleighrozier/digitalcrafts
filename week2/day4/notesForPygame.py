#imports pygame (mandatory), imports functions and variables from local so we don't have to reference every time
import pygame
from pygame.locals import *

#initializes pygame (mandatory)
pygame.init()

#size of surface display window
DISPLAYSURF = pygame.display.set_mode((300,300))
#must be integer, no such thing as "half a pixel"

#pygame uses RGB color system (0-255 , 0-255 , 0-255)
#need to make color objects to use colors
#use fill() method to color objects, just assigning a color will only change borders
color1 = pygame.Color(0, 0, 0)         # Black
color2 = pygame.Color(255, 255, 255)   # White
color3 = pygame.Color(128, 128, 128)   # Grey
color4 = pygame.Color(255, 0, 0)       # Red

#Drawing functions <-- may need to re reference
#pygame.draw.polygon(surface, color, pointlist, width)
# pygame.draw.line(surface, color, start_point, end_point, width)
# pygame.draw.lines(surface, color, closed, pointlist, width)
# pygame.draw.circle(surface, color, center_point, radius, width)
# pygame.draw.ellipse(surface, color, bounding_rectangle, width)
# pygame.draw.rect(surface, color, rectangle_tuple, width)

#Frames per second <-- need to limit so computer doesn't do as many as possible
FPS = pygame.time.Clock()
FPS.tick(60) #<--- usually between 30-60

#Sprites/player class
class Player(pygame.sprite.Sprite):  #<---- the player class inherits sprite from pygame
    def __init__(self):
        super().__init__() # <--- bring in all the stuff from sprite class
        self.image = pygame.image.load("Player.png") # pass image to the player
        self.rect = self.image.get_rect() #actually sets dimensions, or rectangle the play 
        self.rect.center = (160, 520)



#Game loop begins
while True:
       pygame.display.update() #keep updating game (updates when it is called)
       for event in pygame.event.get():
           if event.type == QUIT: #if you choose a quit event
            pygame.quit() #closes pygame window
            sys.exit() #closes python script
 
 #Event is when a user clicks, presses a keyboard button etc.
 #pygame.event.get() < --- list which events have happened

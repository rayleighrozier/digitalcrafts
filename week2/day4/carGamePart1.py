#### Notes from PART ONE of car game tutorial ####
import pygame, sys
from pygame.locals import *
import random
 
pygame.init()
 
FPS = 60
FramePerSec = pygame.time.Clock()
 
BLUE  = (0, 0, 255)
RED   = (255, 0, 0)
GREEN = (0, 255, 0)
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
 
DISPLAYSURF = pygame.display.set_mode((400,600))
DISPLAYSURF.fill(WHITE)
pygame.display.set_caption("Game")
 
class Enemy(pygame.sprite.Sprite):
      def __init__(self):
        super().__init__() 
        self.image = pygame.image.load("Enemy.png")
        self.rect = self.image.get_rect()
        self.rect.center=(random.randint(40,SCREEN_WIDTH-40),0) # <-- only init difference from player class is here
        #makes the enemy start in a random location 

      def move(self): # <--- method to move the enemy down the screen
        self.rect.move_ip(0,10) # <--- move object down by 10 pixes
        if (self.rect.bottom > 600): # <--- if the bottom of the enemy has reached the end of the screen
            self.rect.top = 0 # <--- move the enemy back to the top of the screen
            self.rect.center = (random.randint(30, 370), 0) # <--- move enemy random x axis location
 
      def draw(self, surface):
        surface.blit(self.image, self.rect) 
 
 
class Player(pygame.sprite.Sprite): #Sprites/player class
    def __init__(self): 
        super().__init__() # <--- bring in all the stuff from sprite class (built into pygame)
        self.image = pygame.image.load("Player.png") #  < --- pass image to the player
        self.rect = self.image.get_rect() # < --- actually sets dimensions, or rectangle the player is in  
        self.rect.center = (160, 520) # <--- defines a starting position for the rectangle that the player is in
 
    def update(self): # <-- method that controls movement of player
        pressed_keys = pygame.key.get_pressed() #checks if any keys have been pressed down
       #if pressed_keys[K_UP]:  <--- commented out bc we are only moving left and right
            #self.rect.move_ip(0, -5)
       #if pressed_keys[K_DOWN]:  <--- commented out bc we are only moving left and right
            #self.rect.move_ip(0,5)
         
        if self.rect.left > 0: # < --- makes sure a player can't move off screen
              if pressed_keys[K_LEFT]: # <---- if a player presses left
                  self.rect.move_ip(-5, 0) # <----move their sprite 5 pixels over to the left (along x axis)
        if self.rect.left > 0:  #<--- makes sure a player can't move off screen
              if pressed_keys[K_RIGHT]: # <---if a player presses right       
                  self.rect.move_ip(5, 0) # <--- move their sprite 5 pixels to the right on x axis
 
    def draw(self, surface): # <---- method that puts the players image onto the surface/display
        surface.blit(self.image, self.rect)  # <--- blit is what you use to "draw" the image
        # blit takes two inputs: the image + the rectangle/object around the image 
 
         
P1 = Player()
E1 = Enemy()
 
# Where the game loop starts. All of the methods in here are running continuously
while True:     
    for event in pygame.event.get():              
        if event.type == QUIT: #quit event is built into pygame
            pygame.quit()
            sys.exit()
    P1.update() # <--- check for player movement/move player
    E1.move() # <-- move the enemy
     
    DISPLAYSURF.fill(WHITE) # <--- refresh screen to white
    P1.draw(DISPLAYSURF) # <-- draw player onto the screen
    E1.draw(DISPLAYSURF) # <-- draw enemies onto the screen
         
    pygame.display.update() # <-- #keep updating game (updates when it is called)
    FramePerSec.tick(FPS) # <-- only update using the set frames per second
    #AKA repeat 60 times every second
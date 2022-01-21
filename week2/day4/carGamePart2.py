#### Notes from PART TWO of car game tutorial ####

#Imports
import pygame, sys
from pygame.locals import *
import random, time
 
#Initializing 
pygame.init()
 
#Setting up FPS 
FPS = 60
FramePerSec = pygame.time.Clock()
 
#Creating colors
BLUE  = (0, 0, 255)
RED   = (255, 0, 0)
GREEN = (0, 255, 0)
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
 
#Other Variables for use in the program
SCREEN_WIDTH = 400
SCREEN_HEIGHT = 600
SPEED = 5 # <--- what we're meddling with when INC_SPEED happens in game loop
 
#Create a white screen 
DISPLAYSURF = pygame.display.set_mode((SCREEN_WIDTH,SCREEN_HEIGHT))
DISPLAYSURF.fill(WHITE)
pygame.display.set_caption("Game")
 
 
 
class Enemy(pygame.sprite.Sprite):
      def __init__(self):
        super().__init__() 
        self.image = pygame.image.load("Enemy.png")
        self.rect = self.image.get_rect()
        self.rect.center = (random.randint(40,SCREEN_WIDTH-40), 0)    
 
      def move(self):
        self.rect.move_ip(0,SPEED)
        if (self.rect.top > 600):
            self.rect.top = 0
            self.rect.center = (random.randint(30, 370), 0)
 
 
class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__() 
        self.image = pygame.image.load("Player.png")
        self.rect = self.image.get_rect()
        self.rect.center = (160, 520)
        
    def move(self):
        pressed_keys = pygame.key.get_pressed()
       #if pressed_keys[K_UP]:
            #self.rect.move_ip(0, -5)
       #if pressed_keys[K_DOWN]:
            #self.rect.move_ip(0,5)
         
        if self.rect.left > 0:
              if pressed_keys[K_LEFT]:
                  self.rect.move_ip(-5, 0)
        if self.rect.right < SCREEN_WIDTH:        
              if pressed_keys[K_RIGHT]:
                  self.rect.move_ip(5, 0)
 
#Setting up Sprites        
P1 = Player()
E1 = Enemy()
 
#Creating Sprites Groups
#Groups are kind of like classes, allow you to easily manipulate all of them at once
enemies = pygame.sprite.Group()
enemies.add(E1) #only one enemy in this example, but it could be hundreds
all_sprites = pygame.sprite.Group()
all_sprites.add(P1) #just use the add function to add a sprite to a group
all_sprites.add(E1)
 
#Adding a new User event 
INC_SPEED = pygame.USEREVENT + 1 # <-- creates user event called "INC_SPEED"
#the plus one ensures it has a unique ID (like if we were making multiple user events)
pygame.time.set_timer(INC_SPEED, 1000) # <-- uses python's built in time stuff to call the INC_SPEED event every 1000 miliseconds (which is 1 second)
 
#Game Loop
while True:
       
    #Cycles through all events occuring  
    for event in pygame.event.get(): #<--- pull up the list of every event that's happened so far and cycle/loop through them
        if event.type == INC_SPEED: #<--- if INC_SPEED is happening (aka if timer is up)
              SPEED += 2 #<-- bump up the speed variable by 2 (this is used by enemy class)
           
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
 
 
    DISPLAYSURF.fill(WHITE)
 
    #Moves and Re-draws all Sprites
    for entity in all_sprites:
        DISPLAYSURF.blit(entity.image, entity.rect)
        entity.move()
 
    #To be run if collision occurs between Player and Enemy
    if pygame.sprite.spritecollideany(P1, enemies): # <--- if the first thing (P1) collides with / is touching any of the second group (enemies)
        #built-in method that takes regular sprite (P1, E1 etc.) as first input and sprite group as second input
          DISPLAYSURF.fill(RED) #<-- fill the screen with red
          pygame.display.update()
          for entity in all_sprites:
                entity.kill() #<-- kill all the sprites (players and enemies)
                #kill() basically stops drawing the sprite by removing it from a group (aka "killing them") , might not work if you aren't referencing a sprite group
          time.sleep(2) #<--- wait two seconds
          pygame.quit() #<--- close everything 
          sys.exit()   #<--- close everything      
         
    pygame.display.update()
    FramePerSec.tick(FPS)
